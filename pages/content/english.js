import Image from 'next/image';
import React, { lazy, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '@/companents/context/AuthUserContext';
import Link from 'next/link';
import Ibratlogo from "@/public/images/ibratLogo.jpg"
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { DataEnglish1 } from '../../companents/EnglishDatas/Data1';

import { Alert } from 'reactstrap';

export default function Coursess() {

    const [navbar_active, setNavbar_active] = useState()
    const { authUser, loading, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {


        if (!loading && !authUser)
            router.push("/login")
    }, [])
    function ToggleNavbar() {
        setNavbar_active(!navbar_active)
    }
    return (

        <>
            {loading ? (
                <>
                    <div className="preloader">
                        <div className="Center">
                            <div className="Loader">
                                <div className="loader">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <h1 className="h1">Yuklanmoqda</h1  >
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>


                    <div className="content">
                        <div className="account_info">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button className='Navbarbutton' onClick={ToggleNavbar}>Bar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section id='dashboard'>
                            <div className="row">
                                <div className="Navbar_dashboard">
                                    <nav className={navbar_active ? "navbar-nav navbar_active" : "navbar-nav"}>
                                        <button onClick={(e) => setNavbar_active(false)} className='closenavbar' >
                                            <FontAwesomeIcon icon={faClose} />
                                        </button>
                                        <div className="account">
                                            <div className="user_avatar">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <h1 className='mt-3 mb-3'>{localStorage.getItem("username")}</h1>
                                            <button className='btn btn-success' onClick={signOut} >Chiqish</button>
                                        </div>
                                        <ul className='ul_course'>
                                            <li><Link href={"/Dashboard"} >Dashboard</Link></li>
                                            <ul className='ul_course'>
                                                <li><Link href={"/"} >Uyga</Link></li>
                                                {DataEnglish1.map((video => (
                                                    <>
                                                        <li key={video.videoLink}>
                                                            <Alert color="dark" >
                                                                <b onClick={(e) => setVideoLinks(video.videoLink)}  ><span></span> {video.videoTitle}</b>
                                                            </Alert>
                                                        </li>
                                                    </>
                                                )))}
                                            </ul>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-6 navbar_dashboard">
                                    <div className="navbar_dashboard">
                                        <nav>
                                            <div className="account">
                                                <div className="user_avatar">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>
                                                <h1 className='mt-3 mb-3'>{localStorage.getItem("username")}</h1>
                                                <button className='btn btn-success' onClick={signOut} >Chiqish</button>
                                            </div>
                                            <ul className='ul_course'>
                                                <li><Link href={"/"} >Uyga</Link></li>
                                                {DataEnglish1.map((video => (
                                                    <>
                                                        <li key={video.videoLink}>
                                                            <Alert color="dark" >
                                                                <b  ><span>#{video.ID} </span> {video.videoTitle}</b>
                                                            </Alert>
                                                        </li>
                                                    </>
                                                )))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">

                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )
            }

        </>
    )
}
