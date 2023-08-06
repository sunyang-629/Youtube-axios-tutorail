import React, { useEffect } from "react";
import authFetch from "../axios/interceptor";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("react-store-products");
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
