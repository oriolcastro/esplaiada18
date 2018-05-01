import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { Section, Container, Title } from 'bloomer'

const IndexPage = ({ data }) => (
  <div>
    <Img sizes={data.contentfulHome.heroImage.sizes} />
    <Section>
      <Container hasTextAlign="centered">
        <Title isSize="3">{data.contentfulHome.header}</Title>
        <Img sizes={data.contentfulHome.heroImage.sizes} />
      </Container>
    </Section>
  </div>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    contentfulHome {
      header
      heroImage {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`
