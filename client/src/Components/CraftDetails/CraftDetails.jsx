import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Card from "../HomeSection/Card";
import { Divider } from "@mui/material";

const CraftDetails = () => {
 
  const handelback = () => navigate(-1);
  return (
    <React.Fragment>
      <section className={"z-50 flex  items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handelback}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Craft 
        </h1>
      </section>
      <section>
        <Card />
        <Divider sx={{margin:"2rem  0rem",}}/>
      </section>
      <section>
      {[1, 1, 1, 1, 1].map((item, index) => (
                    <Card key={index} />
                ))}
      </section>
    </React.Fragment>
  );
};

export default CraftDetails;
