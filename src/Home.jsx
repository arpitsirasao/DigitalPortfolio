import React, {Component} from 'react';
import web from "./images/arpit_logo.jpeg";

class Home extends Component{
    render(){
        return(
            <section id="home">
                <div className="row container">
                    <div className="col-10 mx-auto">
                        <br/>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="comp_tags"><strong>&lt;home&gt;</strong></h4>  
                            </div>
                        </div>
                        <br/>
                        <div className="row data">
                            <div className="col-12 col-lg-6">
                                <div>
                                    <img  id="arpit_img" src={web} alt="Arpit Sirasao"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6" id="arpit_desc">
                                <br/>
                                <h3><strong>Front End Developer</strong></h3>
                                <h3><strong>Java Programmer</strong></h3>
                                <h3><strong>SQL Rookie</strong></h3>
                                
                                {/* <div id="home-note">
                                    <h1><strong>I'm Arpit Sirasao</strong></h1>
                                </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div id="home-note">
                                    <br/>
                                    <h1><strong>I'm Arpit Sirasao</strong></h1>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="comp_tags"><strong>&lt;/home&gt;</strong></h4>  
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </section>
        );

    }
}

export default Home;