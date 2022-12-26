import "./about.scss";
function About() {
   
    return (
      <div className="about">
      <div className="desc">
        <h1>Explore all corners of Egypt with us</h1>
        <p className="det">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, 
            there live the blind texts. 
            Separated they live in Bookmarksgrove right at the coast of the Semantics, 
            a large language ocean.
            </p>
        <p className="det">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, 
            in which roasted parts of sentences fly into your mouth.</p>
        
      </div>
      <div className="img img1">
        <img src="/img/img10.jpg" alt="" width="300px" height="400px"/>

      </div>
      <div className="img img2">
      <img src="/img/img12.jpg" alt="" width="300px" height="400px"/>
      </div>
     
      </div>
    );
  }
  
  export default About;