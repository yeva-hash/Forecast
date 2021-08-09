import { Rendering } from "./Rendering";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";

export function Forecast() {
  let [arrOfCity, setApi] = useState([])
    useEffect(()=> {
        const timerID = setInterval(() => 
        fetch('https://bt-21-playground-vppfc.ondigitalocean.app/forecast')
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setApi(arrOfCity = data)
          }), 3000);
          return () => {clearInterval(timerID)}
    })
    return arrOfCity.map((e) => {
      return <Rendering city = {e.city} temperature = {e.temperature} key={e.id}/>
    })
      
}