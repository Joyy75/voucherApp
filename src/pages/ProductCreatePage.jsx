import React from 'react'
import { Container } from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import ProductCreateCard from '../components/ProductCreateCard';

const ProductCreatePage = () => {
  return (
    <section>
        <Container>
            <Breadcrumb currentPageTitle={"Create Product Here"} links={[{title: "Product List", path: "/product"}]}/>
            <ProductCreateCard />
        </Container>
    </section>
  )
}

export default ProductCreatePage;