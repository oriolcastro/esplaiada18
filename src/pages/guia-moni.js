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
  Content,
} from 'bloomer'

import Pageheader from '../components/Pageheader'

const GuiaMoniPage = () => (
  <div>
    <Pageheader
      title="Guia de la moni"
      subtitle="Per al bon funcionament de l'Esplaiada..."
    />

    <Section>
      <Container isFluid>
        <Content>
          <p class="has-text-justified">
            El bon funcionament de l'Esplaiada requereix de la implicació de
            tots i totes! Per això, a més dels gairebé600 monis que acompanyareu
            als infants i joves dels vostres esplais hi haurà:
          </p>
        </Content>
      </Container>
    </Section>
  </div>
)

export default GuiaMoniPage
