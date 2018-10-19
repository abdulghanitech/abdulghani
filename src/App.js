import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/freelancer.min.css';
import './css/style.css';
import './css/font-awesome.min.css';
import './css/App.css';

import PortfolioItem from './Portfolio_item';
import PortfolioModal from './Portfolio_modal';

class App extends Component {
    render() {
        return (
            <div className="App">
       
      {/* <!-- Navigation -->*/}
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
           {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">ABDUL GHANI</a>
            </div>

           {/* <!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
          {/*  <!-- /.navbar-collapse -->*/}
        </div>
       {/* <!-- /.container-fluid -->*/}
    </nav>

   {/* <!-- Header -->*/}
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src={require("./img/profile.png")} alt="" />
                    <div className="intro-text">
                        <span className="name">ABDUL GHANI</span>
                        <hr className="star-light" />
                        <span className="skills">Web Developer - Blogger - Tech Geek</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

     {/*<!-- Portfolio Grid Section -->*/}
    <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">

               <PortfolioItem image="screenshot-gogaga.png" modalNo="#portfolioModal9" mainTitle="GOGAGA HOLIDAYS PVT.LTD" />
               <PortfolioItem image="royaltech-dashboard.png" modalNo="#portfolioModal5" mainTitle="ROYAL TECH SOLUTIONS" />
               <PortfolioItem image="newperfectengineeringworks-screenshot.png" modalNo="#portfolioModal4" mainTitle="NEW PERFECT ENGINEERING WORKS" />
               <PortfolioItem image="magicquiz-featured.png" modalNo="#portfolioModal3" mainTitle="MAGIC QUIZ" />
               <PortfolioItem image="codersquiz-screenshot.png" modalNo="#portfolioModal1" mainTitle="CODERS QUIZ" />
               <PortfolioItem image="mriet-screenshot.png" modalNo="#portfolioModal6" mainTitle="MRIET - COLLEGE SITE" />
               <PortfolioItem image="oniocart-screenshot.png" modalNo="#portfolioModal7" mainTitle="ONIOCART" />
               <PortfolioItem image="mfidscreenshot.png" modalNo="#portfolioModal2" mainTitle="MFID" />
               <PortfolioItem image="royalengineeringworks-screenshot.png" modalNo="#portfolioModal8" mainTitle="ROYAL ENGINEERING WORKS" />

               
            </div>
        </div>
    </section>

    {/*<PortfolioModal />*/}



 {/*     <!-- About Section -->*/}
    <section className="success" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr className="star-light" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-2">
                    <p>Abdul Ghani is a Professional Web Developer, Blogger, Graphic Designer, Tech Geek. He started creating sites and blogs at the age of 14. He is also an SEO Expert. He's currently pursuing a Bachelor's Degree in Computer Science.</p>
                </div>
                <div className="col-lg-4">
                    <p>His work has never disappointed his clients. He loves to be innovative, Well! If you want to get your business online or want to create a website for your organization or any kind of thing, feel free to contact him.
                    </p>
                </div>
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <a href="#contact" className="btn btn-lg btn-outline">
                        <i className="fa fa-heart"></i> Hire Him!
                    </a>
                </div>
            </div>
        </div>
    </section>

   {/* <!-- Contact Section -->*/}
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    {/*<!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                    <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->*/}
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br/>
                        <div id="success"></div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <button type="submit" className="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>Hyderabad<br/>India
                        </p>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="https://www.facebook.com/developerghani/" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/+abdulghanidev/" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/developerghani" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/abdulghani200" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="http://instagram.com/developer.ghani" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>About Abdul Ghani</h3>
                        <p>Abdul Ghani is a Professional Web Developer, Blogger, Graphic Designer, Tech Geek.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; 2018 <a href="http://abdulghani.me">Abdul Ghani</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    



      </div>
        );
    }
}

export default App;