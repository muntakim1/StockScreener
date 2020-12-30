import React, { useState, useEffect } from "react";
import axios from "axios";
const About = () => {
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/about")
      .then((response) => setData(response.data));
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {
      setData({});
    };
  }, []);
  return (
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">{data.message}</cite>
      </figcaption>
    </figure>
  );
};

export default About;
