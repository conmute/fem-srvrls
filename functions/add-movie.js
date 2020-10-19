// const { query } = require('./util/hasura')

const { query } = require("./util/hasura")

exports.handler = async (event) => {
    const variables = JSON.parse(event.body)
    const result = query({
        query: `
            mutation MyMutation($poster: String!, $id: String!, $tagline: String!, $title: String!) {
                insert_movies_one(object: {poster: $poster, id: $id, tagline: $tagline, title: $title}) {
                    id
                    title
                    tagline
                    poster
                }
            }
          
        `,
        variables,
    })
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    }
}
