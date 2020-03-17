import React from 'react';

function Contact(){
    return(        
    <div className="_react_container">
        <div className="contact_top">
            <div className="container">
                <h1>Contact</h1>
            </div>
        </div>
        <div className="container">
            <div className="row _contact_con">
                <div className="col-12 col-md-7 text-left">
                    <h2>Keep in touch with us</h2>
                    <form className="row">
                        <div className="col-12 col-md-6 _textfield2">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-12 col-md-6 _textfield2">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="col-12 col-md-6 _textfield2">
                            <input type="text" placeholder="Number" />
                        </div>
                        <div className="col-12 col-md-6 _textfield2">
                            <input type="text" placeholder="Website" />
                        </div>
                        <div className="col-12 col-md-12 _textfield2">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="col-12 col-md-12 _submit_btn4">
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-5 text-left comtact_content">
                    <h2>Contact Details</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h2>We're located at</h2>
                <div className="row">
                    <div className="col-12 col-md-6"></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Contact;