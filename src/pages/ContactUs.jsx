import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Container } from '../components/Container';

const ContactUs = () => {
  return (
       <section>
              <Container >
              <Breadcrumb currentPageTitle={"Contact Us"} link={[]}/>
              </Container>
             </section>
    )
}

export default ContactUs