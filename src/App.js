import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import BlogDetail from "./Components/Blog/BlogDetail";
import PackDetails from "./Components/PackDetails";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog-detail" exact component={BlogDetail} />
          <Route path="/details/:id" exact component={PackDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
