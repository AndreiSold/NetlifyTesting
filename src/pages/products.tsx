import { Box, Container } from '@material-ui/core';
import { ProductPortfolio } from 'components/product-portfolio/ProductPortfolio';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from '../pageStyles/products.styles';
import { loadAllProducts } from '../store/actions/productsActions';

const ConsumerLandingPage = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllProducts());
  }, [dispatch]);

  return (
    <Box mb={10}>
      <section id="product-portfolio-section">
        <Container className={classes.productsContainer}>
          <ProductPortfolio />
        </Container>
      </section>

    </Box>
  );
};

export default ConsumerLandingPage;
