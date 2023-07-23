import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

import HorrizontalScroolBar from "./HorrizontalScroolBar";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
 
  const [bodyParts, setBodyParts] = useState([
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );

  //     setBodyParts(["all", ...bodyPartsData]);
  //   };

  //   fetchExercisesData();
  // }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);

      const searchedExercise = exercisesData.filter((exercise) => {
        exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search);
      });

      setSearch("");
      setExercises(searchedExercise);
    }
    alert("Data is not founded");
  };

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

      <Box position={"relative"} mb={"72px"} border={"none"}>
        <TextField
          height={"76px"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
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
            height: "56px",
            position: "absolute",
            right: "0px",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorrizontalScroolBar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
