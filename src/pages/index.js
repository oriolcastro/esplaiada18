import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { Section, Container, Title, Button } from 'bloomer'

const IndexPage = ({ data }) => (
  <div>
    <Img sizes={data.contentfulHome.heroImage.sizes} />
    <Section>
      <Container hasTextAlign="centered">
        <Title isSize="1">{data.contentfulHome.header}</Title>
      </Container>
      <Container>
        <Box>
          <Columns>
            <Column isSize="1/2">
              <Img sizes={data.contentfulHome.heroImage.sizes} />
            </Column>
            <Column isSize="1/2">
              <Title isSize="5">Centre d'INterés</Title>
              <Button
                isColor="primary"
                href={data.contentfulHome.centreInteresGeneral.file.url}
                download
                target="_blank"
              >
                CI General
              </Button>
              <Button
                isColor="primary"
                href={data.contentfulHome.centreInteresJoves.file.url}
                download
                target="_blank"
              >
                CI Joves
              </Button>
            </Column>
          </Columns>
        </Box>
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
      centreInteresGeneral {
        file {
          url
        }
      }
      centreInteresJoves {
        file {
          url
        }
      }
    }
  }
`
