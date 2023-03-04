import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react'
import { Fade } from 'react-reveal';
import emailjs from '@emailjs/browser';
import styles from '../styles/contact.module.css'
export default function contact() {
  useEffect(() => {

    if (window.location.pathname === "/contact") {
      window.replainSettings = { id: 'de664a75-05e4-4964-a2c3-b695af76a957' };
      (function (u) {
        var s = document.createElement('script'); s.async = true; s.src = u;
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
      })('https://widget.replain.cc/dist/client.js');

    }
  })
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vw3t5fi",
        "template_sj09zvo",
        form.current,
        '5hGSpH4es-RcrtxdK'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Malumotlar yuborildi sizga qong'iroq yoki habar yo'laymiz")
        },
        (error) => {
          console.log(error.text);
          alert("Nimadir Noto'gri")
        }
      );
  };
  return (
    <>

      <section id='contact_us'>
        <Fade cascade bottom>
          <h1 className='contact_inner text-center mb-5 mt-5'>Aloqa</h1>
        </Fade>
        <div className="container">
          <Fade cascade bottom>
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-12 text-center  mx-auto">
                <div className="wrap mx-auto">
                  <div className="box text-center mx-auto">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhone} />

                    </div>
                  </div>
                  <h2>+998 90 029 24 01</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center  mx-auto ">
                <div className="wrap mx-auto">
                  <div className="box text-center mx-auto">
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />

                    </div>
                  </div>
                  <h2>sardordev01@gmail.com</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center  mx-auto">
                <div className="wrap mx-auto">
                  <div className="box text-center mx-auto">
                    <div className="icon">
                      <FontAwesomeIcon icon={faTelegram} />

                    </div>
                  </div>
                  <h2>@sardor_shoakbarov</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 text-center  mx-auto">
                <div className="wrap mx-auto">
                  <div className="box text-center mx-auto">
                    <div className="icon">
                      <FontAwesomeIcon icon={faInstagram} />

                    </div>
                  </div>
                  <h2>@sardor_shoakbarov1</h2>
                </div>
              </div>

            </div>
          </Fade>
        </div>
        <div class="container p-5 mb-5 form-contact ">

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <Fade cascade bottom >
                <h1 class="contact_inner mb-5">Savollar va takliflar uchun</h1>
              </Fade>
            </div>
          </div>

          <div class="row">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <form ref={form} id="contact-form" onSubmit={sendEmail} name="myForm" class="form" action="#" method="POST" role="form">

                <div class="form-group">
                  <label class="form-label" id="nameLabel" for="name"></label>
                  <input type="text" class="form-control" id="name" name="user_name" placeholder="Ismingizni Kiriting" tabindex="1" />
                </div>  
                <div class="form-group">
                  <label class="form-label" id="messageLabel" for="message"></label>
                  <input type="number" class="form-control" id="email" name="phone_number" placeholder="Telefon Raqamingizni Kiriting" tabindex="2" />
                </div>
                <div class="form-group">
                  <label class="form-label" id="emailLabel" for="email"></label>
                  <input type="email" class="form-control" id="email" name="user_email" placeholder="Emailngizni kiriting" tabindex="3" />
                </div>

                <div class="form-group">
                  <label class="form-label" id="subjectLabel" for="sublect"></label>
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="Mavzuni Kiriting" tabindex="4" />
                </div>

                <div class="form-group">
                  <label class="form-label" id="messageLabel" for="message"></label>
                  <textarea rows="6" cols="60" name="message" class="form-control" id="message" placeholder="Habaringizni Kiriting" tabindex="5"></textarea>
                </div>

                <div class="text-center margin-top-25">
                  <button type="submit" class="btn btn-mod btn-border btn-large">Yuborish</button>
                </div>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}
