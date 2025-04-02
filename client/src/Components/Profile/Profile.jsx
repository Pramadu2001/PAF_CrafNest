import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from "../HomeSection/Card";


const Profile = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handelback = () => navigate(-1);

  const handelOpenprofileModel = () => {
    console.log("profile Opened");
  };

  const handelfFollowUser = () => {
    console.log("profile followed");
  };
  return (
    <div>
      <section className={" bg-white z-50 flex  items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handelback}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Craft With Shehan
        </h1>
      </section>
      <section>
        <img
          className="w-[100] h-[15rem] object-cover"
          src="/assets/profileB.jpg"
          alt="pic"
        />
      </section>
      <section className="py-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="craft with shehan"
            src=""
            sx={{ width: "10rem", height: "10rem", boarder: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handelOpenprofileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handelfFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow " : "UnFollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex item-center">
            <h1 className="font-bold text-lg">Craft with shehan</h1>
            {true && <img className="ml-2 w-5 h-5" src="" alt="verified" />}
          </div>
          <h1 className="text-gray-500">@CraftwithShehan</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            hello i am craft with shehan,you will find any carft idea on my page
          </p>
          <div py-5 flex space-x-5>
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Srilanaka</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">joined April 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>90</span>
              <span className="text-gray-400"> Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>500</span>
              <span className="text-gray-400"> Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Crafts" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"> {[1, 1, 1, 1, 1].map((item, index) => (
                    <Card key={index} />
                ))}</TabPanel>
        <TabPanel value="2">Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>

      </section>
    </div>
  );
};

export default Profile;
