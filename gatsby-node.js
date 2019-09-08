const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js') 

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  html,
                  frontmatter {
                    path,
                    videoUrl,
                    title,
                    excerpt
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {

          const {path, videoUrl, title, excerpt, imagePostUrl } = node.frontmatter;
          const html = node.html;

          createPage({
            path,
            component: blogPostTemplate,
            context: {
              html,
              title,
              excerpt,
              videoUrl,
              imagePostUrl,
              pathSlug: path
            }
          })
          resolve()
        })
      })
    )
  })
})