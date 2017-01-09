import React, { Component } from 'react';


import Navigation from './Navigation';
import Home from './Home';
import Popular from './Popular';
import NearBy from './NearBy';
import Services from './Services';
import Contact from './Contact';
import About from './About';

class App extends Component {

  render() {
    return (
      <div>
      <Navigation />
      <section id="Home" className=" description_content">
            <a name="#top"></a>
            <Home />
      </section>


      <section id="About" className=" description_content">
          
            <About />
      </section>


      <section id ="popular" className="description_content">
               <div className="pricing background_content">
                  <h1><span>Popular</span> Restaurants</h1>
               </div>
               <Popular />
      </section>


      <section id="Services" className=" description_content">
                <a  name="services"></a>
                <div  className="bread background_content">
                    <h1>Our <span>Services</span></h1>
                </div>
               <Services />
      </section>


          <section id="contact" className="description_content">
              <div  className="featured background_content">
                  <h2> Contact Us <span>  hungerfeed.atak@gmail.com</span></h2>
              </div>
              <Contact />
          </section>
    	</div>
    );
  }
}


export default App;
