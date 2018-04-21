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
  Content,
  Title,
  Subtitle,
} from 'bloomer'

import Pageheader from '../components/Pageheader'
import MapContainer from '../components/MapContainer'

const MapPage = ({ data }) => (
  <div>
    <Pageheader
      title="Espais"
      subtitle="Descobreix els espais de l'Esplaiada"
    />
    <Section>
      {data.allDatoCmsLloc.edges.map(({ node }, index) => (
        <Box key={index}>
          <Columns>
            <Column>
              <Link to={node.slug}>
                <Title isSize="5">{node.nom}</Title>
              </Link>
            </Column>
            <Column>
              {node.categoriaEspai.map((category, index) => (
                <Tag key={index} isColor={category.color}>
                  {category.titol}
                </Tag>
              ))}
            </Column>
          </Columns>
        </Box>
      ))}
    </Section>
  </div>
)

export default MapPage

export const query = graphql`
  query AllotjamentListQuery {
    allDatoCmsLloc {
      edges {
        node {
          nom
          slug
          categoriaEspai {
            id
            titol
            color
          }
        }
      }
    }
  }
`
