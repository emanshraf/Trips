import "./hurghada.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";
import {HurghadaTrips} from "../../data";

function Hurghada() {
    return (
      <div>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Hurghada Excursions</h3>
       </div>

      
       <div className="travels" >
      <h3 className="marsaTitle" >Hurghada  Excursions</h3>

      <div className="travelsDesc">
      <div className="travelDesc">
      <h4 className="travelsTitle">ABOUT HURGHADA</h4>
      <p className="travelp">
      Hurghada over 30 years has transformed from a small fishing village of several hundred inhabitants into one of the most famous tourist destinations in North Africa.
       The resort is located on the Red Sea, on the western shore of the Gulf of Suez, about 500 km from the capital of Egypt - Cairo. It achieved fame thanks to its wonderful location on the crystal-clear Red Sea, abounding in picturesque coral reefs, which are the main advantage of Hurghada. In addition, the proximity of the endless desert, picturesque mountain range, quiet and peaceful surroundings, sandy beaches - all this attracts tourists who want to relax.
      </p>
    </div>
    </div>
      
    <div className="marsalist">
      {HurghadaTrips.map((item)=>(
        <Link to={item.link} className="marsaLink">
      <div className="marsalistItem" key={item.id}>
        <div className="image">
        <img 
          src={item.img}
          alt=""
          className="marsaImg"
        />
        </div>
        <div className="marsatitle">
          <h3 className="marTitle">{item.title}</h3>
        </div>
      </div>
        </Link>
      ))}
        
    </div>
    </div>
    
       <Footer/>
       <Copyright/>
      </div>
    );
  }
  
  export default Hurghada;