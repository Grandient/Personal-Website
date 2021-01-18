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
  {name: "PassChecker", path: passchecker},
  {name: "RepositoryViewr", path: repositoryviewr},
]

let experience = [
  {name: "ESL", path: ESL},
  {name: "Ontario Tech", path:ontariotech},
  {name: "FliteX", path: flitex}
]

let technology = [
  {name: "React", path: react},
  {name: "MongoDB", path: mongodb},
  {name: "Prometheus", path: prometheus},
  {name: "Grafana", path:grafana},
  {name: "Redux", path:redux}
]

function App() {
  const hours = new Date().getHours()
  const isMorning = hours > 5 && hours < 12
  const isEvening = hours < 5 && hours > 19;
  const isAfternoon = hours > 12 && hours < 19;
  return (
    <div className={'night app'}>
      <div className="app-stars"></div>
      <div className="app-nova"></div>
      <Header afternoon={isAfternoon} morning={isMorning} evening={isEvening}/>
      <MainContainer/>
      <Footer/>
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
      <div>{props.item.name}</div>
    </div>
  </div>
  )
}



export default App;
