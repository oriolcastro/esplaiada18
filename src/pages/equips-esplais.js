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
  Button,
} from 'bloomer'

import Pageheader from '../components/Pageheader'

const EquipsEsplaisPage = ({ data }) => (
  <div>
    <Pageheader
      title="Equips d'esplais"
      subtitle="Coneix amb quins esplais fas les activitats"
    />
    <Section>
      <Container isFluid />
      {data.allContentfulEquipsEsplais.edges.map(({ node }, i) => (
        <Box key={node.id}>
          <Title isSize="4">{node.titol}</Title>
          <Columns isMultiline isMobile>
            {node.esplais.map((esplai, i) => (
              <Column isSize="1/2" key={i}>
                <Columns isMobile isGapless isMarginless>
                  <Column isSize="1/3">
                    <Icon className="fa fa-group has-text-primary" />
                  </Column>
                  <Column>
                    <p>{esplai}</p>
                  </Column>
                </Columns>
              </Column>
            ))}
            <Column>
              <Link to={node.slug}>
                <Button isColor="primary" isDisplay="flex">
                  <p>Tota la informació de l'{node.titol}</p>
                  <Icon className="fa fa-chevron-right" />
                </Button>
              </Link>
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
          slug
          esplais
        }
      }
    }
  }
`
