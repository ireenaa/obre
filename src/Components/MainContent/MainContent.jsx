import React, { useState, useEffect } from 'react';
import './MainContent.css';
import totalJobsImg from './total.png';
import totalPendingImg from './pending.png';
import totalCompletedImg from './completed.png';

const MainContent = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
      setJobs(savedJobs);
    } catch (error) {
      console.error('Error loading jobs from localStorage:', error);
    }
  }, []);

  const totalJobs = jobs.length;
  const pendingJobs = jobs.filter(job => job.status === 'pending').length;
  const completedJobs = jobs.filter(job => job.status === 'completed').length;

  return (
    <div className='stats'>
      <div className='stat'>
        <div>
          <h3>Total Jobs</h3>
          <p>{totalJobs}</p>
        </div>
        <img src={totalJobsImg} alt="Total Jobs" />
      </div>
      <div className='stat'>
        <div>
          <h3>Total Pending</h3>
          <p>{pendingJobs}</p>
        </div>
        <img src={totalPendingImg} alt="Total Pending" />
      </div>
      <div className='stat'>
        <div>
          <h3>Total Completed</h3>
          <p>{completedJobs}</p>
        </div>
        <img src={totalCompletedImg} alt="Total Completed" />
      </div>
    </div>
  );
};

export default MainContent;
