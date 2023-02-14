import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../companents/context/AuthUserContext';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")  // birinchi parol inputi
    const [passwordTwo, setPasswordTwo] = useState("") // ikkinchi parol inputi
    const router = useRouter()
    const [error, setError] = useState(null)



    const { createUserWithEmailAndPassword } = useAuth()

    const onSubmit = event => {
        setError(null)
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    router.push("/dashboard") // profilga yonaltiramiz
                })
                .catch(error => {
                    setError(error.message)
                })

        else
            setError("Passwords don't match!")
        event.preventDefault()
    }


    return (
        <>
            <div className='w-50 mb-5 mt-5' >
                <form onSubmit={onSubmit} inline>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input onChange={(e) => setPasswordOne(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input onChange={(e) => setPasswordTwo(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    {' '}
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </>
    );
}
