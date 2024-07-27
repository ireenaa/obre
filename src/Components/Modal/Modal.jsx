import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave, job, jobTypes, statuses, engineers }) => {
  const [formData, setFormData] = useState({
    id: '',
    type: jobTypes[0],
    status: statuses[0],
    description: '',
    assignedEngineer: engineers[0]
  });

  useEffect(() => {
    if (job) {
      
      setFormData(job);
      console.log('Updating form data for job:', job);
    } else {
      
      setFormData({
        id: '',
        type: jobTypes[0],
        status: statuses[0],
        description: '',
        assignedEngineer: engineers[0]
      });
      console.log('Resetting form data');
    }
  }, [job, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('Form data updated:', { ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>X</button>
        <h2>{job ? 'Edit Job Request' : 'Add Job Request'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Job Type:
            <select name='type' value={formData.type} onChange={handleChange} required>
              {jobTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Status:
            <select name='status' value={formData.status} onChange={handleChange} required>
              {statuses.map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>
          </label>
          <label>
            Description:
            <textarea name='description' value={formData.description} onChange={handleChange} required />
          </label>
          <label>
            Assigned Engineer:
            <select name='assignedEngineer' value={formData.assignedEngineer} onChange={handleChange} required>
              {engineers.map((engineer, index) => (
                <option key={index} value={engineer}>{engineer}</option>
              ))}
            </select>
          </label>
          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
