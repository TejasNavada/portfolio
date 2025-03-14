import React, { useContext, useEffect } from "react";
import Header from '../components/Header'
import logo from '../logo.svg';
import '../App.css';
import Block from "../components/Block";
import TypingText from "../components/TypingText";
import Footer from "../components/Footer";

const Resume = () => {

    useEffect(() => {

    }, []);
  
    return (
        <div className="home" style={{ color:"#ffffff" }} >
            <Header/>
            <div style={{height:"20vh"}}></div>
            <style>
                            {`

                            * {
  box-sizing: border-box;
}
:root {
  --box-size: 300px;
  --border-thickness: 10%;
}
/* Set a background color */
body {
  background-color: #ffd86e;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 50px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #61D4E8;
  border: 4px solid #2DA1E7;
  top: 105px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
  justify-content: right;
  .content{
  justify-self: right;
  }
}

/* Place the container to the right */
.right {
  left: 50%;
  justify-content: left;
  .content{
  justify-self: left;
  }
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 112px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 112px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #ECEFF1;
  position: relative;
  border-radius: 6px;
 }
  
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--box-size);
  width: var(--box-size);
}

.border-lights {
  background-color: hsl(240, 50%, 10%);
  background-image: radial-gradient(white 70%, transparent 30%);
  background-size: calc(var(--border-thickness) * 2) calc(var(--border-thickness) * 2);
  background-position: 0 0;
  position: relative;
  z-index: 1;
}

.border-lights::before {
  content: "";
  display: block;
  background-color: hsla(0, 0%, 100%, 1);
  position: absolute;
  top: var(--border-thickness);
  left: var(--border-thickness);
  height: calc(var(--box-size) - var(--border-thickness) * 2);
  width: calc(var(--box-size) - var(--border-thickness) * 2);
  z-index: -1;
}

.cloud {
    height: 180px; /* control the size */
    aspect-ratio: 1.8;
    --g: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
    mask: var(--g) 100% 100%/30% 60%,var(--g) 70% 0/50% 100%,var(--g) 0 100%/36% 68%,var(--g) 27% 18%/26% 40%,linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
    background: #ECEFF1;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
                            `}     
                        </style>
            

            <Block style={{width:"45vw", margin:"auto", paddingInline:"2.5vw", paddingBlock:"5vh", marginBlock:"10vh", justifyContent:"center", justifyItems:"center", alignContent:"center", }}>
                
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vS6QLP09ucv7pI_RXIWUNYvUiun2vvB9j57tt33G0qAgW2xY-9fS-msomR4L1TDhZaFL2sBG8YNuhZw/pub?embedded=true" style={{width:"45vw", marginInline:"auto"}} height="718" frameborder="0" >Loading…</iframe>
                
            </Block>

            <Block style={{width:"33vw", margin:"auto", textAlign:"left",paddingInline:"2.5vw", paddingBlock:"5vh", display:"flex", marginBlock:"5vh"}}>
              
            <svg  xmlns="http://www.w3.org/2000/svg"height="98.188" viewBox="0 0 206.1925 98.1875" width="206.19" version="1.1"><g transform="matrix(1.25 0 0 -1.25 -127.51 602.7)"><g transform="translate(.77443 .77443)"><path d="m156.28 480.56-13.223-23.585-12.685 23.585h-28.362l41.172-76.95 28.291 52.284h24.631l-27.753-51.543h28.597l27.545 51.751h27.748l13.123 24.458h-109.08z" fill="#cf4520"/><path d="m129.27 478.73 13.748-25.568 14.338 25.568h104.93l-11.153-20.787h-27.75l-27.545-51.753h-24.416l27.75 51.544h-28.801l-27.187-50.245-38.113 71.241h24.195z" fill="#fff"/><path d="m108.14 476.89h20.034l14.814-27.544 15.446 27.544h100.79l-9.184-17.112h-27.752l-27.547-51.75h-20.24l27.751 51.54h-32.97l-26.082-48.203-35.06 65.525z" fill="#6a2c3e"/></g></g></svg>
                <div style={{marginLeft:"2vw", display:"flex", flexDirection:"column"}}>
                    <span style={{fontSize:24, fontWeight:100, marginBlock:".5vh"}}>
                        Bachelors of Science
                    </span>
                    <span style={{fontSize:18, fontWeight:5, marginBlock:".5vh"}}>
                        Virginia Tech
                    </span>
                    <span style={{fontSize:18, fontWeight:5, marginBlock:".5vh"}}>
                        Graduating Spring 2025
                    </span>
                    <span style={{fontSize:18, fontWeight:5, marginBlock:".5vh"}}>
                        GPA: 3.5/4
                    </span>
                    <span style={{fontSize:18, fontWeight:5, }}>
                      <ul style={{margin:"0"}}>
                        <li>
                          Major in Computer Science
                        </li>
                        <li>
                          Deans List 2022, 2023 and 2024
                        </li>
                      </ul>
                    </span>
                    
                    
                </div>
            </Block>
            <Block style={{margin:"auto", width:"66vw", textAlign:"center",paddingInline:"5vw", paddingBlock:"10vh"}}>
                <div style={{justifyContent:"center"}}>
                    <span style={{fontSize:40,overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>My Timeline</span>
                    <div class="timeline" style={{display:"flex", flexDirection:"column"}}>
                        <div class="container left">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >Sept 2017</h2>
                                <p>Started learning Java freshman year of highschool.</p>
                            </div>
                        </div>
                        <div class="container right">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >Jun 2020</h2>
                                <p>Internship at Nobel Explorers teach students how to build websites and games with html,css,js and python.</p>
                                
                            </div>
                        </div>
                        <div class="container left">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >May 2021</h2>
                                <p>Graduated highschool with 4 years of Java fundamentals, 1 year of C++ experience and basic exposure to HTML/CSS/JS</p>
                            </div>
                        </div>
                        <div class="container right">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 style={{margin:"0"}}>Sept 2023</h2>
                                <p style={{marginBottom:"0", fontSize:12}}>Join Prof Yan Chen's lab as undergraduate research assistant to work on the VizPI platform. Worded on migrating the database from firebase to postgre and built a backend in node.js to handle api requests. Then coordinated with Java, C++ and SQL instructors to bring these languages to our platform and for our tool to be used in their courses.</p>
                                
                            </div>
                        </div>
                        <div class="container left">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >Nov 2024</h2>
                                <p>Developed Planeterium App</p>
                            </div>
                        </div>
                        <div class="container right">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >Jun 2020</h2>
                                <p>Developed VizME for mechanical engineering Professor.</p>
                            </div>
                        </div>
                        <div class="container left">
                            <i class="fa fa-code-fork" aria-hidden="true"></i>
                            <div class="content cloud" style={{color:"#000", display:"block", paddingTop:"30px"}}>
                                <h2 >Nov 2024</h2>
                                <p>Developed Congressional Asset Tracker</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </Block>
            <Footer/>
        </div>
    );
};
  
export default Resume;
