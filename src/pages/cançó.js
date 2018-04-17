import React from 'react'
import Link from 'gatsby-link'

import { Section, Container, Box, Tag, Icon, Columns, Column } from 'bloomer'

import Pageheader from '../components/Pageheader'

const SongPage = () => (
  <div>
    <Pageheader title='La Cançó' subtitle="L'energia de l'Esplai uoooo uooo!!!"></Pageheader>
    
    <Section>
      <Container isFluid>
        <Box>A simple box</Box>
        <Box>A simple box</Box>
      </Container>
    </Section>
  </div>

)

export default SongPage
