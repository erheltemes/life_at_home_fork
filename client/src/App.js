import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { LoginStatusProvider } from './Context/LoginStatusContext';
import { EditStatusProvider } from './Context/EditContext';
import { SiteProvider } from './Context/SiteContext';
import { BlogProvider } from './Context/BlogContext';
import { ServicesProvider } from './Context/ServicesContext';
import { FeaturedProvider } from './Context/FeaturedContext';

import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Manager from './pages/Manager'

function App() {
  return (
    <LoginStatusProvider>
      <EditStatusProvider>
        <SiteProvider>
          <BlogProvider>
            <ServicesProvider>
              <FeaturedProvider>
                <Router>
                  <Header />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/blog/:index" component={BlogPost} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/manager" component={Manager} />
                  <Footer />
                </Router>
              </FeaturedProvider>
            </ServicesProvider>
          </BlogProvider>
        </SiteProvider>
      </EditStatusProvider>
    </LoginStatusProvider>
  );
}

export default App;

