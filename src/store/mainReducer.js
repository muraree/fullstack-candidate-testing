const initialState = {
  jobs: [],
  jobs_back: [],
  jobs_filtered_back: [],
  jobs_count: 0,
  jobs_saved_count: 2
};

const MainReducer = (state = initialState, action) => {
  if (action.type === "SET_JOBS_DATA") {
    return {
      ...state,
      jobs: action.jobs,
      jobs_back: action.jobs_back,
      jobs_count: action.jobs_count
    };
  }

  if (action.type === "SET_JOBS_SAVED") {
    return {
      ...state,
      jobs_saved_count: action.jobs_saved_count
    };
  }

  if (action.type === "SET_JOBS_FILTERED") {
    return {
      ...state,
      jobs_filtered_back: action.jobs_filtered_back
    };
  }

  return state;
};

export default MainReducer;
