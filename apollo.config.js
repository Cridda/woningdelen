module.exports = {
    client: {
        tagName: 'graphql',
        service: {
            name: 'gatsby-starter',
            localSchemaFile: 'schema.graphql',
        },
        includes: ['src/**/*.{ts,tsx}' ],
        excludes: ['src/generated/graphql.tsx'],
    },
};
