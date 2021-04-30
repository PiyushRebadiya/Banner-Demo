import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Banner from "./component/Banner";
import Desktop from "./component/Desktop";
import BannerData from './component/BannerData';

function App() {
  return (
    <Router>
      <div>
      
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1 id="logo"><Link to="/desktop" className="none">www.Banner.com</Link></h1>
              </div>
              <div className="col-md-8">
                <ul id="menu" className="float-md-right">
                  <li><Link to="/desktop">Desktop</Link></li>
                  <li><Link to="/banner">Add</Link></li>
                  <li><Link to="/data">Banner's</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/desktop">
            <Desktop />
          </Route>
          <Route path="/banner">
            <Banner />
          </Route>
          <Route path="/data">
            <BannerData />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
