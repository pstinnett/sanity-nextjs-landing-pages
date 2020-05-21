export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ec6e9c6fbfdbe5877c0f003',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qbreuejk',
                  apiId: '1da763a8-35e5-4927-9f61-5e705c13c61c'
                },
                {
                  buildHookId: '5ec6e9c74499f3c064724ce6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nbgcxrkn',
                  apiId: 'e3f08022-bc0a-459f-9bc1-c46815bc3876'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pstinnett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nbgcxrkn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
