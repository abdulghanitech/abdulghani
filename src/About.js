import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render() {
        var { info1, info2 } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About</h2>
                        <hr className="star-light" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-2">

                        <ScrollAnimation animateIn='bounceInLeft'
                            animateOut='bounceOutRight'>
                            <p>{info1}</p>
                        </ScrollAnimation>
                        
                    </div>
                    <div className="col-lg-4">
                        
                    <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <p>{info2}</p>
                        </ScrollAnimation>

                    </div>
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <a href="#contact" className="btn btn-lg btn-outline">
                            <i className="fa fa-heart"></i> Hire Him!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;