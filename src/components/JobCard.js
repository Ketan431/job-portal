import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import  styled  from '@emotion/styled';

const JobCardContainer = styled(Card)`
  width: 300px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const JobCard = ({ job }) => {
  const {
    jdUid,
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;

  return (
    <JobCardContainer>
      <CardMedia
        component="img"
        height="140"
        image={logoUrl}
        alt={companyName}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {companyName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {jobRole}
        </Typography>
        <Typography variant="body2" component="p">
          {jobDetailsFromCompany.substring(0, 150)}...
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {minExp}-{maxExp} years experience
        </Typography>
        {minJdSalary && maxJdSalary && (
          <Typography variant="body2" color="textSecondary">
            {minJdSalary}-{maxJdSalary} {salaryCurrencyCode}
          </Typography>
        )}
        <Button variant="contained" color="primary" href={jdLink} target="_blank">
          Apply Now
        </Button>
      </CardContent>
    </JobCardContainer>
  );
};

export default JobCard;