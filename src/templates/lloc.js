import React from 'react'
import FaCompass from 'react-icons/lib/fa/compass'

import { Container, Section, Content, Button, Title } from 'bloomer'

import Pageheader from '../components/Pageheader'
import MapContainer from '../components/MapContainer'

export default ({ data }) => (
  <div>
    <Pageheader title={data.contentfulEspais.nom} />
    <Section>
      <Container className="map-container">
        <MapContainer
          latitude={data.contentfulEspais.coordenades.lat}
          longitude={data.contentfulEspais.coordenades.lon}
        />
        <Button
          isColor="primary"
          href={data.contentfulEspais.navigationLink}
          target="_blank"
          isDisplay="flex"
        >
          <span className="my-icon-container">
            <FaCompass height="1.25em" width="1.25em" />
          </span>
          <p>Direccions fins aquí</p>
        </Button>
      </Container>
      <Container className="add-margin">
        {data.contentfulEspais.quiHiFaActivitat !== null && (
          <Content className="has-text-justified">
            <Title isSize="5">Qui hi fa activitat?</Title>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulEspais.quiHiFaActivitat.childMarkdownRemark
                    .html,
              }}
            />
          </Content>
        )}
      </Container>
      <Container className="add-margin">
        {data.contentfulEspais.quiHiDorm !== null && (
          <Content>
            <Title isSize="5">Qui hi dorm?</Title>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulEspais.quiHiDorm.childMarkdownRemark.html,
              }}
            />
          </Content>
        )}
      </Container>
    </Section>
  </div>
)

export const query = graphql`
  query PlaceQuery($slug: String!) {
    contentfulEspais(slug: { eq: $slug }) {
      nom
      coordenades {
        lat
        lon
      }
      navigationLink
      equips_esplais {
        titol
        esplais
      }
      quiHiDorm {
        childMarkdownRemark {
          html
        }
      }
      quiHiFaActivitat {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
