import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/home';
import OurStory from './pages/ourstory';
import Services from './pages/services';
import OurTeam from './pages/ourteam';
import ContactUs from './pages/contactus';
import Careers from './pages/careers';
import Shop from './pages/shop';

import PhotographsWorks from './pages/photographs';
import ApparelsWorks from './pages/apparels';
import Testimonials from './pages/testimonials';

import Header from './components/header';
import Footer from './components/footer';
import logo from './assets/main_logo.png';


function App() {
  const {location} = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  });

  const [data, setData] = useState([]);
  const  BASE_URL = 'http://localhost/nivah_api/testinomials/read.php';

  useEffect(()=>{
      fetch(BASE_URL, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.code === 1) {
              setData(data.records);
          }
          const splash = document.querySelector(".splash");
          setTimeout(()=>{
              splash.classList.add("close");
          }, 2000);
          setTimeout(()=>{
              splash.style.display = "none";
          }, 2250);
      }).catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      <div className="splash">
        <img src={logo} alt="logo" width="80px"/>
        <p>LOADING</p>
      </div>
      <Header/>
      {transitions.map(({item, props, key})=>(
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" render={() => <Home data={data} />}></Route>
            <Route exact path="/photographsworks" component={PhotographsWorks}></Route>
            <Route exact path="/apparelsworks" component={ApparelsWorks}></Route>
            <Route exact path="/ourstory" component={OurStory}></Route>
            <Route exact path="/testimonials" component={Testimonials}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contactus" component={ContactUs}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/ourteam" component={OurTeam}></Route>
            <Route exact path="/careers" component={Careers}></Route>
          </Switch>
        </animated.div>
      ))}
      <Footer/>
      <div className="bg">
        <div className="bg-layer"></div>
      </div>
    </div>
  );
}

export default App;
