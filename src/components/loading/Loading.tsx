import React from 'react';
import Loader from 'react-loader-spinner';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export interface LoadingIndicatorProps {
  color?: string;
  width?: number;
  height?: number;
}

const LoadingIndicator = ({
  color,
  width = 30,
  height = 30,
}: LoadingIndicatorProps) => {
  const theme = useTheme();
  const loaderColor = color || theme.palette.primary.main;
  return (
    <Box margin="auto">
      <Loader
        type="TailSpin"
        color={loaderColor}
        width={width}
        height={height}
      />
    </Box>
  );
};

export default LoadingIndicator;
