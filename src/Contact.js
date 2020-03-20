import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

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
                <div className="col-12 row">
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
            </div>
            <div className="row mb-7">
                <div className="col-12 text-left">
                    <h2>We're located at</h2>
                </div>
                <Tabs className="row col-12">
                    <div className="row col-12">
                        <TabList className="_tabs col-6">
                            <Tab>CA</Tab>
                            <Tab>IN</Tab>
                            <Tab>NYC</Tab>
                            <Tab>AK</Tab>
                            <Tab>LA</Tab>
                            <Tab>ME</Tab> 
                        </TabList>
                    </div> 
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure CA<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>
                    </TabPanel>                    
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure IN<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>
                    </TabPanel> 
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure NYC<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>    
                    </TabPanel> 
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure AK<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>    
                    </TabPanel> 
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure LA<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>    
                    </TabPanel> 
                    <TabPanel className="row col-12">
                        <div className="col-12 col-md-6 _tabs_outer">                      
                            <div className="row col-12 text-left">
                                <p>Instainsure ME<br/>
                                WE54, New York Queens, NY 12121.<br/>
                                1.800.699.6320<br/>
                                info@example.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 _map pad-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.6752502007657!2d-73.992009!3d40.725165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259851c1e9037%3A0x74407071825a96a4!2sCBGB!5e0!3m2!1sen!2sus!4v1395419817211"></iframe>
                        </div>    
                    </TabPanel> 
                </Tabs>
            </div>
        </div>
    </div>
    );
}
export default Contact;