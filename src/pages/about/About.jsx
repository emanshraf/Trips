import "./about.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import AboutB from "../../components/aboutB/About";

function About() {
    return (
      <div>
      
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">About Us</h3>
       </div>
        <AboutB/>
       <Footer/>
       <Copyright/>
      </div>
     
    );
  }
  
  export default About;