import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="body-part-card"
      px={"20px"}
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "none",
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "270px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick ={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: "smooth"})
      }}
    >
      <img
        src={Icon}
        alt=""
        className="body-part-icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize={"1.5rem"} fontWeight={"bold"} color={"#3a1212"} textTransform={"capitalize"}>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
