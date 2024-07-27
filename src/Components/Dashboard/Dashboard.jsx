import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      
      <div className='main-content'>
        
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
