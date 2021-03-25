import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import { MPCardProps } from './MPCard';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
    },
    divider: (props: MPCardProps) => ({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
      borderTop: `0px solid ${
        props.dividerColor || theme.palette.primary.main
      }`,
      borderWidth: '2px',
      backgroundColor: 'transparent',
    }),
    cardHeader: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    imageTitle: {
      fontWeight: 700,
    },
  })
);
