import React from 'react';
import PortfolioModal from './Portfolio_modal';



class PortfolioItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { showModal: false }
        this.closeModal = this.closeModal.bind(this);
        this.showTheModal = this.showTheModal.bind(this);
    }


    closeModal() {
        console.log("handling modal");
        this.setState({
            showModal: false
        }, function () {
            console.log(this.state.showModal)
        });
    }

    showTheModal() {
        /* 	this.setState({showModal: true}, function(){
                 console.log("the link " + this.props.modalNo + " was clicked.")
              }); */
      /*   PortfolioModal.updateState({
            showModal: true
        }, function () {
            console.log("the link " + this.props.modalNo + " was clicked.")
        }); */

        return(
            <PortfolioModal show="true"/>

        )
    }

    toggleModal = () => {
        console.log("clicked");
        this.setState({
            showModal: !this.state.showModal
        }, function () {
            console.log(this.state.showModal)
        });
      }


    render() {
        var { image, modalNo, mainTitle } = this.props;

        return (
            <div className="col-sm-4 portfolio-item">

                <a href={modalNo} className="portfolio-link imgfix" data-toggle="modal" onClick={this.toggleModal}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={require('./img/portfolio/' + image)} className="img-responsive" alt="" />
                </a>

                 <PortfolioModal show={this.state.showModal} mainTitle={mainTitle} /> 

            </div>



        );
    }



    renderModal() {

        console.log(this.state.showModal);


        return (

            <div className={(this.state.showModal) ? "portfolio-modal modal fade in" : "portfolio-modal modal fade hidden"} id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal" onClick={this.closeModal} >
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    <h2>Coders Quiz</h2>
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
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.setState({ showModal: false })}><i className="fa fa-times"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }



}

export default PortfolioItem;