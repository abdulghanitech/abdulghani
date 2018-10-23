import React from 'react';
import PortfolioModal from './Portfolio_modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';



class PortfolioItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { showModal: false }
        this.closeModal = this.closeModal.bind(this);
        this.showTheModal = this.showTheModal.bind(this);
    }


    closeModal() {
        //console.log("handling modal");
        this.setState({
            showModal: false
        }, function () {
            //console.log(this.state.showModal)
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
        //console.log("clicked");
        this.setState({
            showModal: !this.state.showModal
        }, function () {
            //console.log(this.state.showModal)
        });
      }


    render() {
        var { image, mainTitle, description, technologies, client, url, date, service } = this.props;
        var imgSrc = require('./img/portfolio/' + image);
        var imgHeight = 230;
        var imgWidth = 360;

        return (
            <div className="col-sm-4 portfolio-item">

                <a href="#" className="portfolio-link imgfix" data-toggle="modal" onClick={this.toggleModal}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <LazyLoadImage
                    alt={mainTitle}
                    height={imgHeight}
                    src={imgSrc}
                    width={imgWidth}
                    className="img-responsive"
                    />
                    <span className="small-title">{mainTitle}</span>
                  
                </a>

                 <PortfolioModal show={this.state.showModal} mainTitle={mainTitle} image={image} description={description} technologies={technologies} client={client} url={url} date={date} service={service} /> 

            </div>

        );
    }

}

export default PortfolioItem;