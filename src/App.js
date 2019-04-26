import React, { Component }  from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Routes from './components/Routes';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );

  }

}

export default App;