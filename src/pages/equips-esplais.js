import React from 'react'
import Link from 'gatsby-link'

import {
  Section,
  Container,
  Box,
  Tag,
  Icon,
  Columns,
  Column,
  Title,
  Content,
} from 'bloomer'

import Pageheader from '../components/Pageheader'

const EquipsEsplaisPage = ({ data }) => (
  <div>
    <Pageheader
      title="Equips d'Esplais"
      subtitle="Coneix amb quins esplais fas les activitats"
    />
    <Section>
      <Container isFluid />
      {data.allContentfulEquipsEsplais.edges.map(({ node }, i) => (
        <Box key={node.id}>
          <Title isSize="4">{node.titol}</Title>
          <Columns>
            <Column>
              <Title isSize="6">Esplais:</Title>
              <Content>
                <ul>
                  {node.esplais.map((esplai, i) => <li key={i}>{esplai}</li>)}
                </ul>
              </Content>
            </Column>
            <Column>
              <Title isSize="6">On dormir:</Title>
              <Content>
                <p>
                  Xics: <Link to={node.xics.slug}>{node.xics.nom}</Link>
                </p>
                <p>
                  Petits: <Link to={node.petits.slug}>{node.petits.nom}</Link>
                </p>
                <p>
                  Mitjans:{' '}
                  <Link to={node.mitjans.slug}>{node.mitjans.nom}</Link>
                </p>
                <p>
                  Grans: <Link to={node.grans.slug}>{node.grans.nom}</Link>
                </p>
                <p>
                  Joves: <Link to={node.joves.slug}>{node.joves.nom}</Link>
                </p>
                <p>
                  Xics: <Link to={node.xics.slug}>{node.xics.nom}</Link>
                </p>
              </Content>
            </Column>
            <Column>
              <Title isSize="6">Espai de preparació de l'acte unitari</Title>
              <Content>
                <p>
                  <Link to={node.preparacioActeUnitari.slug}>
                    {node.preparacioActeUnitari.nom}
                  </Link>
                </p>
              </Content>
            </Column>
          </Columns>
        </Box>
      ))}
    </Section>
  </div>
)

export default EquipsEsplaisPage

export const query = graphql`
  query EquipsPageQuery {
    allContentfulEquipsEsplais(sort: { fields: [titol], order: ASC }) {
      edges {
        node {
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
    }
  }
`
