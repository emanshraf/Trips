import "./marsaAlam.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";
import {marsaAlamTrips} from "../../data";
function MarsaAlam() {
    return (
      <div>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Marsa Alam Excursions</h3>
       </div>

      
       <div className="travels" >
      <h3 className="marsaTitle">Marsa Alam Excursions</h3>

      <div className="travelsDesc">
    <div className="travelDesc">
      <h4 className="travelsTitle">ABOUT MARSA ALAM</h4>
      <p className="travelp">
      Marsa Alam - once a small fishing village, now one of the most popular regions for holidays in Egypt. The Marsa Alam region is famous for the most beautiful sandy beaches in Egypt and for its wonderful underwater world and dolphins. Holidays in Marsa Alam is also a modern hotel base with a full list of amenities for even the most demanding guests. It is one of the quieter places on the Red Sea Riviera. The region is still considered an oasis of peace for families with children.
      </p>
    </div>
    </div>
      
      <div className="marsalist">
      {marsaAlamTrips.map((item)=>(
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
  
  export default MarsaAlam;