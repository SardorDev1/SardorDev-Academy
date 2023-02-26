import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbars from '@/companents/Navbars';
import Link from 'next/link';
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
alert(error.message)
                if (error.message === "The password is invalid or the user does not have a password.") {
                    alert("ushbu account paroli noto'gri iltimos qaydadan urinib ko'ring!!!")
                } else if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    alert("ushbu foydalanuvchi malumotlar bazasida mavjud emas. Iltimos Ro'yhatdan O'ting")
                }else if(error.message === "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
                    alert("Tarmoqda Xatolik!!!")
                }
            })
        event.preventDefault()
    }
    return (
        <section className='Login'>
            <Navbars />
            <div className="card_signin mt-5 ">

                <form onSubmit={onSubmit} >
                    <FormGroup>
                        <h1 className='text-center pt-5 pl-5 pr-5' >Kirish</h1>
                        <Label for="exampleEmail" hidden>Foydalanuvchi</Label>
                        <Input onChange={(e) => setEmail(e.target.value)} type="text" name="text" id="exampleEmail" placeholder="Emailingizni kiriting" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="exampleEmail" placeholder="Maxfiy parolingizni kiriting" />
                    </FormGroup>


                    <div className="btnSubmit mx-auto">
                        <Button className='btn btn-success buttonSignUp mx-auto' type='submit'>Ro&apos;yhatdan O&apos;tish</Button>
                    </div>
                    <p className='toSignUp pb-5 pt-5'>Siz Ro&apos;yhatdan O&apos;tganmisiz? <Link href="/signup">Ro&apos;yhatdan O&apos;tishni Bosing</Link></p>
                </form>
            </div>
        </section>

    )
}
