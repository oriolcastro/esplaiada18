// TODO: Donar forma en funció del contingut
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Container, Section, Content, Button, Icon, Box, Title } from 'bloomer'

import Pageheader from '../components/Pageheader'

export default ({ data }) => (
  <div>
    <HelmetDatoCms seo={data.datoCmsLloc.seoMetaTags} />
    <Pageheader title={data.datoCmsLloc.nom} />
    <Section>
      <Container isFluid>
        <Content>
          <p>La latitud és: {data.datoCmsLloc.coordenades.latitude}</p>
          <p>La longitud és: {data.datoCmsLloc.coordenades.longitude}</p>
          <Title isSize="5">Aquí s'hi faran les seguents activitats:</Title>
          {data.datoCmsLloc.activitatsRealitzades.map(({ nom }) => (
            <Box key={nom}>{nom}</Box>
          ))}
        </Content>
      </Container>
    </Section>
    <Section>
      <Container>
        <Button
          isColor="primary"
          href={data.datoCmsLloc.navigationLink}
          target="_blank"
          isDisplay="flex"
        >
          <Icon className="fa fa-map" />
          <p>Navega fins aquí</p>
        </Button>
      </Container>
    </Section>
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
        id
        nom
      }
      navigationLink
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
