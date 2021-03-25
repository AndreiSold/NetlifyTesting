import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category, Product } from '../../models/product';
import { SetSelectedProductCategory } from '../../store/actions/productsActions';
import {
  productsLoadingSelector,
  productsSelector,
  selectedProductCategorySelector,
} from '../../store/selectors';
import MPCard from '../cards/card/MPCard';
import LoadingIndicator from '../loading/Loading';
import ProductGridView from './product-grid-view/ProductGridView';
import { useStyles } from './ProductPortfolio.styles';

interface ProductPortfolioProps {}

export const ProductPortfolio: React.FC<ProductPortfolioProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onCategoryClick = (selectedCategory: Category) => {
    dispatch(SetSelectedProductCategory(selectedCategory));
  };
  const productsLoading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const selectedCategory = useSelector(selectedProductCategorySelector);
  let categoriesMap = new Map<Category, Product[]>();
  const allProducts = Object.values(products).filter(
    (product: Product) =>
      !product.categories.includes(Category.INTERNAL_SERVICES)
  );

  categoriesMap.set(Category.ALL_PRODUCTS, allProducts);
  categoriesMap = Object.values(products).reduce(
    (map: Map<Category, Product[]>, product: Product) => {
      product.categories.forEach((categoryString) => {
        const category = categoryString as Category;
        if (map.has(category)) {
          map.get(category)?.push(product);
        } else {
          map.set(category, [product]);
        }
      });
      return map;
    },
    categoriesMap
  );

  return (
    <Grid
      item
      container
      xs={12}
      justify="space-between"
      className={classes.mainGrid}
    >
      <Grid xs={12} item sm={4} className={classes.categoriesContainer}>
        <Box className={classes.searchBoxContainer}>
        </Box>
        <Box mb={5}>
          <MPCard
            title="findServicesInDifferentDomains"
            titleClasses={classes.OOBtitle}
            paragraphs={['findServicesInDifferentDomainsDescription']}
            translate={true}
          />
        </Box>
        {Array.from(categoriesMap.keys()).map(
          (productCategory: Category, catIndex: number) => (
            <Box
              key={catIndex}
              data-cy={`category-${productCategory}`}
              className={classes.categoryWrapper}
              onClick={() => onCategoryClick(productCategory)}
            >
              <span className={classes.iconWrapper}>
                <img
                  alt="checkIcon"
                  className={`${classes.categoryIcon} ${
                    selectedCategory === productCategory
                      ? classes.activeCategoryIcon
                      : ''
                  }`}
                  src="/icons/check.svg"
                />
              </span>
              <Typography
                className={`${
                  selectedCategory === productCategory
                    ? classes.activeCategoryText
                    : classes.normalCategoryText
                }`}
              >
                {productCategory}
              </Typography>
            </Box>
          )
        )}
      </Grid>

      <Grid item xs={12} sm={8} container spacing={6} data-cy="products-grid">
        {productsLoading ? (
          <Box display="flex" height="100%" width="100%">
            <LoadingIndicator />
          </Box>
        ) : (
          <ProductGridView
            products={categoriesMap.get(selectedCategory) || []}
          />
        )}
      </Grid>
    </Grid>
  );
};
