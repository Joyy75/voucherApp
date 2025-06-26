import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Container } from '../components/Container';

const SalePage = () => {
  return (
       <section>
            <Container >
            <Breadcrumb currentPageTitle={"Sale Section"}/>
            </Container>
           </section>
  )
}

export default SalePage;