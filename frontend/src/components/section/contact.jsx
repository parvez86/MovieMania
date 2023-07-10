import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const Contact = () => {
  const onSendButton = async() =>{
    console.log("Send Button is Clicked");
    let user = $("#contact-name").val()
    let email_or_phone = $("#contact-email-phone").val()
    let message = $("#contact-message").val()
    console.log("contact info: ");
    console.log("user: ", user);
    console.log("contact: ", email_or_phone);
    console.log("message: ", message);
    if( user && email_or_phone && message){
        console.log("submitting");
        $("#dialog").text("Thank you for contacting us. We'll get back to you soon. Don't forget to check your mail.")
        $('#dialog').dialog({
            title: "Thank you for contacting",
            closeOnEscape: false,
            modal: true,
            autoOpen: false
        })
        $("#dialog").dialog("open");
        $("#contact-name").val("")
        $('#contact-email-phone').val("")
        $('#contact-message').val("")
    }
  }
  return(
    <>
        <div className='container'>
            <div className='row'>
                <div className='img-box'>
                    <div className='section-title'>
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='contact-form'>
                    <form className='form' id="contact-form" action='#'>
                        <div className='row'>
                            <div className='left input-group'>
                                <label htmlFor='contact-name'>Name</label>
                                <input id='contact-name' className='form-control' placeholder='Your Name Here' required/>
                            </div>
                            <div className='right input-group'>
                                <label htmlFor='contact-email-phone'>Email or Phone</label>
                                <input type='email' id='contact-email-phone' className='form-control' placeholder='Email or Phone Here' required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-group'>
                                <label htmlFor='contact-message'>Message</label>
                                <textarea id='contact-message' className='form-control' placeholder='Your Message Here' required/>
                            </div>
                        </div>
                        <div className='form-btn'>
                            <button type='button' className='btn btn-01' id='button' onClick={() => onSendButton()}>
                                Send Message
                            </button>
                        </div>
                        <div className='dialog' id="dialog">
                        </div>
                    </form>
                </div>
                <div className='contact-info'>
                    <div className='row'>
                        <div className='info-item'>
                            <h5>Address</h5>
                            <p>Dhaka, BD, 12929</p>
                        </div>
                        <div className='info-item'>
                            <h5>Phone</h5>
                            <p>88 000 000 0000</p>
                        </div>
                        <div className='info-item'>
                            <h5>Email</h5>
                            <p>mymoviemania@movie.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row links'>
                <div className='social-links'>
                    <a href='#' title='facebook'>
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>      
                    </a>
                </div>
                <div className='social-links'>
                    <a href='#' title='twitter'>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>                </a>
                </div>
                <div className='social-links'>
                    <a href='#' title='linkedin'>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>                </a>
                </div>
                <div className='social-links'>
                    <a href='#' title='instagram'>
                    <i className="fa fa-instagram" aria-hidden="true"></i>                </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact