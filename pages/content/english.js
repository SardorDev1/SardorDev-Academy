import Image from 'next/image';
import React, { lazy, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '@/companents/context/AuthUserContext';
import Link from 'next/link';
import Ibratlogo from "@/public/images/ibratlogo.jpg"
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { DataEnglish1 } from '../../companents/EnglishDatas/Data1';
import {EnglishData2} from '../../companents/EnglishDatas/Data2';
import { EnglishData3 } from '../../companents/EnglishDatas/Data3';
import { EnglishData4 } from '../../companents/EnglishDatas/Data4';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Alert,
    AccordionItem,
} from 'reactstrap';
import { auth } from 'firebase';
export default function Coursess(props) {
    const [videolinks, setVideoLinks] = useState(``)
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    const [navbar_active, setNavbar_active] = useState()
    const { authUser, loading, signOut } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!loading && !authUser)
            router.push("/login")
    }, [authUser, loading])
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
                                            <li><Link href={"/Dashboard"} >Html</Link></li>
                                            <li><Link href={"/Dashboard"} >Css</Link></li>
                                            <li><Link href={"/Dashboard"} >Dashboard</Link></li>
                                            <li><Link href={"/Dashboard"} >Dashboard</Link></li>
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
                                            <aside>
                                                <ul className='ul_course'>
                                                    <li><Link href={"/"} >Uyga</Link></li>
                                                    <Accordion flush open={open} toggle={toggle}>
                                                        <AccordionItem>
                                                            <AccordionHeader targetId="1">Birinchi Bo&apos;lim</AccordionHeader>
                                                            <AccordionBody accordionId="1">
                                                                {DataEnglish1.map((video => (
                                                                    <>
                                                                        <li key={video.ID}>
                                                                            <Alert color="dark" >
                                                                                <b onClick={(e) => setVideoLinks(video.videoLink)} >1</b>
                                                                            </Alert>
                                                                        </li>

                                                                    </>
                                                                )))}


                                                            </AccordionBody>
                                                        </AccordionItem>

                                                    </Accordion>
                                                    <Accordion flush open={open} toggle={toggle}>
                                                        <AccordionItem>
                                                            <AccordionHeader targetId="2">Birinchi Bo&apos;lim</AccordionHeader>
                                                            <AccordionBody accordionId="2">
                                                                {EnglishData3.map((video => (
                                                                    <>
                                                                        <li key={video.ID}>
                                                                            <Alert color="dark" >
                                                                                <b onClick={(e) => setVideoLinks(video.videoLink)} >1</b>
                                                                            </Alert>
                                                                        </li>

                                                                    </>
                                                                )))}


                                                            </AccordionBody>
                                                        </AccordionItem>

                                                    </Accordion>
                                                    <Accordion flush open={open} toggle={toggle}>
                                                        <AccordionItem>
                                                            <AccordionHeader targetId="3">Birinchi Bo&apos;lim</AccordionHeader>
                                                            <AccordionBody accordionId="3">
                                                                {EnglishData4.map((video => (
                                                                    <>
                                                                        <li key={video.ID}>
                                                                            <Alert color="dark" >
                                                                                <b onClick={(e) => setVideoLinks(video.videoLink)} >1</b>
                                                                            </Alert>
                                                                        </li>

                                                                    </>
                                                                )))}


                                                            </AccordionBody>
                                                        </AccordionItem>

                                                    </Accordion>
                                                    <Accordion flush open={open} toggle={toggle}>
                                                        <AccordionItem>
                                                            <AccordionHeader targetId="4">Birinchi Bo&apos;lim</AccordionHeader>
                                                            <AccordionBody accordionId="4">
                                                                {EnglishData2.map((video => (
                                                                    <>
                                                                        <li key={video.ID}>
                                                                            <Alert color="dark" >
                                                                                <b onClick={(e) => setVideoLinks(video.videoLink)} >1</b>
                                                                            </Alert>
                                                                        </li>

                                                                    </>
                                                                )))}


                                                            </AccordionBody>
                                                        </AccordionItem>

                                                    </Accordion>
                                                </ul>
                                            </aside>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                                    <div className="content">
                                        <div className="video mx-auto">
                                            <iframe width="100%" height="400" src={videolinks} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                                        <div className="desc">
                                            <h1 className='desch1'>Manba</h1>
                                            <div className="source">
     
                                              <div className="channel">
                                              <Image width={200} height={200} loading="lazy" src={Ibratlogo} alt="" />
                                            <div className='tags'>
                                            <h2>Ibrat Farzandlari</h2>
<button className='btn btn-primary' ><FontAwesomeIcon icon={faSearch} /> VIEW</button>
                                            </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )}

        </>
    )
}
