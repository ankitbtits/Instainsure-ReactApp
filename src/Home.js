import React from 'react';
import about from './assets/images/about.jpg';
import recent_article1 from './assets/images/recentblog1.svg';
import recent_article2 from './assets/images/recentblog2.svg';
import recent_article3 from './assets/images/recentblog3.svg';
import client1 from './assets/images/client1.jpg';
import client2 from './assets/images/client2.jpg';
import client3 from './assets/images/client3.jpg';
import client4 from './assets/images/client4.jpg';
import client5 from './assets/images/client5.jpg';
import client6 from './assets/images/client6.jpg';
import {Link} from 'react-router-dom';
function Home(){
    return(
    <div className="_react_container">
        <div className="banner">
            <div className="container">
                <div className="row align-items-center justify-content-center banner_content"> 
                    <div className="col-12">                 
                        <h1>Canada’s No.1 Choice For<br/>
                        Visitor & Super Visa Insurance</h1> 
                        <form className="_home_form">
                            
                            <div className="_insurance_type">
                                <p className="text-left">Insurance Type</p>  
                                <label className="_custom_radio">
                                    <input type="radio" name="insuracnce_type" />  
                                    <span className="checkmark _visitor"></span>
                                    <span className="_label">Visitor Visa</span>                                  
                                </label> 
                                <label className="_custom_radio">
                                    <input type="radio" name="insuracnce_type" />  
                                    <span className="checkmark _super"></span>
                                    <span className="_label">Super Visa</span>                                  
                                </label> 
                                <label className="_custom_radio">
                                    <input type="radio" name="insuracnce_type" />  
                                    <span className="checkmark _coming"></span>
                                    <span className="_label">Super Visa</span>                                  
                                </label> 
                            </div>
                            <div className="col-12 pad-0">
                                <p className="text-left">Coverage Period</p>
                              
                                <div className="row">
                                    <div className="_textfield"><input type="text" placeholder="DD/MM/YYYY" /></div>
                                    <div className="_textfield"><input type="text" placeholder="DD/MM/YYYY" /></div>
                                    <div className="_textfield"><input type="text"  placeholder="Days" /></div>
                                    <div className="_textfield _submit"><input type="submit" value="Get Quote" /></div>
                                    <div className="_faq"><Link exact to="/contact">FAQ</Link></div>
                                </div>
                            </div>
                        </form>   
                    </div>     
                </div>
            </div>
        </div>        
        <div className="_providers">
            <div className="row">
                <h2 className="col-12">We Compare Rates From<br/>12+ Canada's Leading Providers</h2>
                <div className="row col-12 _provider_outer">
                    <div className="_provider_logo">
                        <span><img src={client1} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client2} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client3} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client4} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client5} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client6} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client1} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client2} /></span>
                    </div>
                    <div className="_provider_logo">
                        <span><img src={client3} /></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="content_1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>We've Given 100,000+ People The Peace Of Mind</h2>
                        <p>We're a site that is dedicated to bring you the best rates from Canada's best insurance providers, all in one place. And all you'll have to do is Compare, Buy and Save! You can finally stop jumping from one site to another, when you've got everything you need right here! And hey, if you need help, please call us or use the live chat to talk to us.</p>
                    </div>
                    <div className="col-12 _content1_outer">
                        <div className="col-6 text-right"><Link to="#" className="_submit_btn">Live Chat</Link></div>
                        <div className="col-6 text-left _number">or call<br/><span>1.800.699.6320</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="who_we_are">
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Who we are?</h2>
                </div>                     
                <div className="row">           
                    <div className="col-5 _about_img">
                        <img src={about} />
                    </div>
                    <div className="col-7 text-left _about_content">
                        <p>CompareBuySave.ca is one of Canada's premium insurance comparision web-site. Thousands of Canadians trust to get the best possible quotes, with excellent customer service, to make their insurance purchase a simple and easy one.</p>

                        <p>We're managed by Lifetime Financial Solutions, an organization that deals with all the major Insurance Providers to serve customers with the best possible products and solutions at the lowest rates. With head office in Mississauga, Ontario, Lifetime F.S. are fully licensed to provide Life, Health, Travel and Visitor Insurance services.</p>

                        <Link to="#" className="_submit_btn mt-1">Read full story</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="get_quote_outer">
            <div className="container">
                <div className="row get_quote">
                    <h2>Got Something?</h2>
                    <Link to="#" className="_submit_btn2">Get Quote</Link>
                    <Link to="#" className="_submit_btn3">Ask for help</Link>
                </div>
            </div>
        </div>
        <div className="recent_articles_outer">
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Recent Articles & Blogs</h2>
                </div>
                <div className="row">
                    <div className="col-4 recent_articles">
                        <img src={recent_article1} />
                        <h3>Choice for supervisa & visitor insurance</h3>
                        <p>We'll give you the rates from every major insurance Provider, so you can compare and pick the lowest rate and the policy that suits your needs.</p>
                    </div>
                    <div className="col-4 recent_articles">
                        <img src={recent_article2} />
                        <h3>Choice for supervisa & visitor insurance</h3>
                        <p>We'll give you the rates from every major insurance Provider, so you can compare and pick the lowest rate and the policy that suits your needs.</p>
                    </div>
                    <div className="col-4 recent_articles">
                        <img src={recent_article3} />
                        <h3>Choice for supervisa & visitor insurance</h3>
                        <p>We'll give you the rates from every major insurance Provider, so you can compare and pick the lowest rate and the policy that suits your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
export default Home;