import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './responsive_style.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scrollspy from 'react-scrollspy';
/* import { Link } from 'react-scroll'; */

/* import ScrollSpy from "react-ui-scrollspy"; */
/* import {scroller} from 'react-scroll'; */


import myImage from './images/pic-removebg-preview.png';
import socialmedia from './images/socialmedia.PNG';
import chatlatest from './images/chatlatest.PNG';
import quiz1 from './images/quiz1.PNG';
import crud from './images/crud.PNG';
import quiz from './images/quiz.PNG';
import country from './images/country.PNG';
import bookRedux from './images/bookRedux.PNG';
import emp_info_storage from './images/emp_info_storage.PNG';
import html_css1 from './images/html_css1.PNG';
import html_css2 from './images/html_css2.PNG';
import { useState} from 'react';

function App() {

  let [show, setShow] = useState(false)
    
  const hide = (e) => {
   /*  document.querySelector(".navCollapse1").classList.remove("show"); */
       document.querySelector(".navCollapse1").style.display="none";
       setShow((prevShow) => !prevShow)
       /* console.log("not appeared") */
       /* if(e.target.hash==='#home'){
        document.querySelector(".homeClass").style.color="#4458dc";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="white";

       }else if(e.target.hash==='#about'){
        document.querySelector(".homeClass").style.color="white";
        document.querySelector(".aboutClass").style.color="#4458dc";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="white";

       }else if(e.target.hash==='#education'){
        document.querySelector(".homeClass").style.color="white";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="#4458dc";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="white";

       }else if(e.target.hash==='#experience'){
        document.querySelector(".homeClass").style.color="white";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="#4458dc";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="white";

       }else if(e.target.hash==='#portfolio'){
        document.querySelector(".homeClass").style.color="white";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="#4458dc";
        document.querySelector(".contactClass").style.color="white";

       }else{
        document.querySelector(".homeClass").style.color="white";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="#4458dc";

       } */
 } 
  const handleClick = () => {
    if (show===false){
        document.querySelector(".navCollapse1").style.display="block";
        setShow((prevShow) => !prevShow)
        /* console.log("appeared") */
    }else{
        document.querySelector(".navCollapse1").style.display="none";
        setShow((prevShow) => !prevShow)
        /* console.log("not appeared") */
    }
} 

  /* const handleFunction1 = () => {
        document.querySelector(".homeClass").style.color="#4458dc";
        document.querySelector(".aboutClass").style.color="white";
        document.querySelector(".educationClass").style.color="white";
        document.querySelector(".experienceClass").style.color="white";
        document.querySelector(".portfolioClass").style.color="white";
        document.querySelector(".contactClass").style.color="white";
  } */

  

  const func1 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${socialmedia})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func2 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${chatlatest})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func3 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${quiz1})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func4 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${crud})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func5 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${quiz})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func6 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${country})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func7 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${bookRedux})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func8 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${emp_info_storage})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func9 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${html_css1})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func10 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${html_css2})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}


  return (
    <div>
      {/* <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="75"> */} {/* data-bs-offset is optional */}
    {/* Navbar section start */}
    {/* <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <h3 className="text-white">Raihanul</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-stream navbar-toggler-icon text-white"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header> */}

    {/* <header className="header_wrapper1">
    <Navbar bg="black" expand="lg" variant="dark" fixed='top' className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='text-white brand' onClick={handleFunction1}><h1>RAIHANUL</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' onClick={handleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
          <Nav className="menu-navbar-nav1">
              <Nav.Link href="#home" className='link1 homeClass' onClick={hide}>HOME</Nav.Link>
              <Nav.Link href="#about" className='link1 aboutClass' onClick={hide}>ABOUT</Nav.Link>
              <Nav.Link href="#education" className='link1 educationClass' onClick={hide}>EDUCATION</Nav.Link>
              <Nav.Link href="#experience" className='link1 experienceClass' onClick={hide}>EXPERIENCE</Nav.Link>
              <Nav.Link href="#portfolio" className='link1 portfolioClass' onClick={hide}>PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact" className='link1 contactClass' onClick={hide}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header> */}
    <header className="header_wrapper1">
    <Navbar bg="black" expand="lg" variant="dark" fixed='top' className='navbar'>
      <Container>
        {/* <Navbar.Brand href="#home" className='text-white brand'><h1>RAIHANUL</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' onClick={handleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
          <Nav className="menu-navbar-nav1">
              <Nav.Link href="#home" className='link1 homeClass' onClick={hide}>HOME</Nav.Link>
              <Nav.Link href="#about" className='link1 aboutClass' onClick={hide}>ABOUT</Nav.Link>
              <Nav.Link href="#education" className='link1 educationClass' onClick={hide}>EDUCATION</Nav.Link>
              <Nav.Link href="#experience" className='link1 experienceClass' onClick={hide}>EXPERIENCE</Nav.Link>
              <Nav.Link href="#portfolio" className='link1 portfolioClass' onClick={hide}>PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact" className='link1 contactClass' onClick={hide}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Navbar.Brand href="#home" className='text-primary brand'><h1>RAIHANUL</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' onClick={handleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
          <Nav className="menu-navbar-nav1">
            <Scrollspy 
                    /* className="scrollspyMod" */ items={ ['home', 'about', 'education', 'experience', 'portfolio', 'contact'] } 
                    currentClassName="isCurrent" offset={-1}>
                {/* <Nav.Link href="#home" className='link1 homeClass' onClick={hide}>HOME</Nav.Link> */}
                    <li className='link1' onClick={hide}><a href="#home">HOME</a></li>
                    <li className='link1' onClick={hide}><a href="#about">ABOUT</a></li>
                    <li className='link1' onClick={hide}><a href="#education">EDUCATION</a></li>
                    <li className='link1' onClick={hide}><a href="#experience">EXPERIENCE</a></li>
                    <li className='link1' onClick={hide}><a href="#portfolio">PORTFOLIO</a></li>
                    <li className='link1' onClick={hide}><a href="#contact">CONTACT</a></li>
                {/* <Nav.Link href="#about" className='link1 aboutClass' onClick={hide}>ABOUT</Nav.Link>
                <Nav.Link href="#education" className='link1 educationClass' onClick={hide}>EDUCATION</Nav.Link>
                <Nav.Link href="#experience" className='link1 experienceClass' onClick={hide}>EXPERIENCE</Nav.Link>
                <Nav.Link href="#portfolio" className='link1 portfolioClass' onClick={hide}>PORTFOLIO</Nav.Link>
                <Nav.Link href="#contact" className='link1 contactClass' onClick={hide}>CONTACT</Nav.Link> */}
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    </header>

    {/* <div>
        <section id="section-1" className="a">
          <h2>Section 1</h2>
          <p>What is Lorem Ipsum1? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </section>
        <section id="section-2" className="a">
          <h2>Section 2</h2>
          <p>What is Lorem Ipsum2? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </section>
        <section id="section-3" className="a">
          <h2>Section 3</h2>
          <p>What is Lorem Ipsum3? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </section>
        <section id="section-4" className="a">
          <h2>Section 4</h2>
          <p>What is Lorem Ipsum4? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </section>
        <section id="section-5" className="a">
          <h2>Section 5</h2>
          <p>What is Lorem Ipsum5? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </section>
      </div> */}
    


    {/* <header className="header_wrapper1">
    <Navbar bg="black" expand="lg" variant="dark" fixed='top' className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='text-white brand'><h1>RAIHANUL</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' onClick={handleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
          <Nav className="menu-navbar-nav1">  
                <Link href="#home" offset={0} className='text-white link1' activeClass="active" spy to="home" onClick={hide}>HOME</Link>
                   
                <Link href="#about" offset={0} className='text-white link1' activeClass="active" spy to="about" onClick={hide}>ABOUT</Link>
                  
                <Link href="#education" offset={3} className='text-white link1' activeClass="active" spy to="education" onClick={hide}>EDUCATION</Link>
                    
                <Link href="#experience" offset={5} className='text-white link1' activeClass="active" spy to="experience" onClick={hide}>EXPERIENCE</Link>
                  
                <Link href="#portfolio" offset={25} className='text-white link1' activeClass="active" spy to="portfolio" onClick={hide}>PORTFOLIO</Link>
                   
                <Link href="#contact" offset={-450} className='text-white link1' activeClass="active" spy to="contact" onClick={hide}>CONTACT</Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header> */}

{/* <header>
<nav>
    <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>BLOG</li>
        <li>CONTACT ME</li>
    </ul>
</nav>
</header> */}
{/* <nav>
       <li>
       <Link activeClass="active" smooth spy to="about1">
         ABOUT
       </Link>
     </li>
     <li>
       <Link activeClass="active" smooth spy to="projects1">
         PROJECTS
       </Link>
     </li>
     <li>
       <Link activeClass="active" smooth spy to="blog1">
         BLOG
       </Link>
     </li>
     <li>
       <Link activeClass="active" smooth spy to="contact1">
         CONTACT ME
       </Link>
     </li>
     </nav>
     <section id="about1">ABOUT</section>
<section id="projects1">PROJECTS</section>
<section id="blog1">BLOG</section>
<section id="contact1">CONTACT ME</section> */}

    
    
   {/*  Navbar section exit */}

   

   
    

   {/*  Banner section */}
    <section id="home" className="banner_wrapper bg-black">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 order-lg-1 order-2 banner-content">
                    <p className="row1">Hi, my name is </p>
                    <h1 className="row2">Shah Md. Raihanul Haque</h1>
                    <p className="row3">I am a web development enthusiast, based in Bangladesh.</p>
                </div>
                <div className="col-lg-5 order-lg-2 order-1 text-center">
                    <div className="top-right-img">
                        <img src={myImage} className="img-fluid" alt="myPhoto" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Banner section exit */}

    


    {/* My About section start */}
    <section id="about" className="about_wrapper bg-black">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left">
                    <br /><br /><br />
                    <h2 className="bg-secondary text-center">About Me</h2>
                    <p className="p1">
                    My name is Raihanul. I am from Bangladesh. I am a web development enthusiast. 
                    Actually, I am an EEE graduate. I have a professional experience of almost 2.5 years, 
                    but it is not related to Web/Software Development. I have been working on web development
                     personally since September 19, 2021. During this time I used React 
                     JS, Redux, Angular, SASS, LESS, Node JS, Express JS, MongoDB, MySQL, MERN, MEAN,
                      Firebase, EJS Template Engine, JSON Web Token, Multer, Express Validator, Socket.io, 
                      JSON Server, Asynchronous Javascript, Event Loop, Unit Testing, Javascript, Typescript,
                       HTML, CSS, Bootstrap, Docker, Microservices using Node JS, RabbitMQ, API Gateway, 
                       Netlify, Vercel, Render, Git, Github etc.
                    </p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My About section exit */}

   

    

    {/* My Education section start */}
    <section id="education" className="education_wrapper bg-black" data-to-scrollspy-id="education">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mb-5">
                    <h2 className="text-center bg-secondary">Education</h2>
                         
                          <p className="p5">1. BSc in EEE (September 2018), United International 
                            University, Dhaka, Bangladesh (CGPA-3.93/4)</p>
                           <p className="p6">2. HSC in Science (2013), Rangpur Govt. College, 
                                Rangpur, Bangladesh (GPA-5/5)</p>
                          <p className="p7">3. SSC in Science (2011), Rangpur Zila School,
                              Rangpur, Bangladesh (GPA-5/5)</p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My Education section exit */}

    {/* My Experience section start */}
    <section id="experience" className="experience_wrapper bg-black">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left mb-5">
                    <h2 className="text-center bg-secondary">Experience</h2>
                    <p className="p2">1. Web Development [Doing it personally] (September 19, 2021 - Present),
                        Dhaka, Bangladesh

                    </p>
                    <p className="p3">2. Former Associate Engineer (August 18, 2019 - July 31, 2021),
                            Neural Semiconductor Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                    <p className="p4">3. Former Intern (February 12, 2019 - August 12, 2019), Neural Semiconductor 
                        Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My Experience section exit */}

   

    {/* portfolio Section start */}
    <section id="portfolio" className="portfolio_wrapper bg-black">
        <div className="container">
           {/* <div className="row bg-danger"> */}
                <div className="col-sm-12 text-center mb-md-5 mb-5 bg-secondary portfolioHeading">
                    <h2>Portfolio regarding web development</h2>
                </div>
           {/* </div> */}
            
               
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <h5 className="mb-2 mt-4">Social Media App using MERN Stack</h5>
                                <div className="portfolio-img">
                                    <img src={socialmedia} className="img-fluid w-100" alt="socialmedia" />
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                <button className="btn btn-primary text-black mt-2 btn1 mb-5" onClick={func1}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Realtime Chat App using MERN Stack and Socket.io</h5>
                                <div className="portfolio-img">
                                    <img src={chatlatest} className="img-fluid w-100" alt="chat app"/>
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn2 mb-5" onClick={func2}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Millionaire Quiz App using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz1} className="img-fluid w-100" alt="Millionaire quiz app"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn3 mb-5" onClick={func3}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Food CRUD Application using MERN Stack (this has also been completed using MySQL, Node JS, Express JS, React JS, and MEAN Stack)</h5>
                                <div className="portfolio-img">
                                    <img src={crud} className="img-fluid w-100" alt="CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn4 mb-5" onClick={func4}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Quiz Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz} className="img-fluid w-100" alt="Quiz app"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn5 mb-5" onClick={func5}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Country Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={country} className="img-fluid w-100" alt="Country App"/>
                                   {/*  <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn6 mb-5" onClick={func6}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">React Book CRUD App using Redux</h5>
                                <div className="portfolio-img">
                                    <img src={bookRedux} className="img-fluid w-100" alt="Book CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn7 mb-5" onClick={func7}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Employee Info Storage CRUD Application using Angular, Bootstrap, and JSON Server</h5>
                                <div className="portfolio-img">
                                    <img src={emp_info_storage} className="img-fluid w-100"  alt="Employee Info Storage CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn8 mb-5" onClick={func8}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css1} className="img-fluid w-100"  alt="Web Template 01"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn9 mb-5" onClick={func9}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css2} className="img-fluid w-100"  alt="Web Template 02"/>
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn10 mb-5" onClick={func10}>View Project</button>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <p className="text-center">Note : I did all the projects with the help of the internet.</p>
                        </div>
                   
           
        </div>
    </section>
    {/* portfolio Section exit */}

  

    {/*Footer section*/}
    <section id="contact" className="contact_wrapper mt-md-0 bg-black">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <div className="footer-logo mb-3 mb-md-0">
                        <h2 className="bg-secondary">Contact Me</h2>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        {/* <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                        <p>Gmail ID : ronyraihan141@gmail.com</p> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer section exit */}

    
{/* </body> */}
</div>
    
  );
}

export default App;
