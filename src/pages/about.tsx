import { Box } from '@material-ui/core';
import React from 'react'
import { useRouteData } from 'react-static';

export default () => {
  const { cmsObject }: { cmsObject: any } = useRouteData();
  console.log(cmsObject);
  return (
    <Box>
      {`Title ${cmsObject.data.title} ; Content ${cmsObject.data.content}`}
    </Box>
  );
};
