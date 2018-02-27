export default [
    {
        menu_id: 1,
        name: 'Dashboard',
        link: '/dashboard',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
    },
    {
        menu_id: 2,
        name: '分类管理',
        link: '/category',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
    },
    {
        menu_id: 3,
        name: '内容管理',
        link: '',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
        children: [
            {
                menu_id: 4,
                name: '已审核文章',
                link: '/article-checked',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 5,
                name: '待审核文章',
                link: '/article-pending',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 6,
                name: '已删除文章',
                link: '/article-deleted',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 7,
                name: '内容反馈',
                link: '/article-feedback',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            }
        ]
    },
    {
        menu_id: 8,
        name: '用户管理',
        link: '',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
        children: [
            {
                menu_id: 9,
                name: '用户列表',
                link: '/user',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 10,
                name: '认证审核',
                link: '/user-authentication',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            }
        ]
    },
    {
        menu_id: 11,
        name: '数据统计',
        link: '',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
        children: [
            {
                menu_id: 12,
                name: '注册统计',
                link: '/user-analysis',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 13,
                name: '用户排行',
                link: '/rank-user',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 14,
                name: '分类排行',
                link: '/rank-category',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 15,
                name: '文章排行',
                link: '/rank-article',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            }
        ]
    },
    {
        menu_id: 16,
        name: '网站设置',
        link: '',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
        children: [
            {
                menu_id: 17,
                name: '菜单管理',
                link: '/menu',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 18,
                name: '管理员管理',
                link: '/admin',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 19,
                name: '角色管理',
                link: '/role',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 20,
                name: '权限管理',
                link: '/permission',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            },
            {
                menu_id: 21,
                name: '广告',
                link: '/ad',
                type: 1,
                icon: 'dashboard',
                status: 1,
                pid: 1
            }
        ]
    },
    {
        menu_id: 22,
        name: '导航管理',
        link: '/nav',
        type: 1,
        icon: 'dashboard',
        status: 1,
        pid: 0,
    }
];
