async function fetchData() {
  // const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Hollywood%20bowl&minDate=2022-01-25&maxDate=2023-01-30&page=1';
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "04a5ac73ddmsh5c2bc7e6e21c7a2p10ae77jsn03a6a1257a5c",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Hollywood%20bowl&minDate=2022-01-25&maxDate=2023-01-30&page=1"
  );
  const record = await res.json();

  document.getElementById("concerts").innerHTML = record.data
    .map((item) => `<li>${item.name}</li>`)
    .join("");
  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }
}
fetchData();
