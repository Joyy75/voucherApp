import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Container } from '../components/Container';

const Blog = () => {
  return (
           <section>
            <Container >
            <Breadcrumb currentPageTitle={"Blog Corner"} link={[]}/>
            </Container>
           </section>
  )
}

export default Blog