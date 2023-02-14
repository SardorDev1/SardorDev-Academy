import EnglishCorse from "../public/images/courseEnglish.jpg"
import Image from "next/image"
import { faChartSimple, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-reveal"
import Navbars from "@/companents/Navbars"

export default function Courses() {

  return (
    <>
  <Navbars/>
      <section id="courses">
        <Fade bottom cascade >
          <h1 className="text-center kurstag " >Boshlovchilar uchun <span>Foundation</span> kurslar</h1>

        </Fade>
        <div className="container">
          <div className="row">
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps ">
                  <div className="closes"></div>
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>Ingliz tili</span>
                    <p>Ushbu kursda ingiliz tili konikmalarini tekin organasiz</p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps close_course ">
                  <div className="closes">
                    <h1>Tez Kunda...</h1>
                   
                  </div>
               
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>Komputer Sovodxonligi</span>
                    <p>Ushbu kursda siz komputer bilimlaringizni oshirishingiz mumkin</p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>

          </div>
        </div>


      </section>
      <section id="courses" >
        <Fade bottom cascade >
          <h1 className="text-center kurstag " >Dasturlashni <span>o'rganmoqchilar</span> uchun</h1>

        </Fade>
        <div className="container">
          <div className="row">
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps  close_course">
                  <div className="closes">
                    <h1>Tez Kunda...</h1>
                  </div>
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>Front-end Dasturlash</span>
                    <p>Ushbu kursda Foundation (Html,Css,JavaScript) dasturlash texnologiyalarini organasiz</p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps close_course">
                  <div className="closes">
                    <h1>Tez Kunda...</h1>
                  </div>
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>React Dasturlash</span>
                    <p>Front-end dasturlashni yaxshi o'zlashtirmoqchi bolsangiz ushbu kurs siz uchun  </p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps close_course">
                  <div className="closes">
                    <h1>Tez Kunda...</h1>
                  </div>
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>Back-end Dasturlash</span>
                    <p>Back-end dasturlash web dastur ichki tizimini kotaradigan dasturlash bolib unda algaritmik firklashni ozganasiz</p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>
            <Fade bottom cascade>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="wraps close_course">
                  <div className="closes">
                    <h1>Tez Kunda...</h1>
                  </div>
                  <div className="course_image">
                    <Image className="course_img" src={EnglishCorse} alt="error image" loading="lazy" />
                  </div>
                  <div className="kursdata"  >
                    <span>Web Disign</span>
                    <p>kurs davomida siz adobe dasturlari va figmani organasiz kurs yakunida siz junior web dizayner bolib chiqasiz</p>
                    <div className="icons">
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faPlay} />
                        <p>100ta darslar</p>
                      </div>
                      <div className="icon d-flex">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p>Boshlang'ich</p>
                      </div>
                    </div>
                    <div className="buy">
                      <span >100 000 so'm</span>
                      <button className="btn btn-primary" >Bepul</button>
                    </div>
                  </div>
                </div>
              </div>

            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}
