import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { Section, Container, Title } from 'bloomer'

const IndexPage = ({ data }) => (
  <div>
    <Section>
      <Container hasTextAlign="centered">
        <Title isSize="3">{data.datoCmsHome.header}</Title>
        <Img sizes={data.datoCmsHome.heroImage.sizes} />
      </Container>
    </Section>
  </div>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    datoCmsHome {
      header
      heroImage {
        url
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
