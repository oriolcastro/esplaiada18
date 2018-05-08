import React from 'react'
import { Footer, Container, Content, Columns, Column } from 'bloomer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import FaCode from 'react-icons/lib/fa/code'
import FaHeart from 'react-icons/lib/fa/heart'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Fet amb <FaHeart height="1.25em" width="1.25em" fill="red" /> per
              a{' '}
              <OutboundLink
                href="https://www.esplac.cat"
                target="_blank"
                rel="noopener"
              >
                Esplais Catalans
              </OutboundLink>
            </p>
            <p>
              <FaCode height="1.25em" width="1.25em" fill="#00A2A7" />{' '}
              desenvolupat per{' '}
              <OutboundLink
                href="https://okstudio.tech"
                target="_blank"
                rel="noopener"
              >
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
