import React, { useEffect, useState } from "react";
import axios from "axios";
const Contact = () => {
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/contact")
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
          "Contact Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer posuere erat a ante."
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">{data.message}</cite>
      </figcaption>
    </figure>
  );
};

export default Contact;
