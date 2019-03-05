import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Router>
        <nav>
          <Link to="/" style={{marginRight:'20px'}}>Home</Link>
          <Link to="/new">New</Link>         
        </nav>
      </Router>
    </header>     
  )
}
