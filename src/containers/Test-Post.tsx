import React from "react";
import { Link } from "react-router-dom";
import { useRouteData } from "react-static";

export default () => {
  const { post } = useRouteData();
  return (
    <div>
      <Link to="/test/">{"<"} Back</Link>
      <br />
      {/* print out what we want to display */}
      <h3>{post.data.title}</h3>
      <div>{post.content}</div>
    </div>
  );
};
