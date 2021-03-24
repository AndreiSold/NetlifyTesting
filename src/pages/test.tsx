import React from "react";
import { Link } from "react-router-dom";
import { useRouteData } from "react-static";

export default () => {
  const { test }: { test: any[] } = useRouteData();

  return (
    <div>
      <h1>It's Tests time.</h1>
      <br />
      Tests:
      <ul>
        {test.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/test/${item.data.slug}`}>{item.data.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
