import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargerImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargerImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img width={"80%"} height={"auto"} src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep your strong. {name} is one of the best exercises for
          your {target}. It will help you improve your mood and gain energy
        </Typography>
        {extraDetail.map((item, index) => {
          return (
            <Stack
              key={index}
              direction={"row"}
              gap={"24px"}
              alignItems={"center"}
            >
              <Button sx={{background: "#fff2db", borderRadius: "50%", width: "100px", height: "100px"}}>
                <img src={item.icon} alt="" />
              </Button>
              <Typography textTransform={"capitalize"} variant="h5">{item.name}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
