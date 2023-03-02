import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { faKey } from "@fortawesome/free-solid-svg-icons"

import { Fade } from "react-reveal"
export default function Services() {
    return (
        <>
            <section id="services" >
                <marquee className="services_anim ">Bepul dasturlash darslari va loyihalar, algoritmlarni mustahkamlash uchun mashqlar. Tayyor shablonlar, shaxsiy profil portfolio va rezyume. JavaScriptga oid texnologiyalarni o'rganish.</marquee>

                <>


                    <h1 className="text-center service" >Hizmatlar</h1>

                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">

                                <div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faGraduationCap} width={60} />
                                    </div>

                                    <h2 className="title" >
                                        ITga oid barcha mavzular
                                    </h2>

                                    <p>Mavzuni o'rganish uchun tanlangan o'quv qo'llanmalari. O'rganiladigan mavzularning bilim grafigi</p>
                                </div>


                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">

                                <div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faPeopleGroup} width={60} />
                                    </div>

                                    <h2 className="title" >
                                        Birgalikda O'rganamiz
                                    </h2>

                                    <p>Birga o'rganish sizga real vaqt rejimida qanchalik yaxshi natijalarga erishayotgani haqida tushuncha beradi</p>
                                </div>


                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  ">

                                <div className="wrap text-center">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faKey} width={40} />
                                    </div>

                                    <h2 className="title" >
                                        Doimiy Kirish Huquqi
                                    </h2>

                                    <p>Barcha bepul kurslarga sizga umrbod kirish dostup beriladi va o'zingizga qulay vaqtda o'rganishgingiz mumkin</p>
                                </div>


                            </div>
                        </div>
                    </div>


                </>
            </section>
        </>



    )
}
