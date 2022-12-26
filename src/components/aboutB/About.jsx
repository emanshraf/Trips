import "./about.scss";
import { Link } from "react-router-dom";
function AboutB() {
   
    return (
      <div>
      <div className="about-contanier">
        <div className="about-img">
           <img className="about-image" src="img/img34.jpg" alt="" width="500px" height="500px"/>
        </div>
        <div className="about-content">
            <h1 className="about-title">Explore all corners of Egypt with us</h1>
            <p className="about-desc">
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                a large language ocean.
                </p>
                <p className="about-desc">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, 
                in which roasted parts of sentences fly into your mouth.
                 </p>
  
            <Link to="/contact">
              <button className="about-btn">Book Now</button>
              </Link>

        </div>
      
     </div>


</div>
      
    );
  }
  
  export default AboutB;