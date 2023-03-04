import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../styles/Home.module.css"
import Logo from "/public/images/logo_03.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { navLink } from "../companents/NavLink"
export default function Navbars() {

    const [bar, setBar] = useState(false)

    function Onbar() {
        setBar(true)
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="Logo">
                        <Image src={Logo} width={80} height={80} loading='lazy' alt="Logo" />
                        <h5 className='brand_name'>SardorDevs<br />Academy</h5>
                    </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="navs">

                        <FontAwesomeIcon width={40} height={40} className='navbarBtn' onClick={(e) => setBar(true)} icon={faBars} />
                        <ul className={"navbar"}>
                            <li className={"Link"}>
                                <Link href={"/"}>Uyga</Link>
                            </li>
                            <li className={"Link"}>
                                <Link href={"/about"}>Biz Haqimizda</Link>
                            </li>
                            <li className={"Link"}>
                                <Link href={"/courses"}>Kurslar</Link>
                            </li>
                            <li className={"Link"}>
                                <Link href={"/contact"}>Aloqa</Link>
                            </li>
                        </ul>
                        <ul className="navbarsign">
                            <li className='signLink'>
                                <button className=' signBtn btn btn1'>
                                    <Link className='white' href={"/login"}>Kirish</Link>
                                </button>
                            </li>
                            <li className='signLink'>
                                <button className='btn signBtn btn2 '>
                                    <Link className='white' href={"/signup"}>Ro'yhatdan o'tish</Link>
                                </button>
                            </li>
                        </ul>

                    </div>
                    <div className={bar === false ? "barNav" : "barNav  active"}>
                        <FontAwesomeIcon className='close' onClick={(e) => setBar(false)} icon={faClose} width={60} height={40} />
                        <ul className='ul'>
                            {navLink.map(navLink => (
                                <>
                                    <li key={navLink.id} className={"Link"}>
                                        <Link href={navLink.location} >{navLink.Link}</Link>
                                    </li>
                                </>
                            ))}
                            <ul className='buttons'>
                                <div className='signLink'>
                                    <button className=' signBtn btn btn1s mx-auto'>
                                        <Link className='white' href={"/login"}>Kirish</Link>
                                    </button>
                                </div>
                                <div className='signLink'>
                                    <button className='btn signBtn btn2s mx-auto'>
                                        <Link className='white' href={"/signup"}>Ro'yhatdan o'tish</Link>
                                    </button>
                                </div>
                            </ul>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}
