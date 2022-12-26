import "./most.scss";
import {popularTrips} from "../../data";
import { Link } from "react-router-dom";

export default function Most() {
  
  return (
<div >
    <div className="popular-title">Popular Trips</div>
<div className="cards">  
               {popularTrips.map((item)=>(
      <div className="destination-item ">
         <img className="img-fluid" src={item.img} alt=""/>
         <Link className="destination-overlay " to={item.Link}>
             <h5 className="text">{item.title}</h5>
                            <span>{item.price}</span>
        </Link>
        
                    </div>
                    ))}
                    
                </div>
</div>
  )}