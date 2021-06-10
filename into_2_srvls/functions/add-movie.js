// const { query } = require('./util/hasura')

const { query } = require("./util/hasura")

exports.handler = async (event, context) => {
    const { user } = context.clientContext
    const isLoggedIn = user && user.app_metadata;
    const roles = user.app_metadata.roles || []
    const variables = JSON.parse(event.body)

    if (!isLoggedIn || !roles.includes('admin')) {
        return {
            statusCode: 401,
            body: 'Unauthorized',
        }
    }

    const result = await query({
        query: `
            mutation ($poster: String!, $id: String!, $tagline: String!, $title: String!) {
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
