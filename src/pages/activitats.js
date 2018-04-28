import React from 'react'
import Link from 'gatsby-link'

import { Section, Container, Box, Tag, Icon, Columns, Column } from 'bloomer'

import Pageheader from '../components/Pageheader'

const ActivitiesPage = () => (
  <div>
    <Pageheader
      title="Activitats"
      subtitle="Coneix amb quins esplais comviuràs i no perdis cap activitat"
    />
    <Section>
      <Container isFluid />
    </Section>
  </div>
)

export default ActivitiesPage
