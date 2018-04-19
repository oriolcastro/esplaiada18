// TODO: Donar forma en funció del contingut
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Container, Section, Content } from 'bloomer'

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
          <p>Aquí s'hi faran les seguents activitats:</p>
          <ul>
            {data.datoCmsLloc.activitatsRealitzades.map(({ nom }) => (
              <li key={nom}>{nom}</li>
            ))}
          </ul>
        </Content>
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
