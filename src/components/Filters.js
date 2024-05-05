import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Chip, MenuItem } from '@mui/material';

const techStackOptions = [
  'Python', 'Java', 'Golang', 'Ruby/Rails', 'C++', 'Kotlin', 'Django', 'C#',
  'Graphql', 'Flask', 'TypeScript', 'AWS', 'Javascript', 'Rust', 'Nodejs', 'React'
];

const locationPref = ['Hybrid', 'On-Site', 'Remote'];

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    minExperience: '', // Updated: Changed to string
    companyName: '',
    remote: [],
    techStack: [],
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
      <Autocomplete
        options={[...Array.from({ length: 10 }, (_, i) => (i + 1).toString())]}
        value={filters.minExperience}
        onChange={(e) => handleFilterChange('minExperience', e.target.value)}
        renderInput={(params) => (
          <TextField {...params} label="Min Experience" style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }} />
        )}
      />
      <TextField
        label="Company Name"
        value={filters.companyName}
        onChange={(e) => handleFilterChange('companyName', e.target.value)}
        style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }}
      />
      <Autocomplete
        multiple
        options={locationPref}
        value={filters.remote}
        onChange={(event, value) => handleFilterChange('remote', value)} 
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Remote" style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }} />
        )}
      />
      <Autocomplete
        multiple
        options={techStackOptions}
        value={filters.techStack}
        onChange={(event, value) => handleFilterChange('techStack', value)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Tech Stack" style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }} />
        )}
      />
      <TextField
        label="Role"
        value={filters.role}
        onChange={(e) => handleFilterChange('role', e.target.value)}
        style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }}
      />
      <TextField
        label="Min Base Pay"
        value={filters.minBasePay}
        onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
        style={{ width: 'auto', fontSize: '16px', fontFamily: 'Lexend' }}
      />
    </div>
  );
};

export default Filters;
