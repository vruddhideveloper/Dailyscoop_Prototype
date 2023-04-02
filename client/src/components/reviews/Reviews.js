import React, { useEffect, useState } from "react";
import "./reviews.css";
import axios from "axios";
const Reviews = ({ image, title, description }) => {
  const [review, setReview] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/entertainment");
    setReview(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(review);
  return (
    <div>
      <h2>Reviews</h2>
      {review.map((data) => (
        <div key={data._id} className="movie-card">
          <img src={data.img} alt={data.title} />
          <div className="movie-card-info">
            <h3>{data.title}</h3>
            <p className="date">{data.date}</p>
            <p className="rating">{data.ratings}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
