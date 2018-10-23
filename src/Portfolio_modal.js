import React from 'react';


class PortfolioModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: props.show
        }
        /* console.log("Received props:" + this.props.show)
        console.log("Current State:" + this.state.showModal) */
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
        var {mainTitle, image, description, technologies, client, url, date, service} = this.props;
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
                                    <img src={require("./img/portfolio/"+image)} className="img-responsive img-centered" alt="" />
                                    <p>{description}</p>

                                    <p>Technologies Used: <b>{technologies}</b></p>
                                    <ul className="list-inline item-details">
                                        <li>Client: 
                                    <strong><a href={url}>{client}</a>
                                            </strong>
                                        </li>
                                        <li>Date: 
                                    <strong><a href="#">{date}</a>
                                            </strong>
                                        </li>
                                        <li>Service: 
                                    <strong><a href="#">{service}</a>
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