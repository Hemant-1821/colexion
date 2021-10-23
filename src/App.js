import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import BlogDetail from "./Components/Blog/BlogDetail";
import PackDetails from "./Components/PackDetails";
import Faq from './Components/FAQ/faq';
import Contactus from "./Components/Contactus/Contactus";
import Aboutus from "./Components/Aboutus/Aboutus";


const App = () => {
  const [switcher, setSwitcher] = useState(true);
  const darkColorSwitcher = (e) => {
    e.preventDefault();
    setSwitcher(!switcher)
    console.log(switcher)
    localStorage.setItem('theme', 'white');
}
// const whiteColorSwitcher = (e) => {
//     e.preventDefault();
//     setSwitcher(!switcher)
//     console.log(switcher)
//     localStorage.setItem('theme', 'dark');
// }
  return (
    <Router>
      <div className="app">
        <Nav click={darkColorSwitcher}/>
        <Switch>
          <Route path="/" exact><Home theme={switcher}/></Route>
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog-detail" exact component={BlogDetail} />
          <Route path="/details/:id" exact component={PackDetails} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/contactus" exact component={Contactus} />
          <Route path="/aboutus" exact component={Aboutus} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
