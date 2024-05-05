import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import  styled  from '@emotion/styled';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
const JobCardContainer = styled(Card)`
  display:flex
  width: 300px;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const PostedDate = styled.div`
  display:flex;
  margin-top: 10px;
  align-items: center;
  width: 130px;
  height: 20px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const FocusContent = styled.div`
  display: flex;
  flex-direction: column
  justify-content: space-between;
  align-items: center
`

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

  const [showMore, setShowMore] = React.useState(false);

  return (
    <JobCardContainer>
      <PostedDate>
        <HourglassTopIcon fontSize="small" color="primary" />
        &nbsp; Posted 10 days ago
      </PostedDate>
      <FocusContent>
        <CardMedia
        style={{width:'50px',height:'50px'}}
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
          <Typography variant="body2" color="textSecondary">
          {location}
        </Typography>
        </CardContent>
      </FocusContent>
      <CardContent>
        {/* <Typography variant="h5" component="h2">
          {companyName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {jobRole}
        </Typography> */}
        <Typography
          variant="body2"
          component="p"
          style={{ maxHeight: showMore? 'none' : '72px', overflow: 'hidden' }}
        >
          {jobDetailsFromCompany}
          {showMore? '' : '...'}
        </Typography>
        {showMore? (
          <Button variant="text" color="primary" onClick={() => setShowMore(false)}>
            Show Less
          </Button>
        ) : (
          <Button variant="text" color="primary" onClick={() => setShowMore(true)}>
            See More
          </Button>
        )}
        {/* <Typography variant="body2" color="textSecondary">
          {location}
        </Typography> */}
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