// import {Facebook, WhatsApp , Instagram, MailOutline, Phone, Pinterest, Room, Twitter,} from "@material-ui/icons";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
   
    return (
        <div className="footer" >
        <div className="left">
            <a href="" className="logo">
                <img src="/img/logo.png" alt="" width="100" height="100"/>
                <div>
                <div className="logoTitle">Hurghada-Marsa Alam </div>
                <div className="logoTitle" >Excursions </div> 
                </div>
            </a>
          <p className="desc">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>

          <div className="socialContainer" >
          <a href="https://www.facebook.com/egipt.tours" className="social" >
          <img className="socialImg" src="/img/face.png"  alt="" width="30px" height="30px"/>
          </a>
          <a href="https://wa.me/01005721840" target="_blank" rel="noreferrer" className="social">
          <img src="/img/whats.webp"  className="socialImg" alt="" width="30px" height="30px"/>
          </a>
          
          </div>

        </div>
        <div className="center">
          <div className="titleFooter" >Excursion Links</div>
          <div className="listContent">
          <ul className="list" >
            <Link to="/travels" className="link"><li className="listItem">Excursions</li></Link>
            <Link to="/marsaAlam" className="link"><li className="listItem">Marsa Alam Excursions</li></Link>
            <Link to="/hurghada" className="link"><li className="listItem"> Hurghada Excursions</li></Link>
          </ul>
          </div>
        </div>

        <div className="right" >
          <div className="titleFooter" >Contact</div>
          <div className="listContent">
          <ul className="list">
            <li className="contactItem" >
            {/* <Room style={{marginRight:"10px"}}/>  */}
            <img src="/img/address.png" className="icon" alt=""/>
            Ahmed Orabi Street, Cairo, Egypt
            </li>
          <li className="contactItem" >
            {/* <Phone style={{marginRight:"10px"}}/> */}
            <img src="/img/phone.png" className="icon" alt=""/>
             +20 1005721840
            </li>
            <li className="contactItem" >
            {/* <MailOutline style={{marginRight:"10px"}} /> */}
            <img src="/img/email.png" className="icon" alt=""/>
             egypttours@gmail.com
            </li>
            </ul>
          </div>
        </div> 
        </div>
    );
  }
  
  export default Footer;