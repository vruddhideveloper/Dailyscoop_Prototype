import React, { useState, useEffect } from "react";
import axios from "axios";

export const VisualStories = () => {
  const [vs, setVs] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/news");
    setVs(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(vs);
  return (
    <div>
      <h1>VisualStories</h1>
      {vs.map((data) => {
        <div key={data._id} className="card">
          <div className="card-image-container">
            <img src={data.img} />
            <div className="card-description">
              {/* <h2>{props.title}</h2> */}
              <p>{data.headline}</p>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};
