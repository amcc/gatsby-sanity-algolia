export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d86b3806da4e197e7ab0e72',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-58b2vb9h',
                  apiId: 'a4faa7d3-1cf5-45b4-b998-1485ec52b45f'
                },
                {
                  buildHookId: '5d86b380dc146fd0a774321b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eum54ydk',
                  apiId: '849462ea-fbb1-47b0-8548-93e303a857a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amcc/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eum54ydk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
