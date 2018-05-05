/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
//Crea les pàgines dels LLOCS en fer build

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const loadEspais = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEspais {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulEspais.edges.map(({ node: lloc }) => {
        createPage({
          path: `/${lloc.slug}`,
          component: path.resolve(`./src/templates/lloc.js`),
          context: {
            slug: lloc.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEquips = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEquipsEsplais {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulEquipsEsplais.edges.map(({ node: equip }) => {
        createPage({
          path: `/${equip.slug}`,
          component: path.resolve(`./src/templates/equipesplai.js`),
          context: {
            slug: equip.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadEspais, loadEquips])
}
