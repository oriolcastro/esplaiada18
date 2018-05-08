import React from 'react'
import Link from 'gatsby-link'
import FaGroup from 'react-icons/lib/fa/group'

import {
  Section,
  Container,
  Box,
  Columns,
  Column,
  Title,
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
                    <span className="my-icon-container">
                      <FaGroup height="1.25em" width="1.25em" fill="#00A2A7" />
                    </span>
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
