import React,{Component} from 'react';
import pdf from "./docs/ArpitSirasaoResume.pdf";

class Resume extends Component{
    render(){
        return(
            <>
            <section id="resume">
            <div className="row">
            <div className="col-10 col-lg-10 mx-auto">
                
                <br />
                <br />
                <br />
                <h4 className="comp_tags"><strong>&lt;resume&gt;</strong></h4>
                <h3 className="resume-info">Education</h3>
                <ul className="timeline">
                    <li className="timeline-item rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">Lakshmi Narain College of Technology and Science, Bhopal</h2>
                        <span className="small text-gray">RGPV / BE / CSE </span><br/>
                        <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2016-2020</span>
                        <p className="text-small mt-2 font-weight-light">8.37 CGPA</p>
                    </li>
                    <li className="timeline-item rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">Bal Bhavan School, Bhopal</h2>
                        <span className="small text-gray">CBSE</span><br/>
                        <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2016</span>
                        <p className="text-small mt-2 font-weight-light">84.80 %</p>
                    </li>
                    <li className="timeline-item rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">Bal Bhavan School, Bhopal</h2>
                        <span className="small text-gray">CBSE</span><br/>
                        <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2014</span>
                        <p className="text-small mt-2 font-weight-light">8.60 CGPA</p>
                    </li>
                    
                </ul>

                <br/>
                <h3 className="resume-info">Experience</h3>
                <ul className="timeline">
                    <li className="timeline-item rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">T Systems ICT India Pvt Ltd, Pune</h2>
                        <span className="small text-gray">Intern</span><br/>
                        <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>Dec 2019- Jun 2020</span>
                        <p className="text-small mt-2">Underwent training program on SDLC combined with technology
orientation on Data Science and Full-Stack. Also covered Soft-skills,
Life-skills, and outbound training to develop team spirit and Business
Principles.</p>
                    </li>
                </ul>

                <br/>
                
                <div className="row">
                    <div className="col-12">
                        
                            <a id="download-resume" href={pdf} download="ArpitSirasaoResume.pdf" >Download Resume</a>
                        
                    </div>

                </div>
            <br/>
            <br/>
            <br/>
            <h4 className="comp_tags"><strong>&lt;/resume&gt;</strong></h4>
            <br/>
            </div>
        </div>
        
            </section>
            </>
        );
    }
}

export default Resume;