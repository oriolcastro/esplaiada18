// TODO: Donar forma en funció del contingut
import React from 'react'
import { Container, Section, Content, Button, Icon, Box, Title } from 'bloomer'

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
          <Icon isSize="large" className="fa fa-compass" />
          <p>Direccions fins aquí</p>
        </Button>
      </Container>
      <Container>
        <Title isSize="5">
          A {data.contentfulEspais.nom} s'hi faran les seguents activitats:
        </Title>
        {/* {data.contentfulEspais.activitatsRealitzades.map(({ titol }) => (
          <Box key={titol}>{titol}</Box>
        ))} */}
      </Container>
    </Section>
    <Section />
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
    }
  }
`
