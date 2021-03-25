import {
  Avatar,
  Box,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { useStyles } from './MPRoundedCard.styles';

interface MPRoundedCardProps {
  providerImageUrl: string;
  providerName: string;
  title: string;
  features: string[];
  numberOfSubscriptions: number;
  link: {
    path: string;
    pathParams?: { [key: string]: string };
  };
}

const MPRoundedCard: React.FC<MPRoundedCardProps> = (
  props: MPRoundedCardProps
) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.wrapperLink}
      to={
        props.link.pathParams
          ? generatePath(props.link.path, props.link.pathParams)
          : generatePath(props.link.path)
      }
    >
      <Box className={classes.card}>
        <div className={classes.providerContainer}>
          <CardMedia
            className={classes.providerImage}
            component="img"
            alt="partner logo"
            image={props.providerImageUrl}
          />
          <Typography variant="body1" align="left">
            {props.providerName}
          </Typography>
        </div>
        <Typography
          id="cardTitle"
          align="left"
          gutterBottom
          className={classes.cardTitle}
        >
          {props.title}
        </Typography>
        {props.features.map((feature, index) => (
          <Typography
            key={index}
            variant="body1"
            align="left"
            className={classes.bodyText}
          >
            {feature}
          </Typography>
        ))}
        <div>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar variant="square" className={classes.numberAvatar}>
                {props.numberOfSubscriptions}
              </Avatar>
            }
            title={
              props.numberOfSubscriptions === 1 ? (
                <Typography>
                  {'subscriptionsSpecial'}
                </Typography>
              ) : (
                <Typography>{'subscriptionsSpecial'}</Typography>
              )
            }
          />
        </div>
        {props.link && (
          <div className={classes.dropOutContainer}>
            <Typography
              component="div"
              variant="body1"
              color="primary"
              className={classes.dropOutLabel}
            >
              {'readMore'}
              <div className={classes.dropOutArrow} />
            </Typography>
          </div>
        )}
      </Box>
    </Link>
  );
};

export default MPRoundedCard;
