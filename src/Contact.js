import React from 'react';



class Contact extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        //start showing the loader
        let contactSendLoader = document.getElementById("contactSendLoader");
        contactSendLoader.style.display = "inline-block";

        //target the form
        let contactForm = document.getElementById("contactForm");
        
        fetch('https://techglows.com/mail/contact_me.php', {
          method: 'POST',
          body: data,
          
        }).then(response => {
            //console.log(response.status);
            if(response.status == 200){
                document.getElementById("success").innerHTML="<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Your message has been sent. </strong></div>";
            }else{
                document.getElementById("success").innerHTML="<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry, it seems that my mail server is not responding. Please try again later!. </strong></div>";
            }
           //console.log(response);
          }).catch(err => {
            // Do something for an error here
            //console.log(err);
            document.getElementById("success").innerHTML="<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry, it seems that our mail server is not responding. Please try again later!. </strong></div>";
          }).finally(()=>{
              //hide the loader
            contactSendLoader.style.display = "none";
            //clear the form
            contactForm.reset();
          });
      }


    render() {
        return (
            <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit} >
                <div className="row control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
                        
                    </div>
                </div>
                <div className="row control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Email Address" id="email" name="email" required />
                        
                    </div>
                </div>
                <div className="row control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Phone Number" id="phone" name="phone"/>
                        
                    </div>
                </div>
                <div className="row control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Message</label>
                        <textarea rows="5" className="form-control" placeholder="Message" id="message" name="message" required></textarea>
                        
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="row">
                    <div className="form-group col-xs-12">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Send <i className="fa fa-spinner fa-spin" id="contactSendLoader" aria-hidden="true"></i></button>
                        
                    </div>
                </div>
            </form>
        );
    }
}

export default Contact;
