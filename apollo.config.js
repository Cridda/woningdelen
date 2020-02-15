module.exports = {
    client: {
        tagName: 'graphql',
        service: {
            name: 'gatsby-starter',
            localSchemaFile: 'schema.graphql',
        },
        includes: ['src/**/*.{ts,tsx}', 'node_modules/gatsby-transformer-sharp/src/fragments.js'],
        excludes: ['src/generated/graphql.tsx'],
    },
};
