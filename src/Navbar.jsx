import React, {Component} from 'react';
import {HashLink as Link } from 'react-router-hash-link';
import logo from './images/logo.jpg';

class Navbar extends Component{
    
    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto" id="navbar">
                   
                        

            
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div className="container">
  <Link smooth to="#home" className="navbar-brand" >
            <img src={logo} alt="Arpit Sirasao" id="nav_logo"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <div className="div-nav-item">
        <Link smooth to="#home" className="nav-link" ><strong>Home</strong></Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="div-nav-item">
        <Link smooth to="#about" className="nav-link" ><strong>About</strong></Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="div-nav-item">
        <Link smooth to="#resume" className="nav-link" ><strong>Resume</strong></Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="div-nav-item">
        <Link smooth to="#projects" className="nav-link" ><strong>Projects</strong></Link>
        </div>
      </li>
      {/* <li className="nav-item">
        <a><Link smooth to="#achievements" className="nav-link" ><strong>Achievements</strong></Link></a>
      </li> */}
      <li className="nav-item">
        <div className="div-nav-item">
        <Link smooth to="#contact" className="nav-link" ><strong>Contact</strong></Link>
        </div>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>


</div>

</div>

</div>
            </>
        );
    }
}

export default Navbar;