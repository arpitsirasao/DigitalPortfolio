import React,{Component} from 'react';
import ProjectsList from './ProjectsList';

const Projects = (props) => {

    const ProjectsListArray = [
        {
            
            projectTitle:"My Digital Portfolio",
            projectSoftware:"React JS, HTML, CSS, Bootstrap",
            projectText:"This is my online portfolio. Hope you like it.",
            projectImg:require('./images/ProjectMyPortfolio1.png'),
            projectImg2:require('./images/ProjectMyPortfolio2.png'),
        },
        {
            
            projectTitle:"Libra",
            projectSoftware:"HTML, SCSS, Java, MySQL",
            projectText:"The primary objective of this software is to computerize any Library and replace all the paper work so that all the transactions become fast and there should not be any error in transactions like calculation mistakes.",
            projectImg:require('./images/ProjectLibra1.png'),
            projectImg2:require('./images/ProjectLibra2.png'),
        },
        {
            
            projectTitle:"Assignment Assessor",
            projectSoftware:"Java Core, Oracle",
            projectText:"This software project is an assignment assessment system. It consists of all the data management and storage facilities that are required for effectively managing the assignments submitted by students in various subjects.",
            projectImg:require('./images/ProjectAssignment1.png'),
            projectImg2:require('./images/ProjectAssignment2.png'),
        },
    ]

    const arrayProjectsCard = ProjectsListArray.map( (projectCard, i) =>{
        return <ProjectsList
                            projectTitle={ProjectsListArray[i].projectTitle}
                            projectSoftware=  {ProjectsListArray[i].projectSoftware}
                            projectText={ProjectsListArray[i].projectText} 
                            projectImg={ProjectsListArray[i].projectImg}
                            projectImg2={ProjectsListArray[i].projectImg2}/>
    })
    
        return(
            <>
            <section id="projects">
            <div className="row">
                <div className="col-10 col-lg-10 mx-auto">
                <br />
                <br />
                <br />
                <h4 className="comp_tags"><strong>&lt;projects&gt;</strong></h4>
                <br/>

                    {arrayProjectsCard}
                
                <br/>
                <h4 className="comp_tags"><strong>&lt;projects&gt;</strong></h4>
                <br/>
                </div>
            </div>
            </section>
            </>
        );
    
}

export default Projects;