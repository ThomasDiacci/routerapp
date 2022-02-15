import './App.css';
import React, { createContext, useContext, useReducer } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const StoreContext = createContext();
  const globalStore = props => {
    return <StoreContext.Provider value={{}} />;
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          {/* <Route exact path="/:id" element={<Post/>} /> */}
          {/* <Route exact path="/:id" component={Post}/> */}
          <Route exact path="/:id" render={(props) => <Post globalStore={globalStore} {...props} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;