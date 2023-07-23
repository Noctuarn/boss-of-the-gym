import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        my: {
          lg: "212px",
          sm: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      p={"20px"}
    >
      <Typography color={"#ff2625"} fontWeight={"600"} fontSize={"1.6rem"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> and repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
        Cheak out most effective exercise{" "}
      </Typography>

      <Button href="#exercises" variant="contained" color="error" sx={{backgroundColor: "#ff2625", padding: "10px"}}>
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>

      <img  width={"50%"} src={HeroBannerImage} className="hero-banner-img" alt="" />
    </Box>
  );
};

export default HeroBanner;
