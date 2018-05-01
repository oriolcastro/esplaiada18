import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import {
  Box,
  Tag,
  Columns,
  Column,
  Title,
  Subtitle,
  Button,
  Icon,
} from 'bloomer'

const HorariList = props => {
  return (
    <Box>
      <Columns isMobile>
        <Column isSize={3}>
          <p>{props.horaInici}h</p>
        </Column>
        <Column>
          <Title isSize="5">{props.titol}</Title>
          {props.hasubicaciosimple ? (
            <Subtitle isSize="6">
              <Link to={`/${props.ubicacioSimple.slug}`}>
                {props.ubicacioSimple.nom}
              </Link>
            </Subtitle>
          ) : (
            <Subtitle isSize="6">{props.ubicacioMultiple}</Subtitle>
          )}
        </Column>
      </Columns>
      {props.hasbutton && (
        <Columns isMobile>
          <Column>
            <Link to={props.buttonLink}>
              <Button isColor="primary" isPulled="right">
                <p>{props.buttonText}</p>
                <Icon className="fa fa-chevron-right" />
              </Button>
            </Link>
          </Column>
        </Columns>
      )}
    </Box>
  )
}

HorariList.propTypes = {
  titol: PropTypes.string,
  horaInici: PropTypes.string,
  hasubicaciosimple: PropTypes.bolean,
  ubicacioMultiple: PropTypes.string,
  ubicacioSimple: PropTypes.object,
  hasbutton: PropTypes.bolean,
  buttontext: PropTypes.string,
  buttonlink: PropTypes.string,
}
export default HorariList

export const query = graphql`
  fragment HorariListFragment on ContentfulHorari {
    titol
    horaInici(formatString: "HH.mm")
    dia
    hasubicaciosimple
    ubicacioMultiple
    ubicacioSimple {
      nom
      slug
    }
    hasbutton
    buttonText
    buttonLink
  }
`
