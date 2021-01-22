import React, { useEffect, useState } from 'react';
import Api from '../utils/request';
import Header from '../components/Header';
import SearchInput from '../components/Search';
import JobFilter from '../components/JobFilter';
import JobListing from '../components/JobListing';
import Footer from '../components/Footer';

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchValue, setSearch] = useState('');
  const [sortObject, setSort] = useState({ name: '', order: '' });

  useEffect(() => {
    getJobFiltersFromApi();
  }, []);

  useEffect(() => {
    getJobListingsFromApi();
  }, [searchValue, sortObject])

  const getJobListingsFromApi = async () => {
    const { name, order } = sortObject;
    const { jobs } = await Api.get(`/api/jobs?sort=${name}&sortOrder=${order}&search=${searchValue}`);
    setJobs(jobs);
  }
  
  const getJobFiltersFromApi = async () => {
    const filters = await Api.get('/api/filters');
    setFilters(filters);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const handleSort = (e, order) => {
    setSort({ name: e.target.innerHTML.toLowerCase(), order });
  }
  
  return (
    <>
      <Header />
      <div className="px-5">
        <SearchInput onSearch={handleSearch} searchValue={searchValue} />
        <div className="flex flex-wrap">
          <JobFilter filters={filters} />
          <JobListing jobs={jobs} onSort={handleSort} sortObject={sortObject} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
