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
import HorariList from '../components/HorariList'

const SchedulePage = ({ data }) => (
  <div>
    <Pageheader title="Horari" subtitle="Tot el programa del cap de setmana" />
    <Section>
      <Title isSize="4">Divendres 11</Title>
      <Container isFluid>
        {data.allContentfulHorari.edges.map(({ node }) => {
          const dia = `${node.dia}`
          if (dia === 'divendres') {
            return (
              <HorariList
                key={node.id}
                titol={node.titol}
                horaInici={node.horaInici}
                hasubicaciosimple={node.hasubicaciosimple}
                ubicacioMultiple={node.ubicacioMultiple}
                ubicacioSimple={node.ubicacioSimple}
                hasbutton={node.hasbutton}
                buttontext={node.buttonText}
                buttonlink={node.buttonLink}
                h
              />
            )
          } else {
            return
          }
        })}
      </Container>
    </Section>

    <Section>
      <Title isSize="4">Dissabte 12</Title>
      <Container isFluid>
        {data.allContentfulHorari.edges.map(({ node }) => {
          const dia = `${node.dia}`
          if (dia === 'dissabte') {
            return (
              <HorariList
                key={node.id}
                titol={node.titol}
                horaInici={node.horaInici}
                hasubicaciosimple={node.hasubicaciosimple}
                ubicacioMultiple={node.ubicacioMultiple}
                ubicacioSimple={node.ubicacioSimple}
                hasbutton={node.hasbutton}
                buttontext={node.buttonText}
                buttonlink={node.buttonLink}
              />
            )
          } else {
            return
          }
        })}
      </Container>
    </Section>

    <Section>
      <Title isSize="4">Diumenge 13</Title>
      <Container isFluid>
        {data.allContentfulHorari.edges.map(({ node }) => {
          const dia = `${node.dia}`
          if (dia === 'diumenge') {
            return (
              <HorariList
                key={node.id}
                titol={node.titol}
                horaInici={node.horaInici}
                hasubicaciosimple={node.hasubicaciosimple}
                ubicacioMultiple={node.ubicacioMultiple}
                ubicacioSimple={node.ubicacioSimple}
                hasbutton={node.hasbutton}
                buttontext={node.buttonText}
                buttonlink={node.buttonLink}
              />
            )
          } else {
            return
          }
        })}
      </Container>
    </Section>
  </div>
)

export default SchedulePage

export const query = graphql`
  query ActivitatsListQuery {
    allContentfulHorari(sort: { fields: [horaInici], order: ASC }) {
      edges {
        node {
          ...HorariListFragment
        }
      }
    }
  }
`
