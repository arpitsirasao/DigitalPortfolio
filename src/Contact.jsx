import React,{Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <>
            <section id="contact">
                <div className="row">
                    <div className="col-10 col-lg-10 mx-auto">
                        <br />
                        <br />
                        <br />
                        <h4 className="comp_tags"><strong>&lt;contact&gt;</strong></h4>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-12 col-md-8" id="contact-note">
                                <h1>Hope it was a good virtual meet.</h1>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-12 col-md-8" id="contact-knowmore">
                                <h3>Get to know me more at :</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12 col-md-8" id="contact-icons">
                                <div className="row">
                                <div className="div-icon"  id="linkedin">
                                    <span><a className="span-icon" id="li-icon" href="https://www.linkedin.com/in/arpit-sirasao-0b0a04190/" target="_blank"><strong><i className="fa fa-linkedin"/></strong></a></span>
                                </div>
                                <div className="div-icon "  id="gmail">
                                    <span><a className="span-icon" id="gm-icon" href="mailto:arpitsirasao98@gmail.com" target="_blank"><i className="fa fa-envelope"/></a></span>
                                </div>
                                <div className="div-icon " id="insta">
                                    <span><a className="span-icon" id="in-icon" href="https://www.instagram.com/arpit_sirasao/" target="_blank"><i className="fa fa-instagram"/></a></span>
                                </div>
                                <div className="div-icon "  id="fb">
                                    <span><a className="span-icon" id="fb-icon" href="https://www.facebook.com/arpit.sirasao" target="_blank"><i className="fa fa-facebook"/></a></span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br/>
                        <h4 className="comp_tags"><strong>&lt;contact&gt;</strong></h4>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Contact;