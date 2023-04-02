import React, { useState, useEffect } from "react";
import axios from "axios";
import "./entertainment.css";
const Entertainment = (props) => {
  const [ent, setEnt] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/entertainment");
    setEnt(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Entertainment</h1>
      {ent.length > 0 ? (
        ent.map((data) => (
          <div key={data._id} className="news-card">
            <div className="news-card-left">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div className="news-card-right">
                <img src={data.img} alt="not available" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
};
export default Entertainment;
