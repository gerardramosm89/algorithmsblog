import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// Components
import Home from './Home';
import Admin from './Admin';

const Navbar = () => (
  <Router>
    <div>
      <div className="navbar__wrapper">
        <ul>
          <li className="brand">
            <Link to="/">algorithmsblog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
        <Route render={() => <h1>Domain not found</h1>} />
      </Switch>
    </div>
  </Router>
)



export default Navbar;