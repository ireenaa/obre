import { createStore } from 'redux';

const initialState = {
  jobs: JSON.parse(localStorage.getItem('jobs')) || [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'ADD_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'UPDATE_JOB':
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    case 'DELETE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(jobsReducer);

store.subscribe(() => {
  localStorage.setItem('jobs', JSON.stringify(store.getState().jobs));
});

export default store;
