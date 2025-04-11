import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "../HomeSection/Card";
import ProfileModal from "./profileModel";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handelOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handelBack = () => navigate(-1);

  const handelFollowUser = () => {
    console.log("follow user");
  };


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)

    if (newValue===4){
        console.log("likes twit")
    }

    else if(newValue===1){
      console.log("user twits")
    }
  }

  
  
  return (
    <div>
      <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95">
        <KeyboardBackspaceIcon className="cursor-pointer" onClick={handelBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Craft With Shehan
        </h1>
      </section>

      <section>
        <img
          className="w-full h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2017/08/03/21/11/art-2578353_1280.jpg"
          alt="pic"
        />
      </section>

      <section className="py-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="craft with shehan"
            src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
            sx={{
              width: "10rem",
              height: "10rem",
              border: "4px solid white",
            }}
          />

          {true ? (
            <Button
              onClick={handelOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handelFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow " : "UnFollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Craft with shehan</h1>
            {/* Add verified icon if needed */}
          </div>
          <h1 className="text-gray-500">@CraftwithShehan</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>
            Hello I am Craft With Shehan, you will find any craft idea on my
            page.
          </p>

          <div className="py-5 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Sri Lanka</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined April 2025</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>90</span>
              <span className="text-gray-400">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>500</span>
              <span className="text-gray-400">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Crafts" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <Card key={index} />
              ))}
            </TabPanel>
            <TabPanel value="2">Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
