export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60140482b86a75f7c942ea03',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9dxsm2m3',
                  apiId: '7b44bda6-2f69-4dfd-b410-67f69bfb5ad9'
                },
                {
                  buildHookId: '60140482b69cdc0634148916',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ogh8zj9f',
                  apiId: 'b00b9ccd-e569-48bd-8dbd-71fed9c60d05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kyouma78/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ogh8zj9f.netlify.app', category: 'apps'}
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
