import React, { useState, useEffect } from 'react';

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
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  
  /*
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
  function tick() {
    setDate(new Date().toLocaleTimeString());
  }
  */
  const hours = new Date().getHours()
  //const isDayTime = hours > 6 && hours < 18
  const isDayTime = false;

  return (
    <div className={isDayTime ? 'day app' : 'night app'}>
      <div className="app-stars"></div>
      <div className="app-nova"></div>
      <Header date={date}/>
      <MainContainer/>
    </div>
  );
}

function Header(props:any){
  return (
    <div className="header">
      {props.date}
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
          return <div onClick={() => setClick(option.name)} className="subcontainer-option"><img src={option.path} className="subcontainer-image"/></div>
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
