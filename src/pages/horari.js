import React from 'react'
import Link from 'gatsby-link'

import { Container, Box, Tag, Icon, Columns, Column, Title, Subtitle } from 'bloomer'

import Pageheader from '../components/Pageheader'

const SchedulePage = () => (
  <Container isFluid>
    <Pageheader title='Horaris' subtitle='Consulta el programa del cap de setmana'></Pageheader>
    <Title isSize='4'>Divendres 11</Title>
    <Box>
      <Columns isMobile>
        <Column isSize={3}>
          <p>19.00 h</p>
        </Column>
        <Column>
          <Title isSize='5'>Arribada joves</Title>
          <Subtitle isSize='6'>Casal Parroquial</Subtitle>
        </Column>
        <Column isSize={2}>
          <Tag isColor='success'>Test</Tag>
        </Column>
      </Columns>
    </Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Title isSize='4'>Dissabte 12</Title>

    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Title isSize='4'>Diumenge 13</Title>

    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>
    <Box>A simple box</Box>

  </Container>


)

export default SchedulePage
