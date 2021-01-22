import React, { useMemo, useState } from 'react';

export default function JobListing(props) {
  const totalJobPostings = useMemo(() => props.jobs.reduce((acc, cv) => cv.total_jobs_in_hospital + acc, 0), [props.jobs])
  const getOrderMap = (o) => ({ 'asc': 'desc', 'desc': 'asc' })[o] || 'asc';

  return (
    <div>
      <div className="flex flex-wrap">
        <div>{totalJobPostings} job postings</div>
        <div className="flex flex-wrap">
          <div>Sort By</div>
          <div onClick={(e) => props.onSort(e,getOrderMap(props.sortObject.order))}>Location</div>
          <div onClick={(e) => props.onSort(e,getOrderMap(props.sortObject.order))}>Role</div>
          <div onClick={(e) => props.onSort(e,getOrderMap(props.sortObject.order))}>Department</div>
          <div onClick={(e) => props.onSort(e,getOrderMap(props.sortObject.order))}>Education</div>
          <div onClick={(e) => props.onSort(e,getOrderMap(props.sortObject.order))}>Experience</div>
        </div>
      </div>
      {props.jobs.map((job, index) => <div key={index}>{job.total_jobs_in_hospital} jobs for {job.name}</div>)}
    </div>
  );
} 