import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../styles/Home.module.css"
import Logo from "/public/images/logo_03.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { navLink } from "../companents/NavLink"
import BannerImg from "/public/images/image_banner_03.png"
import Navbars  from './Navbars'



export default function Header() {




  return (
    <>

      <header className={styles.Home}>
<Navbars/>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto ">
              <div className="content">
                <h3>Kelajak</h3>
                <h1>KASBLARINI</h1>
                <h2>EGALLANG!</h2>
                <p className='mt-3 about' >
                  “SardorDevs Academy” dasturiga qo‘shiling – bizning ochiq onlayn-platformamizdagi ajoyib bepul kurslar yordamida ITga ilk qadamingizni qoying!!!

                </p>
                <button className='btn btn-primary BtnHome ' ><Link className='links' href={"/signup"} >Boshlash</Link></button>
                <button className='btn btn-primary BtnHome' ><Link className='links' href={"/login"} >Kurslar</Link></button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto ">
              <div className="banner_img  ">
                <Image layout="responsive" src={BannerImg} alt="error img" loading='lazy' />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}