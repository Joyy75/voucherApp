import React from 'react'
import { Container } from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product List"} link={[]}/>
        <ProductList />
      </Container>
    </section>
  )
}

export default ProductPage;