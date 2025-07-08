import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Container } from '../components/Container';

const AboutUs = () => {
  return (
     <section>
            <Container >
            <Breadcrumb currentPageTitle={"AboutUs"} link={[]}/>
            </Container>
           </section>
  )
}

export default AboutUs;