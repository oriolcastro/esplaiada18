import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Section,
  Content,
  Button,
  Icon,
  Box,
  Title,
  Columns,
  Column,
} from 'bloomer'

import Pageheader from '../components/Pageheader'

export default ({ data }) => (
  <div>
    <Pageheader title={data.contentfulEquipsEsplais.titol} />
    <Section>
      <Title isSize="6">On dormir:</Title>
      <Container>
        <Content>
          <p>
            Xics:{' '}
            <Link to={data.contentfulEquipsEsplais.xics.slug}>
              {data.contentfulEquipsEsplais.xics.nom}
            </Link>
          </p>
          <p>
            Petits:{' '}
            <Link to={data.contentfulEquipsEsplais.petits.slug}>
              {data.contentfulEquipsEsplais.petits.nom}
            </Link>
          </p>
          <p>
            Mitjans:{' '}
            <Link to={data.contentfulEquipsEsplais.mitjans.slug}>
              {data.contentfulEquipsEsplais.mitjans.nom}
            </Link>
          </p>
          <p>
            Grans:{' '}
            <Link to={data.contentfulEquipsEsplais.grans.slug}>
              {data.contentfulEquipsEsplais.grans.nom}
            </Link>
          </p>
          <p>
            Joves:{' '}
            <Link to={data.contentfulEquipsEsplais.joves.slug}>
              {data.contentfulEquipsEsplais.joves.nom}
            </Link>
          </p>
          <p>
            Xics:{' '}
            <Link to={data.contentfulEquipsEsplais.xics.slug}>
              {data.contentfulEquipsEsplais.xics.nom}
            </Link>
          </p>
        </Content>

        <Title isSize="6">Espai de preparació de l'acte unitari</Title>
        <Content>
          <p>
            <Link to={data.contentfulEquipsEsplais.preparacioActeUnitari.slug}>
              {data.contentfulEquipsEsplais.preparacioActeUnitari.nom}
            </Link>
          </p>
        </Content>
      </Container>
    </Section>
  </div>
)

export const query = graphql`
  query EquipQuery($slug: String!) {
    contentfulEquipsEsplais(slug: { eq: $slug }) {
      titol
      esplais
      xics {
        nom
        slug
      }
      petits {
        nom
        slug
      }
      mitjans {
        nom
        slug
      }
      grans {
        nom
        slug
      }
      joves {
        nom
        slug
      }
      preparacioActeUnitari {
        nom
        slug
      }
    }
  }
`
