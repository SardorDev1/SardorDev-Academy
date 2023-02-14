import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useAuth } from '../companents/context/AuthUserContext';
export default function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter()
    const [error, setError] = useState(null)
    const { signInWithEmailAndPassword } = useAuth()
    const onSubmit = event => {
        setError(null)
        signInWithEmailAndPassword(email, pass)
            .then(authUser => {
                router.push("/dashboard") // profil componentini manzilini route
            })
            .catch(error => {
                setError(error.message)
            })
        event.preventDefault()
    }
    return (
        <div className='w-50 mb-5 mt-5' >
            <form onSubmit={onSubmit} >
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
