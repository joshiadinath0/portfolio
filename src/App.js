
import './App.css';
import pic1 from "./a.png";
import pic2 from "./b.png";
import { TbBrandTwitter } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiFillHome, AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { DiJava, DiJavascript1, DiReact, DiNodejs, DiMysql, DiHtml5 } from "react-icons/di";

import  'react-responsive'
function App() {
  var MediaQuery = require('react-responsive');
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className="App">

   
      <div className="div1">
        <img src={pic1} alt="name" />
      </div>
      <div className="top">

        <a href='https://drive.google.com/file/d/14eJQ0kGa4IFH8JC7LL7TbqeFepRh9oV4/view?usp=sharing' target="_blank" rel="noopener noreferrer">RESUME</a>

      </div>

      <div className="div2" >
        <h2 style={{
          'font-family': 'Lato, sans-serif', 'font-size': '25px', 'font-weight': '800'
        }}>WELCOME TO MY PORTFOLIO ! <span class="wave" >👋</span></h2>
        <div className="div3">
          <h1 style={{
            'font-family': 'Lato, sans-serif', 'font-size': '55px', 'font-weight': '200'
          }}>ADINATH</h1>
          <h1 style={{
            'font-family': 'Roboto', 'font-size': '55px', 'font-weight': '1200'
          }}> JOSHI</h1>

          <h2 style={{
            'font-family': 'Lato, sans-serif', 'font-size': '25px', 'font-weight': '200'
          }}>I am an undergrad from Ramrao Adik Institute of Technology<br /> majored in Electronics and Telecommunication.
            <br />
            I <span className='hrt'>♡</span> building stuff, and enjoy working on meaningful and challenging problems.</h2>
          <div className='icons'>
            <TbBrandTwitter id='twitter' onClick={() => window.open('https://twitter.com/Adijazzy08', '_blank')} size={36} />
            <SiLeetcode id='leetcode' onClick={() => window.open('https://leetcode.com/AdinathJoshi/', '_blank')} size={36} />
            <VscGithub id='github' onClick={() => window.open('https://github.com/joshiadinath0', '_blank')} size={36} />
            <AiOutlineLinkedin id='linkedin' onClick={() => window.open('https://www.linkedin.com/in/adinathjoshi/', '_blank')} size={36} />

          </div>


        </div>


        <div className="div4">
          <img src={pic2} alt="name" />

        </div>

      </div>
      <div className='sk'>
        <DiJava size={36} />
        <DiJavascript1 size={36} />
        <DiReact size={36} />
        <DiNodejs size={36} />
        <br />

        <DiHtml5 size={36} />
        <DiMysql size={36} />

      </div>
      <div className='scrollbot'>       <a  className="fa fa-angle-double-down" onClick={handleScroll} ></a>
      </div>

      <div className='contact'>

        <h1 style={{
          'text-decoration': 'underline  maroon', 'text-underline-offset': '15px', 'font-family': 'Lato, sans-serif', 'font-size': '45px', 'font-weight': '1200'
        }}> CONTACT</h1>

        <h2 style={{
          'color': 'white', 'font-family': 'Lato, sans-serif', 'font-size': '20px', 'font-weight': '100'
        }}>Let's get in touch and build something together :) </h2>
        <div className='contactIcons'>
          <div className='contactIcons1'>
            <AiFillHome size={75} />
            <div className='front'>
              <h1 style={{
                'font-family': 'Lato, sans-serif', 'font-size': '55px', 'font-weight': '200'
              }}> Location</h1>
            </div>
            <div className='back'>
              <h2 style={{
                'font-family': 'Lato, sans-serif', 'font-size': '25px', 'font-weight': '2020'
              }}>
                Mumbai, India
              </h2>
            </div>
          </div>
          <div className='contactIcons1'>
            <AiTwotoneMail size={75} />
            <div className='front'>  <h1 style={{
              'font-family': 'Lato, sans-serif', 'font-size': '55px', 'font-weight': '200'
            }}> Mail</h1>
            </div>
            <div className='back'>
              <h2 style={{
                'font-family': 'Lato, sans-serif', 'font-size': '25px', 'font-weight': '2020'
              }}>
                joshiadinath0@gmail.com
              </h2>
            </div>
          </div> <div className='contactIcons1'>
            <AiFillPhone size={75} />
            <div className='front'>

              <h1 style={{

                'font-family': 'Lato, sans-serif', 'font-size': '55px', 'font-weight': '200'
              }}> Phone</h1>
            </div>

            <div className='back'>
              <h2 style={{
                'font-family': 'Lato, sans-serif', 'font-size': '25px', 'font-weight': '2020'
              }}>
                +917400383241
              </h2>
            </div>

          </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

    </div>
  );
}

export default App;
