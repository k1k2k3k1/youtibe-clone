import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
// import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='app_page' style={{"display": "flex"}}>
          <Sidebar />
          <RecommendedVideos/>
        </div>
        
        {/* <div className='app_page'>
            <Routes>
              <Route path='/search/:searchTerm' element={<Sidebar />} />
            </Routes>
        </div> */}
        
      
    </div>
  );
}

export default App;
