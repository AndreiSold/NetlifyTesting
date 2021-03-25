import {
  Avatar,
  Box,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useStyles } from './MPCard.styles';
import clsx from 'clsx';

export interface MPCardProps {
  title: string;
  paragraphs: string[];
  divider?: boolean;
  dividerExtraClasses?: string;
  paragraphClasses?: string;
  dividerColor?: string;
  image?: { url: string; title: string; subtitle: string };
  titleClasses?: string;
  translate?: boolean;
}

const MPCard = (props: MPCardProps) => {
  const classes = useStyles(props);
  // const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      {props.divider && (
        <Divider
          className={clsx(props?.dividerExtraClasses, classes.divider)}
        />
      )}
      <Typography
        variant="h5"
        align="left"
        gutterBottom
        className={props.titleClasses}
      >
        {/* <strong>{props.translate ? t(props.title) : props.title}</strong> */}
        <strong>{props.title}</strong>
      </Typography>
      {props.paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body1"
          align="left"
          className={props?.paragraphClasses}
        >
          {/* {props.translate ? t(paragraph) : paragraph} */}
          {paragraph}
        </Typography>
      ))}
      {props.image && (
        <CardHeader
          className={classes.cardHeader}
          avatar={<Avatar alt={props.image.title} src={props.image.url} />}
          title={
            <Typography className={classes.imageTitle}>
              {/* {props.translate ? t(props.image.title) : props.image.title} */}
              {props.image.title}
            </Typography>
          }
          subheader={
            // props.translate ? t(props.image.subtitle) : props.image.subtitle
            props.image.subtitle
          }
        />
      )}
    </Box>
  );
};

export default MPCard;
