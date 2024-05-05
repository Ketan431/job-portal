import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem } from '@mui/material';

const Filters = ({onFilterChange}) => {
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TextField
        label="Min Experience"
        value={filters.minExperience}
        onChange={(e) => handleFilterChange('minExperience', e.target.value)}
      />
      <Select
        label="Company Name"
        value={filters.companyName}
        onChange={(e) => handleFilterChange('companyName', e.target.value)}
      >
        <MenuItem value="IBM">IBM</MenuItem>
        <MenuItem value="Google">Google</MenuItem>
        <MenuItem value="Microsoft">Microsoft</MenuItem>
      </Select>
      <Select
        label="Location"
        value={filters.location}
        onChange={(e) => handleFilterChange('location', e.target.value)}
      >
        <MenuItem value="New York">New York</MenuItem>
        <MenuItem value="San Francisco">San Francisco</MenuItem>
        <MenuItem value="Seattle">Seattle</MenuItem>
      </Select>
      <Select
        label="Remote/On-Site"
        value={filters.remote}
        onChange={(e) => handleFilterChange('remote', e.target.value)}
      >
        <MenuItem value={'remote'}>Remote</MenuItem>
        <MenuItem value={'on-site'}>On-Site</MenuItem>
      </Select>
      <Select
        label="Tech Stack"
        value={filters.techStack}
        onChange={(e) => handleFilterChange('techStack', e.target.value)}
      >
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
      </Select>
      <Select
        label="Role"
        value={filters.role}
        onChange={(e) => handleFilterChange('role', e.target.value)}
      >
        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
        <MenuItem value="Product Manager">Product Manager</MenuItem>
        <MenuItem value="Data Scientist">Data Scientist</MenuItem>
      </Select>
      <TextField
        label="Min Base Pay"
        value={filters.minBasePay}
        onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
      />
    </div>
  );
};

export default Filters;
