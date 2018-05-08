import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o'

import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Box,
  Columns,
  Column,
  Icon,
} from 'bloomer'

const IndexPage = ({ data }) => (
  <div>
    <Img sizes={data.contentfulHome.heroImage.sizes} />
    <Section>
      <Container hasTextAlign="centered" className="add-margin">
        <Title isSize="2">{data.contentfulHome.header}</Title>
      </Container>
      <Container>
        <Box>
          <Columns isMobile>
            <Column isSize="1/2" isPaddingless>
              <Img sizes={data.contentfulHome.imatgeCI.sizes} />
            </Column>
            <Column>
              <Title isSize="6">Centre d'Interés</Title>
              <Subtitle isSize="6">Descarregat la guia</Subtitle>
              <Container hasTextAlign="centered">
                <Button
                  isColor="primary"
                  href={data.contentfulHome.centreInteresGeneral.file.url}
                  download
                  target="_blank"
                  isFullWidth
                  className="add-margin-button"
                >
                  <p>CI General</p>
                  <span className="my-icon-container">
                    <FaFilePdfO />
                  </span>
                </Button>
                <Button
                  isColor="primary"
                  href={data.contentfulHome.centreInteresJoves.file.url}
                  download
                  target="_blank"
                  isFullWidth
                >
                  <p>CI Joves</p>
                  <span className="my-icon-container">
                    <FaFilePdfO />
                  </span>
                </Button>
              </Container>
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
      imatgeCI {
        sizes(maxWidth: 400) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`
