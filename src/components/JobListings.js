// JobListings.js
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit,
        offset,
      });

      setJobs(response.data.jdList);
      setHasMore(response.data.totalCount > offset + limit);
    };

    fetchData();
  }, [limit, offset]);

  const fetchMoreData = () => {
    setOffset(offset + limit);
  };

  return (
    <div>
0      <InfiniteScroll
        dataLength={jobs?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {jobs?.map((job, index) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default JobListings;