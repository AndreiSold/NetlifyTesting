import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionTitle: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightRegular,
    },
    firstDivider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2.5),
    },
    divider: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2.5),
    },
    cardParagraph: {
      fontWeight: theme.typography.fontWeightRegular,
    },
    sectionSubtitle: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
    },
  })
);
