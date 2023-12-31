import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) return "Loading...";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p={"20px"}>
      <Typography mb={"33px"} variant="h4">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise video
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => {
          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ width: "25%", textTransform: "none" }}
            >
              <img width={"100%"} src={item.video.thumbnails[0].url} alt="" />
              <Box>
                <Typography variant="h5" color={"#000"}>
                  {item.video.title}
                </Typography>

                <Typography variant="h6" color={"#000"}>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
