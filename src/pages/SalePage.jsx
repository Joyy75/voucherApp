import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Container } from '../components/Container';
import VoucherInfo from '../components/VoucherInfo';

const SalePage = () => {
  return (
       <section>
            <Container >
            <Breadcrumb currentPageTitle={"Sale Section"} link={[]}/>
            <VoucherInfo />
            </Container>
           </section>
  )
}

export default SalePage;