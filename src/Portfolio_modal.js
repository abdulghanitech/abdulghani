import React from 'react';


class PortfolioModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: props.show
        }
        console.log("Received props:" + this.props.show)
        console.log("Current State:" + this.state.showModal)
        //this.closeModal = closeModal.bind(this)

    }

    componentWillReceiveProps(nextProps){
        this.setState({showModal:nextProps.show}); 
        console.log(this.state);
      }

    closeModal = () => {
        console.log("attempted to close");
        this.setState({showModal: false});
    }



    render() {
        //this.state.showModal = this.props.show;
        var {mainTitle} = this.props;
        return (
            <div className={(this.state.showModal) ? "portfolio-modal modal fade in" : "portfolio-modal modal fade hidden"} style={{ display: this.state.showModal ? "block" : "none" }} id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal" onClick={this.closeModal}>
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    <h2>{mainTitle}</h2>
                                    <hr className="star-primary" />
                                    <img src="img/portfolio/codersquiz-screenshot.png" className="img-responsive img-centered" alt="" />
                                    <p>CodersQuiz is intended to make the beginners in programming, learn the right things in a game like interface. Basically it’s a quiz which focuses on making people learn the programming languages in a short span of time.<br /><br />

                                        It has three different levels in this Game. Beginner, Intermediate, Expert. Select wisely and you’ll learn the things fast according to your potential of grasping.<br /><br />

                                        Playing this game is indeed very easy, you just need to answer the multiple choice questions. As soon as you’ve answered, you’ll be getting an in-depth explanation for both the wrong and right options. The only thing is, you need to have a great focus and patience.<br /><br />

                                        After the Quiz gets completed, you have a leader board to know your scores which includes your average score too. Your friend’s score will also be shown in the leader board, so it creates a kind of competitive environment.<br /><br />

                                        Ah! Hope you’ve got the real motto of CodersQuiz. It is Learn, Play and Compete.</p>

                                    <p>Technologies Used: <b>PHP, Wordpress, HTML5, CSS3, JavaScript, JQuery, Ajax, MySQL DB.</b></p>
                                    <ul className="list-inline item-details">
                                        <li>Client:
                                    <strong><a href="http://codersquiz.com">CodersQuiz</a>
                                            </strong>
                                        </li>
                                        <li>Date:
                                    <strong><a href="#">August 2016</a>
                                            </strong>
                                        </li>
                                        <li>Service:
                                    <strong><a href="#">Web Development</a>
                                            </strong>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal}><i className="fa fa-times"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioModal;