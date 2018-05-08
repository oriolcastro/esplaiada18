import React from 'react'
import Link from 'gatsby-link'

import { Container, Section, Content, Title } from 'bloomer'

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
      preparacioActeUnitari {
        nom
        slug
      }
    }
  }
`
