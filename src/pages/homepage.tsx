import { Box } from "@material-ui/core";
import ValuesSection from "components/homepage/ValuesSection";
import React from "react";
import { useRouteData } from "react-static";

export default () => {
  const { test }: { test: any[] } = useRouteData();
  console.log(test);
  return (
    <Box mb={17.5}>
      <section id="values-section" data-testid="values-section">
        <ValuesSection obj={test[1]}/>
      </section>
      <br />
      Tests:
      <ul>
        {test.map((item, index) => {
          return <li key={index}>Page name: {item.data.pageName}</li>;
        })}
      </ul>
    </Box>
  );
};
