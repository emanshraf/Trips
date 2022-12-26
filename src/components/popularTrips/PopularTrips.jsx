import "./popularTrips.scss";
import {popularTrips} from "../../data";
import { Link } from "react-router-dom";
function PopularTrips() {
    return (

   <div className="popularTrips">
    <div className="popular-title">Popular Trips</div>

    <div className="cards">
      {popularTrips.map((item)=>(
      <div className="card" key={item.id}>
        <div className="card-body">
        <img 
          src={item.img}
          alt=""
          className="card-img"
        />
        
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <div  className="card-desc">{item.desc}</div>
          </div>
           <Link to={item.link} className="card-link">
          <button className="card-btn">Read more</button>
           </Link>
      </div>
      </div>
      ))}
    </div>


   </div>

    )}
 export default PopularTrips;