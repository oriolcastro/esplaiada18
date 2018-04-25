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
  Button,
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
          <Columns isMobile>
            <Column isSize="12">
              <Title isSize="5">{node.nom}</Title>
            </Column>
          </Columns>
          <Columns isMobile isVCentered>
            <Column isSize="3/4">
              <p>Que hi pots trobar?</p>
              {node.categoriaEspai.map((category, index) => (
                <Tag key={index} isColor={category.color}>
                  {category.titol}
                </Tag>
              ))}
            </Column>
            <Column>
              <Link to={node.slug}>
                <Button isColor="primary" isOutlined>
                  +Info
                </Button>
              </Link>
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
