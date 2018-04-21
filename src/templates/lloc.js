// TODO: Donar forma en funció del contingut
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Container, Section, Content, Button, Icon, Box, Title } from 'bloomer'

import Pageheader from '../components/Pageheader'
import MapContainer from '../components/MapContainer'

export default ({ data }) => (
  <div>
    <HelmetDatoCms seo={data.datoCmsLloc.seoMetaTags} />
    <Pageheader title={data.datoCmsLloc.nom} />
    <Section>
      <Container className="map-container">
        <MapContainer
          latitude={data.datoCmsLloc.coordenades.latitude}
          longitude={data.datoCmsLloc.coordenades.longitude}
        />
        <Button
          isColor="primary"
          href={data.datoCmsLloc.navigationLink}
          target="_blank"
          isDisplay="flex"
        >
          <Icon className="fa fa-compass" />
          <p>Direccions fins aquí</p>
        </Button>
      </Container>
      <Container>
        <Title isSize="5">
          A {data.datoCmsLloc.nom} s'hi faran les seguents activitats:
        </Title>
        {data.datoCmsLloc.activitatsRealitzades.map(({ titol }) => (
          <Box key={titol}>{titol}</Box>
        ))}
      </Container>
    </Section>
    <Section />
  </div>
)

export const query = graphql`
  query PlaceQuery($slug: String!) {
    datoCmsLloc(slug: { eq: $slug }) {
      nom
      coordenades {
        latitude
        longitude
      }
      activitatsRealitzades {
        titol
      }
      navigationLink
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
