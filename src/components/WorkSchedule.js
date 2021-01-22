import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import WhiteBox from "./WhiteBox";

const WorkSchedule = props => {
  const title = "WORK SCHEDULE";

  const jobs_back = props.jobs_back;
  const setJobs = props.setJobs;
  const setJobsFiltered = props.setJobsFiltered;

  const [workschedule, setWorkschedule] = useState([]);

  const jobFilterByWorkSchedule = workschedule => {
    let jobsfilter = [];
    let jobs_count_new = 0;

    for (let j of jobs_back) {
      let jobsfilter_items = [];
      for (let item of j.items) {
        if (item.work_schedule.includes(workschedule)) {
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
    setJobsFiltered(jobsfilter);
    setJobs(jobsfilter, jobs_back, jobs_count_new);
  };

  const getWorkSchedule = () => {
    const url = `/api/works`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setWorkschedule(data);
      });
  };

  useEffect(getWorkSchedule, []);

  return (
    <WhiteBox
      title={title}
      list={workschedule}
      modaldata={[]}
      action={jobFilterByWorkSchedule}
    />
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
  },
  setJobsFiltered(jobs_filtered_back) {
    dispatch({
      type: "SET_JOBS_FILTERED",
      jobs_filtered_back: jobs_filtered_back
    });
  }
});

export default connect(mS, mD)(WorkSchedule);
