import './Contact.css'
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ShowComponent } from '../ShowComponent/ShowComponent'

const Contact = () => {
  const [contactSuccess, setContactSuccess] = useState("");
    const [contactError, setContactError] = useState("");
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
        setContactSuccess(`Message Sent, We will get back to you shortly`);
        setTimeout(() => {
          setContactSuccess("");
        }, 5000);
      },
      (error) => {
        console.log(error.text);
        setContactError(`An error occurred, Please try again`);
        setTimeout(() => {
            setContactError("");
        }, 5000);
      }
    )
    formRef.current.reset()
  }
  return (
    <ShowComponent>
      <div className="contact-container" id="/contacts">
        <h1>Contact Me</h1>
        <h2>Feel free to give me an email.</h2>
        <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
            <ul>
                <li className="half" id="form-split">
                    <input type="text" name="name" placeholder="Name" required/>
                </li>
                <li className="half" id="form-split">
                  <input aria-describedby='emailHelp' type="email" name="email" placeholder="Email" required/>
                </li>
                <li className="half">
                  <input type="text" name="subject" placeholder="Subject" required/>
                </li>
                <li className="half">
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                <li className="half">
                  < input className="button" type="submit" value="SEND"/>
                </li>
            </ul>
            <div className={contactSuccess ? "success-msg" : "error-msg"}>
                {contactError ? (
                <>
                  {contactError}
                </>
                ) : (
                <>
                    {contactSuccess}
                </>
              )}
            </div>
            </form>
        </div>
        <div className="info-map"></div>
      </div>
    </ShowComponent>
  )
}

export default Contact