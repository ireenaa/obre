import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Jobs from './Components/Jobs/Jobs';



function Layout({ children }) {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route 
          path="/project-request" 
          element={
            <Layout>
              <Jobs />
            </Layout>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
