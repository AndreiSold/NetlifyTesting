import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardTitle: {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '2rem',
      lineHeight: '1.3',
    },
    numberAvatar: {
      backgroundColor: 'transparent',
      color: '#3f7e96',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.body1.fontSize,
      width: 'fit-content',
      marginRight: '6px',
    },
    cardHeader: {
      padding: `${theme.spacing(3)}px 0`,
      color: '#3f7e96',
      '& > div': {
        marginRight: 0,
      },
    },
    providerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: theme.spacing(3),
    },
    providerImage: {
      maxHeight: '2.5rem',
      maxWidth: '4.5rem',
      width: 'auto',
      height: 'auto',
      marginRight: '20px',
    },
    dropOutContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    wrapperLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    dropOutLabel: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        fontWeight: theme.typography.fontWeightBold,
        '& > div': {
          background: 'url(/icons/arrows/drop-out-red-bold.svg)',
        },
      },
    },
    dropOutArrow: {
      background: 'url(/icons/arrows/drop-out-red.svg)',
      height: '20px',
      width: '20px',
      marginLeft: theme.spacing(1),
    },
    bodyText: {
      lineHeight: 1.4,
    },
    card: {
      padding: `45px 40px`,
      border: '2px solid transparent',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '45px',
      cursor: 'pointer',
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        '& > #cardTitle': {
          color: theme.palette.primary.main,
        },
      },
    },
  })
);
