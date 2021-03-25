import React from 'react'
import { useTranslation } from 'react-i18next';

const Dynamic: React.FC<{ path?: String }> = () => {
  const { t } = useTranslation();

  return (
  <div>
    Working dynamic internationalization: {t('createCompanyAccountForMore')}
  </div>)
}

export default Dynamic
