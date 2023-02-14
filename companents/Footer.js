import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fade } from 'react-reveal';
import Link from 'next/link';
export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
         

            <section className='pt-4 footer' >
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <Fade bottom cascade >
                                <h6 className='text-uppercase fw-bold mb-4'>

                                    SardorDevs Academy
                                </h6>
                            </Fade>
                            <Fade bottom cascade>
                                <p>
                                    "SardorDevs Academy" dasturiga qo‘shiling bizning ochiq onlayn-platformamizdagi  bepul kurslar yordamida ITga ilk qadamingizni qoying!!!
                                </p>
                            </Fade>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <Fade bottom >
                                <h6 className='text-uppercase fw-bold mb-4'>Kurslar</h6>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/courses' className='text-reset'>
                                        Back-end Dasturlash
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/courses' className='text-reset'>
                                        Front-end Dasturlash
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/courses' className='text-reset'>
                                        React Dasturlash
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/courses' className='text-reset'>
                                        Web Dizayn
                                    </Link>
                                </p>
                            </Fade>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <Fade bottom >
                                <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/' className='text-reset'>
                                        Home
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/about' className='text-reset'>
                                        About
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/coures' className='text-reset'>
                                        Courses
                                    </Link>
                                </p>
                            </Fade>
                            <Fade bottom >
                                <p>
                                    <Link href='/contact' className='text-reset'>
                                        Contact
                                    </Link>
                                </p>
                            </Fade>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <Fade bottom>  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6></Fade>
                            <Fade bottom  >
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Sirdarya , Bayaut , Uzbekstan
                                </p>

                            </Fade>
                            <Fade bottom  >
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    sardorshoakbarov7@gmail.com
                                </p>

                            </Fade>
                            <Fade bottom  >
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 998 90 029 24 01
                                </p>


                            </Fade>                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
           <Fade bottom cascade >
 
           <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: 
                <a className='text-reset fw-bold' href='https://the-sardordev.netlify.app'>
                       SardorDev
                </a>
            </div>
           </Fade>

        </MDBFooter>
    );
}