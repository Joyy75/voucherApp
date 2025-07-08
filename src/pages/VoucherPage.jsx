
import React from 'react'
import { Container } from '../components/Container';
import VoucherList from '../components/VoucherList';
import Breadcrumb from '../components/Breadcrumb';


const VoucherPage = () => {
  return (
       <section>
        <Container >
        <Breadcrumb currentPageTitle={"Voucher Store"} link={[]}/>
        <VoucherList />
        </Container>
       </section>
  )
}

export default VoucherPage;