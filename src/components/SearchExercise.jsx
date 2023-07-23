import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

const SearchExercise = () => {
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
      mx={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercise You Should Know
      </Typography>

      <Box position={"relative"} mb={"72px"}>
        <TextField
          height={"76px"}
          value={""}
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "4px" },
            width: { lg: "1200px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
        />
        <Button
          sx={{
            backgroundColor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "170px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: '56px',
            position: "absolute",
            right: "0px"
          }}
          className="search-btn"
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
