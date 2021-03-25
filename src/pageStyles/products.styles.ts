import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    productsContainer: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  })
);
