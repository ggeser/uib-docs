export default [
    // {
    //     path: '/',
    //     name: 'docs',
    //     component: () => import('@/views/1-uib-docs/docs/KnowledgeBase.vue'),
    //     meta: {
    //         layout: 'full',
    //     },
    // },
    {
        path: '/docs',
        name: 'docs',
        component: () => import('@/views/1-uib-docs/docs/KnowledgeBase.vue'),
        meta: {
             // layout: 'full',
        },
    },
    {
        path: '/master',
        name: 'master',
        component: () => import('@/views/1-uib-docs/master/FormWizard.vue'),
        meta: {
            // layout: 'full',
        },
    },
    // {
    //   path: '/dashboard/ecommerce',
    //   name: 'dashboard-ecommerce',
    //   component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    // },

    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/views/error/Error404.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            action: 'read',
        },
    },
]
