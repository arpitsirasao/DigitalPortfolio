import React,{Component} from 'react';
import Navbar from './Navbar';

class About extends Component{
    render(){
        return(
            
            <section id="about">
                <div className="row">
            <div className="col-10 col-lg-10 mx-auto">
                <br />
                <br />
                <br />
                <h4 className="comp_tags"><strong>&lt;about&gt;</strong></h4>
                <h3>Objective</h3>
                <p>Highly flexible individual with analytical skills in Computer Science. Offering skills in application development and object oriented languages to develop superior software applications, with an opportunity for personal and career growth.</p>
                
                <br />
                <div className="row">
                    <div className="col-10 col-md-6">
                    
                <h3>Skill Set</h3>
                
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>Java</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>Python</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>HTML/CSS</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>Javascript</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>DBMS / MySQL</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4">
                        <span>React JS</span>
                    </div>
                    <div className="col-4">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star-half-o checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <br/>
                </div>

                <div className="col-10 col-md-6">

                    <h3>Personal Details</h3>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <span className="details">Full Name:</span>
                        </div>
                        <div className="col-4">
                            <span>Arpit Sirasao</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <span className="details">Date of Birth:</span>
                        </div>
                        <div className="col-4">
                            <span>14<sup>th</sup> November 1998</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <span className="details">Email:</span>
                        </div>
                        <div className="col-4">
                            <span>arpitsirasao98@gmail.com</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <span className="details">Languages known:</span>
                        </div>
                        <div className="col-6">
                            <span>English, Hindi, Marathi</span>
                        </div>
                    </div>
                <br/>
                </div>
                </div>
                <br />
                <h4 className="comp_tags"><strong>&lt;/about&gt;</strong></h4>
            </div>
        </div>
            </section>
            
        );
    }
}

export default About;