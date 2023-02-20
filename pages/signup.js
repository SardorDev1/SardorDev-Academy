import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Link from 'next/link';
import { useAuth } from '../companents/context/AuthUserContext';
import Navbars from '@/companents/Navbars';

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState()
    const [passwordOne, setPasswordOne] = useState("")  // birinchi parol inputi
    const [passwordTwo, setPasswordTwo] = useState("") // ikkinchi parol inputi
    const router = useRouter()
    const [error, setError] = useState(null)



    const { createUserWithEmailAndPassword } = useAuth()

    const onSubmit = event => {
        localStorage.setItem("username", username)
        setError(null)
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    router.push("/welcome") // profilga yonaltiramiz
                })
                .catch(error => {
                    alert(error.message)
                    setError(error.message)
                    if (error.message === "The email address is already in use by another account.") {
                        alert("ushbu email allaqachon boshqa foydalanuvchidan ishlatilgan")
                    } else if (email === "" || username === "" || passwordOne === "" || passwordTwo === "") {
                        alert("Kerakli boshliqni toldirmadingiz!!!")
                    }
                 
                })


        else
            setError("Passwords don't match!")
            alert("Parol bilan Tasdiqlangan parol notog'ri")
        event.preventDefault()
    }


    return (
        <>
            <section className='signUp'>
                <Navbars />
                <div className="card_signup mt-5 ">

                    <form onSubmit={onSubmit} >
                        <FormGroup>
                            <h1 className='text-center pt-5 pl-5 pr-5' >Ro'yhatdan O'tish</h1>
                            <Label for="exampleEmail" hidden>Foydalanuvchi</Label>
                            <Input onChange={(e) => setUsername(e.target.value)} type="text" name="text" id="exampleEmail" placeholder="Ismingizni kiriting" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="Elektron pochtangizni kiriting" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input onChange={(e) => setPasswordOne(e.target.value)} type="password" name="password" id="exampleEmail" placeholder="Maxfiy parolingizni kiriting" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input onChange={(e) => setPasswordTwo(e.target.value)} type="password" name="password" id="examplePassword" placeholder="Maxfiy parolingizni tasdiqlang" />
                        </FormGroup>
                        {' '}
                        <div className="btnSubmit mx-auto">
                            <Button className='btn btn-success buttonSignUp mx-auto' type='submit'>Ro'yhatdan O'tish</Button>
                        </div>
                        <p className='toLogin'>Siz Ro'yhatdan O'tganmisiz? <Link href="/login">Kirishni Bosing</Link></p>
                    </form>
                </div>
            </section>

        </>
    );
}
