module.exports = {
    client: {
        tagName: 'graphql',
        service: {
            name: 'gatsby-starter',
            localSchemaFile: 'schema.graphql',
        },
        includes: ['src/**/*.tsx'],
        excludes: ['src/generated/graphql.tsx'],
    },
};
