import React, { useEffect } from "react";
import { connect } from "react-redux";
import JobGroup from "./JobGroup";
import SortMenu from "./SortMenu";

const Content = props => {
  const jobs = props.jobs;
  const jobs_count = props.jobs_count;
  const setJobs = props.setJobs;

  const getAllJobs = () => {
    const url = `/api/jobs`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const jobscount = data.reduce(
          (acc, el) => acc + el.total_jobs_in_hospital,
          0
        );
        setJobs(data, jobscount);
      })
      .catch(err => {
        console.log("error->", err);
      });
  };

  const openCloseJobContent = id => {
    if (document.getElementById(id).style.display !== "block") {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
  };

  useEffect(getAllJobs, [])
  return (
    <div className="contentBox">
      <div className="row contentHeader">
        <div className="col-sm-3">
          <span className="spanBold">{jobs_count}</span> job postings
        </div>
        <div className="col-sm-9 show-on-desktop">
          <SortMenu />
        </div>
      </div>
      <div className="contentBody">
        {jobs.map((job, index) => (
          <div key={index} className="contentGroupResult">
            <div
              className="row contentTitleContainer"
              onClick={() => openCloseJobContent("jobs_".concat(index))}
            >
              <div className="contentAcronym">
                {job.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="contentTitle">
                {job.total_jobs_in_hospital} jobs for {job.name}
              </div>
            </div>
            <JobGroup jobitems={job.items} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mS = state => ({
  jobs: state.mainReducer.jobs,
  jobs_count: state.mainReducer.jobs_count
});

const mD = dispatch => ({
  setJobs(jobs, jobs_count) {
    dispatch({
      type: "SET_JOBS_DATA",
      jobs: jobs,
      jobs_back: jobs,
      jobs_count: jobs_count
    });
  }
});

export default connect(mS, mD)(Content);
