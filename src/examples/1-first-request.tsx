import React, { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await axios(url);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, []);

  return <h2 className="text-center">First Request</h2>;
};
export default FirstRequest;
