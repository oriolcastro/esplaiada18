import React from 'react'

import { Box, Tag, Columns, Column, Title, Subtitle } from 'bloomer'

const HorariList = ({ props: { titol, horaInici, descripcio, dia } }) => {
  return (
    <Box>
      <Columns isMobile>
        <Column isSize={3}>
          <p>{horaInici} h</p>
        </Column>
        <Column>
          <Title isSize="5">{titol}</Title>
          <Subtitle isSize="6">LLOC</Subtitle>
        </Column>
        <Column isSize={2}>
          <Tag isColor="success">Test</Tag>
        </Column>
      </Columns>
    </Box>
  )
}

export default HorariList

export const query = graphql`
  fragment HorariListFragment on DatoCmsActivitat {
    titol
    horaInici(formatString: "HH.mm")
    descripcio
    dia
  }
`
