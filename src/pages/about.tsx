import { Box } from '@material-ui/core';
import React from 'react'
import { useRouteData } from 'react-static';
let i18next: any;

if (typeof window !== undefined) {
  i18next  = require('react-i18next');
}

export default () => {
  const { t } = !!i18next ? i18next.useTranslation() : { t: undefined };
  const { cmsObject }: { cmsObject: any } = useRouteData();
  console.log(cmsObject);
  return (
    <Box hidden={!i18next}> 
      {`Title ${cmsObject.data.title} ; Content ${cmsObject.data.content}`}
      {!!i18next ? t('dashboard') : 'dashboard'}
    </Box>
  );
};
