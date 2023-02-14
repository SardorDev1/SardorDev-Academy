import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { faKey } from "@fortawesome/free-solid-svg-icons"

import { Fade } from "react-reveal"
export default function Services() {
    return (
        <>
            <section id="services" >
            <marquee   behavior="" direction="" className="services_anim ">Bepul dasturlash darslari va loyihalar, algoritmlarni mustahkamlash uchun mashqlar. Tayyor shablonlar, shaxsiy profil portfolio va rezyume. JavaScriptga oid texnologiyalarni o'rganish.</marquee>

                <>
                    <Fade bottom cascade>

                        <h1 className="text-center service" >Hizmatlar</h1>
                    </Fade>
                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">
                                <Fade bottom cascade >
<div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faGraduationCap} width={60} />
                                    </div>
                                    <Fade bottom cascade>
                                        <h2 className="title" >
                                        ITga oid barcha mavzular
                                    </h2>
                                    </Fade>
                                    <p>Mavzuni o'rganish uchun tanlangan o'quv qo'llanmalari. O'rganiladigan mavzularning bilim grafigi</p>
                                </div>

                                </Fade>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">
                                <Fade bottom cascade >
<div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faPeopleGroup} width={60} />
                                    </div>
                                    <Fade bottom cascade>
                                        <h2 className="title" >
                                        Birgalikda O'rganamiz
                                    </h2>
                                    </Fade>
                                    <p>Birga o'rganish sizga real vaqt rejimida qanchalik yaxshi natijalarga erishayotgani haqida tushuncha beradi</p>
                                </div>

                                </Fade>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">
                                <Fade bottom cascade >
<div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faKey} width={40} />
                                    </div>
                                    <Fade bottom cascade>
                                        <h2 className="title" >
                                        Doimiy Kirish Huquqi
                                    </h2>
                                    </Fade>
                                    <p>Barcha bepul kurslarga sizga umrbod kirish dostup beriladi va o'zingizga qulay vaqtda o'rganishgingiz mumkin</p>
                                </div>

                                </Fade>
                            </div>
                        </div>
                    </div>


                </>
            </section>
        </>



    )
}
