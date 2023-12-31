import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { fetchData, exerciseOptions } from "../utils/fetchData";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff2625",
      contrastText: "#ffffff",
    },
  },
});

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",  
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <ThemeProvider theme={theme}>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p={"20px"}>
        <Typography variant="h3" textAlign={"center"} mb={"46px"}>
          Showing Results
        </Typography>
        <Stack
          direction={"row"}
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {currentExercises.map((exercise, index) => {
            return <ExerciseCard key={index} exercise={exercise} />;
          })}
        </Stack>

        <Stack mt={"100px"} alignItems={"center"}>
          {exercises.length > exercisesPerPage && (
            <Pagination
              shape="rounded"
              color="primary"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Exercises;
