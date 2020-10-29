import React,{Component} from 'react';

const ProjectsList = (props) => {
    return(
        <>
        <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-5">
        <div id="carouselExampleSlidesOnly" className="carousel slide zoom" data-interval="6000" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={props.projectImg} className="d-block w-100" alt={props.projectTitle}/>
        </div>
        <div className="carousel-item">
            <img src={props.projectImg2} className="d-block w-100" alt={props.projectTitle}/>
        </div>
        </div>
        </div>
        {/* <img src={props.projectImg} className="card-img zoom" alt={props.projectTitle}/> */}
    </div>
    <div className="col-md-7">
        <div className="card-header">
            <h5 className="card-title">{props.projectTitle}</h5>
            <p className="card-text"><small>{props.projectSoftware}</small></p>
        </div>
        <div className="card-body">
            <p className="card-text">{props.projectText}</p>
        
      </div>
    </div>
  </div>
</div>
    <br/>
    </>
    )
}

export default ProjectsList;