import React from "react";
import { useEffect,useState } from "react";
import HomeTemplate from "../../Templates/HomeTemplate";

function HomePage() {
  const [data, setData] = useState([]);

  const baseUrl = "https://api.opendota.com/api/heroStats" 

  useEffect(() => {
    async function Llamar() {
      fetch(baseUrl)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          setData(response);
        });
    }
    Llamar();
  }, []);

  return <HomeTemplate data={data} />;
}

export default HomePage;
