// Filters.js
import React, { useState } from 'react';
import { TextField, Select, MenuItem } from '@mui/material';

const Filters = () => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilterChange = (filterName, value) => {
    switch (filterName) {
      case 'minExperience':
        setMinExperience(value);
        break;
      case 'companyName':
        setCompanyName(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'remote':
        setRemote(value);
        break;
      case 'techStack':
        setTechStack(value);
        break;
      case 'role':
        setRole(value);
        break;
      case 'minBasePay':
        setMinBasePay(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <TextField
        label="Min Experience"
        value={minExperience}
        onChange={(e) => handleFilterChange('minExperience', e.target.value)}
      />
      <Select
        label="Company Name"
        value={companyName}
        onChange={(e) => handleFilterChange(' companyName', e.target.value)}
      >
        <MenuItem value="IBM">IBM</MenuItem>
        <MenuItem value="Google">Google</MenuItem>
        <MenuItem value="Microsoft">Microsoft</MenuItem>
      </Select>
      <Select
        label="Location"
        value={location}
        onChange={(e) => handleFilterChange('location', e.target.value)}
      >
        <MenuItem value="New York">New York</MenuItem>
        <MenuItem value="San Francisco">San Francisco</MenuItem>
        <MenuItem value="Seattle">Seattle</MenuItem>
      </Select>
      <Select
        label="Remote/On-Site"
        value={remote}
        onChange={(e) => handleFilterChange('remote', e.target.value)}
      >
        <MenuItem value={true}>Remote</MenuItem>
        <MenuItem value={false}>On-Site</MenuItem>
      </Select>
      <Select
        label="Tech Stack"
        value={techStack}
        onChange={(e) => handleFilterChange('techStack', e.target.value)}
      >
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
      </Select>
      <Select
        label="Role"
        value={role}
        onChange={(e) => handleFilterChange('role', e.target.value)}
      >
        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
        <MenuItem value="Product Manager">Product Manager</MenuItem>
        <MenuItem value="Data Scientist">Data Scientist</MenuItem>
      </Select>
      <TextField
        label="Min Base Pay"
        value={minBasePay}
        onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
      />
    </div>
  );
};

export default Filters;