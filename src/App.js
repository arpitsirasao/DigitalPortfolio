import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import {Switch,BrowserRouter, Route, Redirect} from 'react-router-dom';

class Container extends Component{
  render(){
    return(
      <>
      {/* <Navbar /> */}
      <Home/>
      {/* <Home /> */}
      <About />
      <Resume />
      <Projects />
      {/* <Achievements /> */}
      <Contact />
      </>
    );
  }
}

class App extends Component {
  componentDidMount() {
    document.title = 'Arpit Sirasao';
  }
  render(){
    return (
      <>
      {/* <Switch>
      <Route exact path="/" component={Home1} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      </Switch> */}
        
        {/* <Home /> */}
          <Navbar />
          <Switch>
          {/* <Route exact path="/" component={Container}
            onEnter={function(){
              document.getElementById(home1").scrollIntoView();
            }}
          /> */}
          <Route path="/" component={Container}
            onEnter={function(){
              document.getElementById("home").scrollIntoView();
            }}
          />
          </Switch>
         
          {/* <Redirect to="/" /> */}
        
        {/* <Home /> */}
      </>
    );
  }
  
}

export default App;
