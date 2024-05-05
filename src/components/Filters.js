import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Chip } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: false,
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
      <TextField
        label="Min Experience"
        value={filters.minExperience}
        onChange={(e) => handleFilterChange('minExperience', e.target.value)}
      />
      <Autocomplete
        multiple
        freeSolo
        options={["Java", "Python", "JavaScript"]} // Sample tech stack options
        value={filters.techStack}
        onChange={(e, value) => handleFilterChange('techStack', value)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Tech Stack" />
        )}
      />
      {/* Similarly, use Autocomplete for other dropdowns */}
      <TextField
        label="Min Base Pay"
        value={filters.minBasePay}
        onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
      />
    </div>
  );
};

export default Filters;
