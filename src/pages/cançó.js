import React from 'react'
import Link from 'gatsby-link'

import { Section, Container, Box, Tag, Icon, Columns, Column } from 'bloomer'

import Pageheader from '../components/Pageheader'
import Videocontainer from '../components/VideoContainer'

const SongPage = () => (
  <div>
    <Pageheader title="La Cançó" subtitle="Som capaces de tot!" />
    <Section>
      <Videocontainer />
    </Section>
  </div>
)

export default SongPage
