import React from "react";
import { connect } from "react-redux";

const SearchBox = props => {
  const jobs_back = props.jobs_back;
  const setJobs = props.setJobs;

  const handleSearch = word => {
    word = word.toLowerCase();
    let jobsfilter = [];
    let jobs_count_new = 0;

    for (let j of jobs_back) {
      let jobsfilter_items = [];
      for (let item of j.items) {
        if (
          item.job_title.toLowerCase().indexOf(word) !== -1 ||
          item.description.toLowerCase().indexOf(word) !== -1 ||
          item.name.toLowerCase().indexOf(word) !== -1
        ) {
          jobsfilter_items.push(item);
          jobs_count_new = jobs_count_new + 1;
        }
      }
      if (jobsfilter_items.length > 0) {
        jobsfilter.push({
          total_jobs_in_hospital: jobsfilter_items.length,
          name: j.name,
          job_title: j.job_title,
          items: jobsfilter_items
        });
      }
    }

    setJobs(jobsfilter, jobs_back, jobs_count_new);
  };

  return (
    <div className="inputSearchContainer">
      <input
        type="search"
        id="searchBox"
        className="inputSearch"
        placeholder="Search for any job, title, keywords or company"
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
};

const mS = state => ({
  jobs: state.mainReducer.jobs,
  jobs_back: state.mainReducer.jobs_back,
  jobs_count: state.mainReducer.jobs_count
});

const mD = dispatch => ({
  setJobs(jobs, jobs_back, jobs_count) {
    dispatch({
      type: "SET_JOBS_DATA",
      jobs: jobs,
      jobs_back: jobs_back,
      jobs_count: jobs_count
    });
  }
});

export default connect(mS, mD)(SearchBox);
