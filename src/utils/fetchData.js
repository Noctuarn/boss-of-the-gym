export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const responce = await fetch(url, options);

  if (responce.status !== 200) {
    alert("Error in fetching data");
  }
  const data = await responce.json();

  return data;
};
