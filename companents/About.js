import Image from 'next/image'
import React from 'react'
import AboutImg from "../public/images/about.png"
export default function About() {
    return (
        <>
            <section id='about' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="wrap">
                                <h1>Uydan chiqmasdan o’rganing.</h1>
                                <p>sd-academy.uz – har kimga, hamma joyda ilm olish imkoniyatini beruvchi ta’lim platformasidir. Saytga qo’yilgan kurslar assosan Dasturlashga oid bo'lib u kurslarni tamomlagandan so'ng junior dasturchi bolib chiqasiz </p>
                                <p className='mt-4' >
                                    Kurslar mutloqo bepul va sifatli bo'lib sizdan faqatgina o'rganish va harakat talab qilinadi
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Image className='AboutImage' src={AboutImg} alt="Error Image" loading='lazy' />
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
