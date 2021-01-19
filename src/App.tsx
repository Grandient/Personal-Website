import React, { useState, useEffect } from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope, FaFilePdf, FaCode, FaFileVideo} from 'react-icons/fa';

// Techonlogy
import react from './app/React.png';
import mongodb from './app/Mongodb.png';
import prometheus from './app/Prometheus.png';
import grafana from './app/Grafana.jpg';
import redux from './app/Redux.svg';

// Experience 
import ontariotech from './app/OntarioTech.png';
import ESL from './app/ESL.jpg';
import flitex from './app/Flitex.png';

// Projects
import passchecker from './app/Passcheckerlogo.png'
import repositoryviewr from './app/repositoryviewrlogo.png'

import './App.css';

let projects = [
  { name: "PassChecker", 
    path: passchecker, 
    description: "A react application made for checking password strength and validity based on Dropbox's zxcvbn.",
    link: "http://gavingosling.me/PassChecker/"
  },
  { name: "RepositoryViewr", 
    path: repositoryviewr,
    description: "A react application that will gives an overview of any repository. An interactive table and chart views to help users understand what happens on each commit.",
    link: "http://gavingosling.me/RepositoryViewr/"
  },
]

let experience = [
  { name: "ESL", 
    path: ESL,
    description: "ESL, formerly known as Electronic Sports League, is an esports organizer and production company that produces video game competitions worldwide. ESL is the world's largest esports company, and the oldest that is still operational.",
    link: "https://www.eslgaming.com/"
  },
  {name: "Ontario Tech University", 
   path: ontariotech,
   description: "The University of Ontario Institute of Technology, corporately branded as Ontario Tech University or Ontario Tech, is a public research university located in Oshawa, Ontario, Canada.",
   link: "https://ontariotechu.ca/"
  },
  {name: "FliteX", 
   path: flitex,
   description: "An aviation startup that provides 4d Trajectory optimizations and finanical services for airlines.",
   link: "https://flitex.net/"
  }
]

let technology = [
  {name: "React", 
   path: react,
   description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
   link: "https://reactjs.org/"
  },
  {name: "MongoDB", 
   path: mongodb,
   description: "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. ",
   link: "https://www.mongodb.com/"
  },
  {name: "Prometheus", 
   path: prometheus,
   description: "An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.",
   link: "https://prometheus.io/"
  },
  {name: "Grafana", 
   path: grafana,
   description: "Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
   link: "https://grafana.com/grafana/"
  },
  {name: "Redux", 
   path: redux,
   description: "A predictable state container for JavaScript apps.",
   link: "https://redux.js.org/"
  }
]

function App() {
  /*
  const [opacity, setOpacity] = useState(50);
  useEffect(() => {
    var timerID = setInterval(() => fadeBackground(), 1000);
    return function cleanup() {
        clearInterval(timerID);
      };
   });

  function fadeBackground(){
    setOpacity();
  }*/

  return (
    <div>
      <div>
        <div className="overflow">
          <div className="app-stars"></div>
        </div>
        <div className="overflow">
          <div className="app-nova"></div>
        </div>
      </div>
      <div className='night app'>
        <Header/>
        <MainContainer/>
        <div></div>
        <Footer/>
      </div>
    </div>
  );
}

function Header(props:any){
  return (
    <div className="header">
      <div className="item-name">Gavin Gosling's Website</div>
    </div>
  )
}

function Footer(){
  return (
    <div className="footer">
        <nav className="icon-container">
            <a className="icon" aria-label="Linkedin" href="https://www.linkedin.com/in/gavin-gosling-cs/" target="_blank" data-hint="LinkedIn" rel="noreferrer">
              <FaLinkedin size={40}/>
            </a>
            <a className="icon" aria-label="Github" href="https://github.com/Grandient" target="_blank" data-hint="Github" rel="noreferrer">
              <FaGithub size={40}/>
            </a>
            <a className="icon" aria-label="E-mail" href="mailto:gavin.gosling1@gmail.com" target="_blank" data-hint="E-mail" rel="noreferrer">
              <FaEnvelope size={40}/>
            </a>
            <a className="icon" aria-label="Stack Overflow" href="https://stackoverflow.com/users/12733306/" target="_blank" data-hint="Stack Overflow" rel="noreferrer">
              <FaStackOverflow size={40}/>
            </a>
            <a className="icon" aria-label="CV" href="./data/Gavin_Gosling_Resume.pdf" data-hint="PDF" rel="noreferrer">
              <FaFilePdf size={40}/>
            </a>
          </nav>
    </div>
  )
}

function MainContainer(){
  const [click, setClick] = useState("Projects")

  return (
    <div className="main-container"> 
      <div className="main-options">
        <div onClick={() => setClick("Projects")} className={click === "Projects" ? "container-option selected" : "container-option"}>Projects</div>
        <div onClick={() => setClick("Experience")} className={click === "Experience" ? "container-option selected" : "container-option"}>Experience</div>
        <div onClick={() =>  setClick("Technology")} className={click === "Technology" ? "container-option selected" : "container-option"}>Technology</div>
      </div>
      <div className="sub-container">
        {click === "Projects" ? <ContainerOption options={projects}/> : null}
        {click === "Experience" ? <ContainerOption options={experience}/> : null}
        {click === "Technology" ? <ContainerOption options={technology}/> : null}
      </div>
    </div>
  )

}

function ContainerOption(props: any){
  const [click, setClick] = useState(props.options[0].name)

  return (
    <div>
      <div className="sub-options">
        {props.options.map((option: {name: string, path: string}) => {
          return <div onClick={() => setClick(option.name)} className={click === option.name ? "subcontainer-option selected" : "subcontainer-option"}><img src={option.path} className={click === option.name ? "subcontainer-image selected" : "subcontainer-image"}/></div>
        })}
      </div>
      <div className="item-container">
        {props.options.map((option: {name: string, path: string}) => {
          return <div>{click === option.name ? <ItemContainer item={option}/> : null}</div>
        })}
      </div>
   </div>
  )
}

function ItemContainer(props: any){
  return (
  <div>
    <div className="flex-row">
      <div className="item-name">Name: </div>
      <div>{props.item.name}</div>
    </div>
    <div className="flex-row">
      <div className="item-name">Description: </div>
      <div>{props.item.description}</div>
    </div>
  </div>
  )
}



export default App;
