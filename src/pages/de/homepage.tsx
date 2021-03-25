import { Box } from "@material-ui/core";
import ValuesSection from "components/homepage/ValuesSection";
import React from "react";
import { useRouteData } from "react-static";

export default () => {
  const { cmsObject }: { cmsObject: object } = useRouteData();
  console.log(cmsObject);
  return (
    <Box mb={17.5}>
      <section id="values-section" data-testid="values-section">
        <ValuesSection obj={cmsObject}/>
      </section>      
    </Box>
  );
};
