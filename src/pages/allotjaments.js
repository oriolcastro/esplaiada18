import React from 'react'
import Link from 'gatsby-link'
import { Section, Box, Content, Title } from 'bloomer'

import Pageheader from '../components/Pageheader'

const AllotjamentsPage = ({ data }) => (
  <div>
    <Pageheader
      title="Allotjaments"
      subtitle="Espais assignats als esplais per a dormir"
    />
    <Section>
      <Content className="has-text-justified">
        <p>
          A continuació podreu trobar quins grups d'edat i de quins esplais són
          els que dormen als diferents equipaments designats com allotjament.
        </p>
      </Content>
      {data.allContentfulEspais.edges.map(({ node }, id) => (
        <Box key={node.id}>
          <Title isSize="5">
            <Link to={node.slug}>{node.nom}</Link>
          </Title>

          <Content>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html: node.quiHiDorm.childMarkdownRemark.html,
              }}
            />
          </Content>
        </Box>
      ))}
    </Section>
  </div>
)

export default AllotjamentsPage

export const query = graphql`
  query AllotjamentsPageQuery {
    allContentfulEspais(
      filter: { categoriaEspai: { titol: { eq: "Allotjament" } } }
      sort: { fields: [nom], order: ASC }
    ) {
      edges {
        node {
          nom
          slug
          quiHiDorm {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
