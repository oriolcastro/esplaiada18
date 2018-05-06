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

const EquipEsplai = ({ data }) => {
  return (
    <div>
      <Pageheader
        title={data.contentfulEquipsEsplais.titol}
        subtitle={data.contentfulEquipsEsplais.esplais.join(', ')}
      />
      <Section>
        <Title isSize="5">Espais assignats per a fer les activitats</Title>
        <Container>
          {data.contentfulEquipsEsplais.espaisActivitats.map((espai, id) => (
            <Content>
              <Link to={espai.slug}>{espai.nom}</Link>
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{
                  __html: espai.quiHiFaActivitat.childMarkdownRemark.html,
                }}
              />
            </Content>
          ))}
          {/* <ul>
            <li>
              Xics:{' '}
              <Link to={data.contentfulEquipsEsplais.xics.slug}>
            {data.contentfulEquipsEsplais.xics.nom}
              </Link>
            </li>
            <li>
              Petits:{' '}
              <Link to={data.contentfulEquipsEsplais.petits.slug}>
            {data.contentfulEquipsEsplais.petits.nom}
              </Link>
            </li>
            <li>
              Mitjans:{' '}
              <Link to={data.contentfulEquipsEsplais.mitjans.slug}>
            {data.contentfulEquipsEsplais.mitjans.nom}
              </Link>
            </li>
            <li>
              Grans:{' '}
              <Link to={data.contentfulEquipsEsplais.grans.slug}>
            {data.contentfulEquipsEsplais.grans.nom}
              </Link>
            </li>
            <li>
              Joves:{' '}
              <Link to={data.contentfulEquipsEsplais.joves.slug}>
            {data.contentfulEquipsEsplais.joves.nom}
              </Link>
            </li>
          </ul> */}

          <Title isSize="5">Espai de preparació de l'acte unitari</Title>
          <Content>
            <p>
              Els esplais de l'{data.contentfulEquipsEsplais.titol} heu d'anar a
              <Link
                to={data.contentfulEquipsEsplais.preparacioActeUnitari.slug}
              >
                {' '}
                {data.contentfulEquipsEsplais.preparacioActeUnitari.nom}
              </Link>
            </p>
          </Content>
        </Container>
      </Section>
    </div>
  )
}

export default EquipEsplai

export const query = graphql`
  query EquipQuery($slug: String!) {
    contentfulEquipsEsplais(slug: { eq: $slug }) {
      titol
      esplais
      espaisActivitats {
        nom
        slug
        quiHiFaActivitat {
          childMarkdownRemark {
            html
          }
        }
      }
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
