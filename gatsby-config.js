'use strict';

module.exports = {
    siteMetadata: {
        title: 'cridda-gatsby-starter',
        description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
        keywords: 'gatsbyjs, gatsby, javascript, sample, codegenerator',
        siteUrl: 'https://cridda-gatsby-starter.netlify.com',
        author: {
            name: 'Chris Neven',
            url: 'https://twitter.com/chrisneven',
            email: 'c.k.neven@live.nl',
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
            },
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};
