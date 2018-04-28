import React from 'react'
import Link from 'gatsby-link'

import { Section, Container, Box, Tag, Icon, Columns, Column } from 'bloomer'

import Pageheader from '../components/Pageheader'

const DocPage = () => (
  <div>
    <Pageheader
      title="Documentació"
      subtitle="Tingues sempre a ma els documents més importants per sobreviure a l'Esplaiada"
    />

    <Section>
      <Container isFluid />
    </Section>
  </div>
)

export default DocPage
