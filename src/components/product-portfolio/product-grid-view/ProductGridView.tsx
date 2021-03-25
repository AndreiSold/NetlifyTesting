import { Grid } from '@material-ui/core';
import React from 'react';
import { Product } from '../../../models/product';
import MPRoundedCard from '../../cards/rounded-card/MPRoundedCard';
import { useStyles } from './ProductGridView.styles';

interface ProductGridViewProps {
  products: Product[];
}

const ProductGridView: React.FC<ProductGridViewProps> = ({ products }) => {
  const classes = useStyles();
  const firstColumn: JSX.Element[] = [];
  const secondColumn: JSX.Element[] = [];
  products.forEach((product, index) => {
    const card = (
      <Grid key={index} item xs={12} className={classes.innerGridItem}>
        <MPRoundedCard
          providerImageUrl={`${process.env.REACT_APP_PICTURES_CDN_URL}/${product.providerId}/pictures/logo`}
          providerName={product.providerName}
          title={product.displayName}
          numberOfSubscriptions={product.statistics?.subscriptionCount || 0}
          features={[product.shortDescription]}
          link={{
            path: '/',
            pathParams: { id: product.id },
          }}
        />
      </Grid>
    );
    index % 2 === 0 ? firstColumn.push(card) : secondColumn.push(card);
  });

  return (
    <>
      <Grid item container sm={12} md={6} alignContent="flex-start">
        {firstColumn}
      </Grid>
      <Grid item container sm={12} md={6} alignContent="flex-start">
        {secondColumn}
      </Grid>
    </>
  );
};

export default ProductGridView;
