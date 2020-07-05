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
    <div>
      <h1>{details.title}</h1>
    </div>
  );
};

export default Data;
