import React from 'react'
import Link from 'gatsby-link'

import { Section, Container, Box, Tag, Icon, Columns, Column } from 'bloomer'

import Pageheader from '../components/Pageheader'
import MapContainer from '../components/MapContainer'

const MapPage = () => (
  <div>
    <Pageheader title="Mapa" subtitle="Descobreix els espais de l'Esplaiada" />

    <Section>
      <Container isFluid>
        <MapContainer />
      </Container>
    </Section>
  </div>
)

export default MapPage
