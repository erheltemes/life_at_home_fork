import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <Router>
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
          <Footer />
      </Router>
  );
}

export default App;

