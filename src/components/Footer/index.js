import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Fet amb <Icon hasTextColor="danger" className="fa fa-heart" /> per
              a{' '}
              <a href="https://www.esplac.cat" target="_blank">
                Esplais Catalans
              </a>
            </p>
            <p>
              <Icon hasTextColor="primary" className="fa fa-code" />{' '}
              desenvolupat per{' '}
              <a href="https://okstudio.tech" target="_blank">
                OK! Studio
              </a>
            </p>
          </Column>
        </Columns>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
