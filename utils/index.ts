export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5a7561ec37mshd16906505ca1ba9p19c263jsnc2a7e8a9ef30",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
/* const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5a7561ec37mshd16906505ca1ba9p19c263jsnc2a7e8a9ef30",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  } */
