export default [
  {
    header: 'Activity',
  },
    {
        title: 'Analytics',
        route: 'charts-echart',
        icon: 'ActivityIcon',
    },
    {
        title: 'Clients/Partners',
        route: 'table-bs-table',
        icon: 'SmileIcon',
    },
    {
        title: 'Invoices',
        icon: 'DollarSignIcon',
        children: [
            {
                title: 'List',
                route: 'apps-invoice-list',
            },
            {
                title: 'Preview',
                route: { name: 'apps-invoice-preview', params: { id: 4987 } },
            },
            {
                title: 'Edit',
                route: { name: 'apps-invoice-edit', params: { id: 4987 } },
            },
            {
                title: 'New invoice',
                route: { name: 'apps-invoice-add' },
            },
        ],
    },
    {
        title: 'Todo',
        route: 'apps-todo',
        icon: 'CheckSquareIcon',
    },
]
