import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ProductCard from '../UI/ProductCard';
import SectionHeader from '../UI/SectionHeader';

import milk from '../../assets/coffee_cup_milk_splash-removebg-preview.png';
import white from '../../assets/cup_white_chocolate-removebg-preview.png';
import dark from '../../assets/cup_dark_chocolate-removebg-preview.png';

function Product() {
  const items = [
    { title: 'Hot Milk Chocolate', price: 5.0, img: milk, id: 1, tag: 'Chocolate', rating: 5 },
    { title: 'Cold Milk Chocolate', price: 6.0, img: white, id: 2, tag: 'Milk', rating: 4.5 },
    { title: 'Dark Chocolate', price: 7.0, img: dark, id: 3, tag: 'Dark', rating: 4 },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <SectionHeader
        tag="OUR VARIETIES"
        title="Special Chocolate Varieties"
        subtitle="Indulge in our selection of premium chocolate coffees, hand-crafted with carefully roasted beans and rich organic milk bases."
        align="center"
        sx={{ mb: 6 }}
      />

      <Grid container spacing={4} justifyContent="center">
        {items.map((item) => {
          return (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard
                image={item.img}
                name={item.title}
                price={`$${item.price.toFixed(2)}`}
                tag={item.tag}
                rating={item.rating}
                onAddToCart={() => alert(`Added ${item.title} to cart!`)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Product;