import React, { useState, useEffect } from "react";
import Fetchapi from "./Fetchapi";

const Data = () => {
  let [details, setDetails] = useState([]);

  useEffect(() => {
    let fetch = async () => {
      setDetails(await Fetchapi());
    };
    fetch();
  }, []);
  console.log(details);

  return (
    <>
      <h1>{details.title}</h1>
    </>
  );
};

export default Data;
