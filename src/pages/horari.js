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
  Subtitle,
} from 'bloomer'

import Pageheader from '../components/Pageheader'

const SchedulePage = ({ data }) => (
  <div>
    <Pageheader title="Horari" subtitle="Tot el programa del cap de setmana" />
    <Section>
      <Container isFluid>
        <Title isSize="4">Divendres 11</Title>
        {data.allDatoCmsActivitat.edges.map(({ node }, index) => (
          <Box>
            <Columns isMobile>
              <Column isSize={3}>
                <p>{node.horaInici} h</p>
              </Column>
              <Column>
                <Title isSize="5">{node.titol}</Title>
                <Subtitle isSize="6">LLOC</Subtitle>
              </Column>
              <Column isSize={2}>
                <Tag isColor="success">Test</Tag>
              </Column>
            </Columns>
          </Box>
        ))}

        <Title isSize="4">Dissabte 12</Title>
        <Box>A simple box</Box>
        <Box>A simple box</Box>
        <Title isSize="4">Diumenge 13</Title>
        <Box>A simple box</Box>
        <Box>A simple box</Box>
      </Container>
    </Section>
  </div>
)

export default SchedulePage

export const query = graphql`
  query ActivitatsListQuery {
    allDatoCmsActivitat {
      edges {
        node {
          titol
          horaInici(formatString: "HH.mm")
          descripcio
        }
      }
    }
  }
`
