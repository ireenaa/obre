import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import '../Jobs/Jobs.css'

const statuses = ['pending', 'completed'];
const engineers = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily Davis'];
const jobTypes = ['Repair', 'Installation', 'Maintenance', 'Inspection'];

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const handleAddRequest = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const handleSave = (job) => {
    if (editingJob) {
      dispatch({ type: 'UPDATE_JOB', payload: job });
    } else {
      const newJob = { ...job, id: jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1 };
      dispatch({ type: 'ADD_JOB', payload: newJob });
    }
    setIsModalOpen(false);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = (jobId) => {
    dispatch({ type: 'DELETE_JOB', payload: jobId });
  };

  return (
    <div className='requests-content'>
      <button className='add-request' onClick={handleAddRequest}>Add Request</button>
      <div className='jobs-list'>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job.id} className='job-card'>
              <div className='job-info'>
                <p className='job-id'><strong>ID:</strong> {job.id}</p>
                <p className='job-type'>{job.type}</p>
                <p className='job-engineer'>{job.assignedEngineer}</p>
                <p className={`job-status ${job.status}`}>{job.status}</p>
                <p className='job-description'>{job.description}</p>
              </div>
              <div className='job-actions'>
                <button onClick={() => handleEdit(job)}>Edit</button>
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        job={editingJob}
        jobTypes={jobTypes}
        statuses={statuses}
        engineers={engineers}
      />
    </div>
  );
};

export default Jobs;
