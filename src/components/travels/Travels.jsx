import "./travels.scss";
import { Link} from "react-router-dom";

export default function Travels() {
  
  return (
    <div className="travels" >
      <h1 >Excursions</h1>
      
      <div className="pList">
      
      <Link to="/marsaAlam" className="linkTravels" >
      <div className="pListItem">
        <img
          src="/img/img8.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1 >Marsa Alam </h1>
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
   );
}