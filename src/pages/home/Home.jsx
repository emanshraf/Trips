import Main from "../../components/main/Main";
 import Travels from "../../components/travels/Travels";
 import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import PopularTrips from "../../components/popularTrips/PopularTrips";
import Most from "../../components/most/Most";
 import About from "../../components/about/About";

import "./home.css";

function Home() {
   
    return (
      <div>
      <Main/>
       <About/>
       <Travels/>
       {/* < PopularTrips/> */}
       <Most/>
       <Footer/>
       <Copyright/>
     </div>
     
      
    );
  }
  
  export default Home;