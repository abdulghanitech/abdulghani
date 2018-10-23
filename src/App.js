import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/freelancer.min.css';
import './css/style.css';
import './css/font-awesome.min.css';
import "animate.css/animate.min.css";
import './css/App.css';

import PortfolioItem from './Portfolio_item';
import Portfolios from './portfolio.json';
import About from './About';
import Contact from './Contact';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {

   /*  constructor(){
        super();
       
        //this.didElementReachedToItsEnd = this.didElementReachedToItsEnd.bind(this);
    } */

    

 /*    didElementReachedToItsEnd(o)
    {
        //visible height + pixel scrolled = total height 
        if(o.offsetHeight + o.scrollTop == o.scrollHeight)
        {
            return true;
        }else{
            return false;
        }
    
    } */

    componentDidMount() {
           
       window.section = document.querySelectorAll("section");
       window.sections = {};
       window.i = 0;

        Array.prototype.forEach.call(window.section, function(e) {
            window.sections[e.id] = e.offsetTop;
          });  
        
        window.addEventListener('scroll', this.handleScroll);
        //this.didElementReachedToItsEnd = this.didElementReachedToItsEnd.bind(this); 
        
       
    }

  


    handleScroll(event) {

      /*  function didElementReachedToItsEnd(o)
        {
            //visible height + pixel scrolled = total height 
            if(o.offsetHeight + o.scrollTop == o.scrollHeight)
            {
                return true;
            }else{
                return false;
            }
        
        } */
       
        /*  
        this.setState({
          transform: itemTranslate
        }); */
        //console.log("scrolled");
       let mainNav =  document.getElementById("mainNav");

       var portfolio = document.querySelector('#portfolio');
       var header = document.querySelector('#header'); 

       var scrollPosition = document.documentElement.scrollTop;
       //console.log(scrollPosition);
    /*    let scrollTop = document.querySelector("body").scrollTop;
       console.log(scrollTop);
       if(scrollTop > 70){
        mainNav.classList.add("affix");
       }else if(scrollTop < 70){
        mainNav.classList.add("affix-top");
       } */
       
       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        mainNav.classList.add("affix");
        mainNav.classList.remove("affix-top");
        
       }else{
        mainNav.classList.add("affix-top");
        mainNav.classList.remove("affix");
        if(header.offsetTop >= scrollPosition){
            //console.log("in the header section")
            document.querySelector('a[href*="portfolio"]').parentNode.setAttribute('class', '');
        }
        //console.log("big nav");
             
       }  
       
       //for enabling links animation
       var portfolio = document.querySelector('#portfolio');
       var about = document.querySelector('#about');
       var contact = document.querySelector('#contact');

    /*    switch(true){
           case scroll >= portfolio.offsetTop && scroll < about.offsetTop :
           console.log("TRIGGER: in porfolio section.");
           mainNav.querySelectorAll("li")[0].classList.add("active");
           break;
           case scroll >= about.offsetTop:
           console.log("TRIGGER: in about section.");
           mainNav.querySelectorAll("li")[1].classList.add("active");
           break;
           case scroll >= contact.offsetTop:
           console.log("TRIGGER: in contact section.");
           mainNav.querySelectorAll("li")[2].classList.add("active");
           break;
           default:
           for(var i=0; i< mainNav.querySelectorAll("li").length; i++){
             mainNav.querySelectorAll("li")[i].classList.remove("active");
           }
            */

           for (window.i in window.sections) {
               //console.log(window.i)
            if (window.sections[window.i] <= scrollPosition) {
              try{
                document.querySelector('.active').setAttribute('class', ' ');
              document.querySelector('a[href*=' + window.i + ']').parentNode.setAttribute('class', 'active');
              }catch(err){
                //console.log(err);
              }
                
            }
          }

  /*      if( document.documentElement.scrollTop >= portfolio.offsetTop && didElementReachedToItsEnd(portfolio)){
            console.log("TRIGGER: in porfolio section.");
            mainNav.querySelectorAll("li")[0].classList.add("active");
        }else{
            mainNav.querySelectorAll("li")[0].classList.remove("active");
        }

        if( document.documentElement.scrollTop >= about.offsetTop && didElementReachedToItsEnd(about)){
            console.log("TRIGGER: in about section.");
            mainNav.querySelectorAll("li")[1].classList.add("active");
        }else{
            mainNav.querySelectorAll("li")[1].classList.remove("active");
        }

        if(document.documentElement.scrollTop >= contact.offsetTop && didElementReachedToItsEnd(contact)){
            console.log("TRIGGER: in contact section.");
            mainNav.querySelectorAll("li")[2].classList.add("active");
        }else{
            mainNav.querySelectorAll("li")[2].classList.remove("active");
        } */
  
    }


    scrollToTop(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {


        return (
            <div className="App">

                {/* <!-- Navigation -->*/}
                <Navbar inverse collapseOnSelect id="mainNav" className="navbar-fixed-top navbar-custom">
                    <Navbar.Header className="page-scroll">
                        <Navbar.Brand>
                        <a href="#brand">ABDUL GHANI</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="#portfolio" className="active">
                        Portfolio
                        </NavItem>
                        <NavItem eventKey={2} href="#about">
                        About
                        </NavItem>
                        <NavItem eventKey={3} href="#contact">
                        Contact
                        </NavItem>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* <!-- Header -->*/}
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="img-responsive" src={require("./img/profile.png")} alt="" />
                                <div className="intro-text">
                                    <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut'>
                                        <span className="name">ABDUL GHANI</span>
                                    </ScrollAnimation>
                                                                
                                   {/*  <span className="name">ABDUL GHANI</span> */}

                                   <hr className="star-light" />

                                    <ScrollAnimation animateIn='bounceInLeft'
                                    animateOut='bounceOutRight'>
                                        <span className="skills">Full Stack Web Developer</span>
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn='pulse'
                                    >
                                        <span className="skills">Passionate Blogger</span>
                                    </ScrollAnimation>

                                    <ScrollAnimation animateIn='bounceInRight'
                                    animateOut='bounceOutLeft'>
                                        <span className="skills">Tech Geek</span>
                                    </ScrollAnimation>
                                    {/* <span className="skills">Full Stack Web Developer - Blogger - Tech Geek</span> */}

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

                           

                        {
                            Portfolios.map((Portfolios, i) => 
                            <PortfolioItem
                                image={Portfolios.image}
                                mainTitle={Portfolios.mainTitle}
                                description={Portfolios.description}
                                technologies={Portfolios.technologies}
                                client={Portfolios.client}
                                url={Portfolios.url}
                                date={Portfolios.date}
                                service={Portfolios.service}
                                key={i}
                            />
                            )
                        }


                        </div>
                    </div>
                </section>



                {/*     <!-- About Section -->*/}
                <section className="success" id="about">
                    <About 
                    info1="Abdul Ghani is a Professional Web Developer, Blogger, Graphic Designer, Tech Geek. He started creating sites and blogs at the age of 14. He is also an SEO Expert. He's currently pursuing a Bachelor's Degree in Computer Science." 
                    info2="His work has never disappointed his clients. He loves to be innovative, Well! If you want to get your business online or want to create a website for your organization or any kind of thing, feel free to contact him." />
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
                                <Contact />
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
                                    <p>Hyderabad<br />India
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
                                    <p>Abdul Ghani is a Full Stack Web Developer, Android Developer, Blogger, Tech Geek.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Copyright &copy; 2013 - {new Date().getFullYear()} | <a href="http://abdulghani.me">Abdul Ghani</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="scroll-top page-scroll" onClick={this.scrollToTop}>
                    <a className="btn btn-primary" href="#">
                       <i className="fa fa-chevron-up"></i>
                    </a>
                </div>





            </div>
        );
    }
}

export default App;