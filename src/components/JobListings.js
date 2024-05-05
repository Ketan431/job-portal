import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './JobCard';
import Filters from './Filters';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: '',
  });

  useEffect(() => {
    fetchData();
    filterData(filters)
  }, [limit, offset,filters]);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit,
        offset,
      });
  
      let filteredJobs = response.data.jdList;
  
      setJobs(filteredJobs);
      setHasMore(false); // Since we're filtering locally, no need for hasMore
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = (filters) =>{
    // Apply filters locally
    if (filters.minExperience !== '') {
       setJobs(jobs.filter(job => job.experience >= parseInt(filters.minExperience)));
    }
    if (filters.companyName !== '') {
      setJobs(jobs.filter(job => job.companyName === filters.companyName));
    }
    if (filters.location !== '') {
      setJobs(jobs.filter(job => job.location === filters.location));
    }
    if (filters.remote !== '') {
      setJobs(jobs.filter(job => job.remote === filters.remote));
    }
    if (filters.techStack !== '') {
      setJobs(jobs.filter(job => job.techStack.includes(filters.techStack)));
    }
    if (filters.role !== '') {
      setJobs(jobs.filter(job => job.role === filters.role));
    }
    if (filters.minBasePay !== '') {
      setJobs(jobs.filter(job => job.basePay >= parseInt(filters.minBasePay)));
    }
  }
  

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Filter data
    // filterData(newFilters)
    // Reset offset to 0 when filters change
    setOffset(0);
  };

  const fetchMoreData = () => {
    setOffset(offset + limit);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Filters onFilterChange={handleFilterChange} />
      <InfiniteScroll
        dataLength={jobs?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={null}
        endMessage={<p style={{ textAlign: 'center', display: hasMore ? 'block' : 'none' }}>Yay! You have seen it all</p>}
        scrollThreshold={0.9}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {jobs?.map((job, index) => (
            <div key={job.id} style={{ width: '30%' }}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default JobListings;
