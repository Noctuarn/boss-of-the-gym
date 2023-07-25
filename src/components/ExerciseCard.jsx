import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img className="exercise-card-image" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"} mt={"20px"}>
        <Button className="exercise-card-btn"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc767",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography width={"70%"} textAlign={"left"} mt={"11px"} pb={"10px"} textTransform={"capitalize"} ml={"21px"} color={"#000"} fontWeight={"bold"} fontSize={"1.5rem"}>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
