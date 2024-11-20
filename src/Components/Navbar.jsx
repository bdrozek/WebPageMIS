import React from 'react'
import './navbar.css'
import logo from '../assets/HelloWorldEarthLogo.png'
import agar from '../assets/agar_transparent.png'
import joPic from '../assets/Joseph Payne - Image.jpg'
import jackPic from '../assets/jack-pic.jpg'
import benPic from '../assets/ben-pic.jpg'
import koyPic from '../assets/koy-pic.jpg'
import microbe from '../assets/microbe-blob.png'
import check from '../assets/check.png'
import jira from '../assets/Jira-SS.png'
import microbe1 from '../assets/microbe-1.png'
import microbe2 from '../assets/microbe-2.png'
import microbe3 from '../assets/microbe-3.png'
import microbe4 from '../assets/microbe-4.png'
import microbe5 from '../assets/microbe-5.png'
import microbe6 from '../assets/microbe-6.png'
import microbe7 from '../assets/microbe-7.png'
import microbe8 from '../assets/microbe-8.png'
import microbe9 from '../assets/microbe-9.png'
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion"
import { useState } from 'react'
import { useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  console.log("rotation:", rotate);

  const { scrollY } = useScroll();

  useEffect(() => {
    // Subscribe to changes in scrollY value
    return scrollY.onChange((latest) => {
      console.log("Scroll position in pixels:", latest);
      if (latest < 400){
        setVisible(true);
        setVisible1(false);
        setVisible2(false);
        setVisible3(false);
      } else if(latest > 400 && latest < 1495){
        setVisible(false);
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
      }else if (latest > 1495 && latest < 4000){
        setVisible(false);
        setVisible1(false);
        setVisible2(true);
        setVisible3(false);
      }else if (latest > 4000){
        setVisible(false);
        setVisible1(false);
        setVisible2(false);
        setVisible3(true);
      }
    });
  }, [scrollY]);



  return (
    <>
    <div className="nav-banner">
      
      <motion.img style ={{rotate}} src={logo} className="logo"/>
      <h1 className={visible ? "project-name visible" : "project-name"} >MIS Microbiology Dashboard</h1>
      <h1 className={visible1 ? "project-desc visible" : "project-desc"} >Project Description:</h1>
      <h1 className={visible2 ? "group-name visible" : "group-name"} >Hello World!</h1>
      <div className="scroll-stop">
      <h1 className={visible3 ? "meeting-name visible" : "meeting-name"} >Scheduling & Demo</h1>
      </div>
      <img  src={agar} className="agar" />

      <div className="project-desc-container">
        <img src={microbe} className="desc-microbe-img" />
          <div className="project-desc-content">
            <p className="proj-desc-p">A real-time dashboard for the Microbiology department of the LIS training simulator. The dashboard includes quality control, patient reports, quizzes, patient/order entry, assignments, and case studies. The MIS dashboard provides information systems training software that simulates “Real-World” pathology lab workflow conditions,
            provide students with clinical correlation to increase diagnostic comprehension, and eliminate gaps in laboratory analysis knowledge in order to reduce adverse healthcare events.</p>
          </div>
      </div>

      <div className="microbe-imgs">
        <img src={microbe1} className="microbe-1" />
        <img src={microbe2} className="microbe-2" />
        <img src={microbe3} className="microbe-3" />
        <img src={microbe4} className="microbe-4" />
        <img src={microbe5} className="microbe-5" />
        <img src={microbe6} className="microbe-6" />
        <img src={microbe9} className="microbe-9" />
      </div>

      <div className="jo-container">
        <div className="jo-picture-card">
          <motion.img  whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={joPic} className="jo-img" />
        </div> 
        <div className="jo-card-content">
          <h1 className="jo-name">Joseph Payne</h1> 
          <p className="jo-role">Group Leader</p> 
          <p className="jo-desc">Worked on a large portion of the report and some of the presentation. On top of working on the presentation and report, I also contributed to the back end (primarily the database), and conducted one test user interview. </p>
        </div>
      </div>

      <div className="jack-container">
        <div className="jack-card-content">
          <h1 className="jack-name">Jack Corwin</h1> 
          <p className="jack-role">Jack's Role:</p> 
          <p className="jack-desc">Worked on the frontend including the PDF creation as well as the error handling on the login page of the application. I conducted user interviews and modified some of the existing front end from their feedback. Finally, I created the report and presentation slides</p>
        </div>
        <div className="jack-picture-card">
          <motion.img whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={jackPic} className="jack-img" />
        </div> 
      </div>

      <div className="ben-container">
        <div className="jo-picture-card">
          <motion.img  whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={benPic} className="ben-img" />
        </div> 
        <div className="jo-card-content">
          <h1 className="jo-name">Benjamin Drozek </h1> 
          <p className="jo-role">Ben's Role:</p> 
          <p className="jo-desc">Worked on Frontend and Backend. Worked to integrate test-users feedback. Created and updated group webpage to reflect current stage of project including project description, current stage tasks, team contributions, Jira timeline, demo video and github link.</p>
        </div>
      </div>
    <div className="koy-container">
        <div className="jack-card-content">
          <h1 className="jack-name">Koy Bell</h1> 
          <p className="jack-role">Koy's Role:</p> 
          <p className="jack-desc">Worked on connecting different pages of the frontend as well as the basic frameworks of the QC test selection page, QC builder page, and the QC orders page. Also created the implementation diagram as well as its description in the report and the presentation.</p>
        </div>
        <div className="jack-picture-card">
          <motion.img whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={koyPic} className="koy-img" />
        </div> 
      </div>
      <p className="group-meet">Hello World Meets:</p>
      <div className="group-meeting-days">
            <div className="day-back"><div className="day">S</div></div>
            <div className="day-red"><div className="day">M</div></div>
            <div className="day-back"><div className="day">T</div></div>
            <div className="day-red"><div className="day">W</div></div>
            <div className="day-back"><div className="day">T</div></div>
            <div className="day-red"><div className="day">F</div></div>
            <div className="day-back"><div className="day">S</div></div>
      </div>
      <hr className="line" />
      <p className="group-meet-deets">~ In EC Room 203/204 ~</p>
      <p className="task-head">Stage 4 Tasks:</p>
      <div className="upcoming-tasks">
        <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }} className="task-box"><div className="checkbox"><img src={check} className="check" /></div><div className="task">Complete Stage 3</div></motion.div>
        <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.2  },
          }}
          whileTap={{ scale: 1 }} className="task-box"><div className="checkbox"><img src={check} className="check" /></div><div className="task">Get test users feedback on demo</div></motion.div>
        <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.2  },
          }}
          whileTap={{ scale: 1 }} className="task-box"><div className="checkbox"></div><div className="task">Implement app into main database</div></motion.div>
        <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.2  },
          }}
          whileTap={{ scale: 1 }} className="task-box"><div className="checkbox"><img src={check} className="check" /></div><div className="task">Work more on backend / debugging</div></motion.div>
        <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.2  },
          }}
          whileTap={{ scale: 1 }} className="task-box"><div className="checkbox"><img src={check} className="check" /></div><div className="task">Implement test users feedback</div></motion.div>
      </div>

      <div className="section">
        <p className="git-head">Github Link:</p>
        <a href="https://github.com/bdrozek/Micro_MIS_Capstone" target="_blank" className="git-link">https://github.com/bdrozek/Micro_MIS_Capstone</a>
        
        <p className="demo-head">Demo Video:</p>
        <iframe className= "demo-vid" width="420" height="315"
          src="https://youtube.com/embed/iQ_SKY4lijI">
        </iframe>
      </div>

      <hr className="line-2" />
      <p className="jira-head">Jira Current Updates:</p>
      <div className="jira-sect">
        <img src={jira} className="jira-img" />
      </div>

      <p className="attribution">Background Images by <a className="link" href='https://www.freepik.com/'>Freepik</a></p>
    </div>
    

    </>
  )
}

export default Navbar