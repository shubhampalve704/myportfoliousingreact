import LogoTitle from"../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";
const Home=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    // const nameArray=['h','u','b','h','a','m',','];
    // const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return(
        <>
        <div className="container home-page">
        <div className="text-zone">
             <h1>
             <span className={letterClass}>H</span>
             <span className={`${letterClass} _12`}>i,</span>

              <br/> 
              <span className={`${letterClass} _13`}>I'</span>
             <span className={`${letterClass} _14`}>m</span>
             <img src={LogoTitle} alt="developer" />
              {/* <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> */}
              <span className={`${letterClass} _15`}>h</span>
              <span className={`${letterClass} _16`}>u</span>
              <span className={`${letterClass} _17`}>b</span>
              <span className={`${letterClass} _18`}>h</span>
              <span className={`${letterClass} _19`}>a</span>
              <span className={`${letterClass} _20`}>m</span>
              <span className={`${letterClass} _21`}>,</span>


             <br />
             {/* <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/> */}
             <span className={`${letterClass} _22`}>W</span>
              <span className={`${letterClass} _23`}>e</span>
              <span className={`${letterClass} _24`}>b</span>
              <span className={`${letterClass} _25`}> </span>
              <span className={`${letterClass} _26`}>D</span>
              <span className={`${letterClass} _27`}>e</span>
              <span className={`${letterClass} _28`}>v</span>
              <span className={`${letterClass} _29`}>e</span>
              <span className={`${letterClass} _30`}>l</span>
              <span className={`${letterClass} _31`}>o</span>
              <span className={`${letterClass} _32`}>p</span>
              <span className={`${letterClass} _33`}>e</span>
              <span className={`${letterClass} _34`}>r</span>
              <span className={`${letterClass} _35`}>.</span>
        
             </h1>
             <h2>MERN Developer / Javascript Expert / Coder</h2>
             <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo/>

        </div>
        <Loader type="pacman"/>
        </>
    );
}
export default Home;