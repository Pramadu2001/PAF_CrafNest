import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navigation from '../Navigations/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import CraftDetails from '../CraftDetails/CraftDetails';

// Styled Paper component with no borders
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
  minHeight: '200px',
  elevation: 0,
  boxShadow: 'none',
}));

const Homepage = () => {
  console.log('Homepage component rendered'); // Debugging log

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: { xs: 2, sm: 5, lg: 5 },
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
      justifyContent="space-between"
    >
      {/* Left Part: Hidden on xs, visible on lg */}
      <Grid
        item
        xs={0}
        lg={2.5}
        sx={{
          display: { xs: 'none', lg: 'block' },
          height: '100vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
        }}
        className="no-scrollbar"
      >
        <Navigation />
      </Grid>

      {/* Middle Part: Full width on xs, 7 units on lg */}
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          height: '100vh',
          overflowY: 'auto',
          paddingBottom: 2,
          paddingX: { lg: 2 },
          backgroundColor: '#FFFFFF',
        }}
        className="no-scrollbar"
      >
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/Profile/:id" element={<Profile />}></Route>
          <Route path="/Craft/:id" element={<CraftDetails />}></Route>
        </Routes>
     
      </Grid>

      {/* Right Part: Hidden on xs, 2 units on lg */}
      <Grid
        item
        xs={0}
        lg={2}
        sx={{
          display: { xs: 'none', lg: 'block' },
          height: '100vh',
          overflowY: 'auto',
          paddingTop: 2,
          paddingX: { lg: 2 },
          backgroundColor: '#FFFFFF',
        }}
      >
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default Homepage;