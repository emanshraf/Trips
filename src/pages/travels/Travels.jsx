import "./travels.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

function Travels() {
    return (
      <div>
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Excursions</h3>
       </div>

      
       <div className="travels" >
      <h1>Excursions</h1>
      
      <div className="pList1">

        <Link className="linkTravels" to="/marsaAlam">
      <div className="pListItem">
        <div className="image">
        <img 
          src="/img/img8.jpeg"
          alt=""
          className="pListImg"
        />
        </div>
        <div className="pListTitles">
          <h1>Marsa Alam </h1>
        </div>
      </div>
      
        </Link>
        
        <Link to="/hurghada" className="linkTravels">
      <div className="pListItem">
        <img
          src="/img/img18.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hurghada </h1>
        </div>
      </div>
        </Link>
        
    </div>
    </div>

<div className="travelsDesc">
    <div className="travelDesc">
      <h4 className="travelsTitle">ABOUT MARSA ALAM</h4>
      <p className="travelp">
      Marsa Alam - once a small fishing village, now one of the most popular regions for holidays in Egypt. The Marsa Alam region is famous for the most beautiful sandy beaches in Egypt and for its wonderful underwater world and dolphins. Holidays in Marsa Alam is also a modern hotel base with a full list of amenities for even the most demanding guests. It is one of the quieter places on the Red Sea Riviera. The region is still considered an oasis of peace for families with children.
      </p>
    </div>

    <div className="travelDesc">
      <h4 className="travelsTitle">ABOUT HURGHADA</h4>
      <p className="travelp">
      Hurghada over 30 years has transformed from a small fishing village of several hundred inhabitants into one of the most famous tourist destinations in North Africa.
       The resort is located on the Red Sea, on the western shore of the Gulf of Suez, about 500 km from the capital of Egypt - Cairo. It achieved fame thanks to its wonderful location on the crystal-clear Red Sea, abounding in picturesque coral reefs, which are the main advantage of Hurghada. In addition, the proximity of the endless desert, picturesque mountain range, quiet and peaceful surroundings, sandy beaches - all this attracts tourists who want to relax.
      </p>
    </div>

    </div>
      
       <Footer/>
       <Copyright/>
      </div>
    );
  }
  
  export default Travels;