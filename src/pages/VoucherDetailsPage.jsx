import React from 'react'
import { Container } from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import VoucherCard from '../components/VoucherCard';

const VoucherDetailsPage = () => {
  return (
      <section>
            <Container>
                <Breadcrumb currentPageTitle={"Voucher Details"} links={[{title: "Voucher Store", path: "/voucher"}]}/>
                <VoucherCard/>
            </Container>
        </section>
  )
}

export default VoucherDetailsPage