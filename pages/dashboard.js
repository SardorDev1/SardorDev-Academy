import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '../companents/context/AuthUserContext';
import Link from 'next/link';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import { auth } from 'firebase';
export default function Dashboard(props) {

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
                    <ul className='ul_dashboard'>
                     
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
                      <ul className='ul_dashboard'>
                        <li><Link href={"/"} >Uyga</Link></li>
                        <li><Link href={"/about"} >Biz Haqimizda</Link></li>
                        <li><Link href={"/contact"} >Aloqa</Link></li>
                        <li><Link href={"/dashboard-courses"} >Kurslar</Link></li>
                        
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                  <div className="content">
                    <div className="video mx-auto">
                      <iframe width="100%" height="400" src="https://www.youtube.com/embed/tzWggCnYVWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                    <div className="desc">
                      <h1>Tavsilot</h1>
                      <p>Darsda ishlatilgan codelar linki <a href="https://github.com/Sardordev1/">Shu yerda</a></p>
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
