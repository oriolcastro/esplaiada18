import React from 'react'
import PropTypes from 'prop-types'

import { Title, Subtitle, Hero, HeroBody, Container } from 'bloomer'

const PageHeader = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="medium">
        <HeroBody>
          <Container hasTextAlign="left">
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader
