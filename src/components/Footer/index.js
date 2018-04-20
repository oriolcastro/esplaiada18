import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Fet amb <Icon hasTextColor="danger" className="fa fa-heart" /> per
              a{' '}
              <OutboundLink href="https://www.esplac.cat" target="_blank">
                Esplais Catalans
              </OutboundLink>
            </p>
            <p>
              <Icon hasTextColor="primary" className="fa fa-code" />{' '}
              desenvolupat per{' '}
              <OutboundLink href="https://okstudio.tech" target="_blank">
                OK! Studio
              </OutboundLink>
            </p>
          </Column>
        </Columns>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
