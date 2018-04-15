import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Subtitle } from 'bloomer'

const PageHeader = props => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </div>
  )

}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader
