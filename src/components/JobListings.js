import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './JobCard';
import Filters from './Filters';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]); // State to hold the original array of jobs
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchData();
  }, [limit, offset]);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit,
        offset,
      });
  
      const newJobs = response.data.jdList;
  
      setJobs(newJobs);
      if (offset === 0) {
        setOriginalJobs(newJobs); // Save the original array of jobs only when offset is 0
      }
      setHasMore(true); // Since we're filtering locally, no need for hasMore
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    // Check if all filters are empty
    const allFiltersEmpty = Object.values(newFilters).every(filter=>filter.length===0);

    if (allFiltersEmpty) {
      // If all filters are empty, restore the original jobs
      setJobs(originalJobs);
    } else {
      // Apply filters locally
      let filteredJobs = [...originalJobs]; // Use originalJobs instead of jobs

      if (newFilters.minExperience !== '') {
        filteredJobs = filteredJobs.filter(job => job.experience >= parseInt(newFilters.minExperience));
      }
      if (newFilters.companyName !== '') {
        filteredJobs = filteredJobs.filter(job => job.companyName === newFilters.companyName);
      }
      if (newFilters.length !== 0) {
        filteredJobs = filteredJobs.filter(job => job.location === newFilters.remote.filter(item => item.toLowerCase() === job.location));
      }
      if (newFilters.techStack.length !== 0) {
        filteredJobs = filteredJobs.filter(job => job.jobDetailsFromCompany.includes(newFilters.techStack[0]));
      }
      if (newFilters.role !== '') {
        filteredJobs = filteredJobs.filter(job => job.role === newFilters.role);
      }
      if (newFilters.minBasePay !== '') {
        filteredJobs = filteredJobs.filter(job => job.basePay >= parseInt(newFilters.minBasePay));
      }

      setJobs(filteredJobs);
    }

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
