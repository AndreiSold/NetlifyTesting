import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBoxContainer: {
      paddingBottom: `20px !important`,
      display: 'flex',
    },
    iconWrapper: {
      display: 'block',
      height: '1rem',
      textAlign: 'center',
      cursor: 'pointer',
    },
    categoriesContainer: {
      paddingRight: theme.spacing(6),
    },
    OOBtitle: {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4),
    },
    categoryWrapper: {
      alignItems: 'center',
      display: 'flex',
      marginBottom: theme.spacing(1),
      cursor: 'pointer',
    },
    categoryIcon: {
      marginRight: theme.spacing(4),
      visibility: 'hidden',
    },
    activeCategoryText: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.main,
    },
    normalCategoryText: {
      '&:hover': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.primary.main,
      },
    },
    activeCategoryIcon: {
      visibility: 'visible',
    },
    mainGrid: {
      marginBottom: theme.spacing(9),
      marginTop: theme.spacing(9),
    },
    searchBox: {
      paddingBottom: '1px',
      paddingTop: '1px',
    },
    searchInput: {
      fontSize: '1.5rem',
      fontWeight: theme.typography.fontWeightRegular,
      '& ::-webkit-input-placeholder': {
        opacity: 1,
      },
    },
  })
);
