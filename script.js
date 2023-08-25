async function fetchData() {
  const url =
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=London&minDate=2023-08-25&maxDate=2023-08-31&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "04a5ac73ddmsh5c2bc7e6e21c7a2p10ae77jsn03a6a1257a5c",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
