// 全局的一些基础常量
// const APIV1_GET = 'http://rap2api.taobao.org/app/mock/1375/GET/';
// const APIV1_POST = 'http://rap2api.taobao.org/app/mock/1375/POST/';
const APIV1_GET = 'http://interface.fa123.com';
const APIV1_POST = 'http://interface.fa123.com';

export default {
    name : 'Fa123 Admin',
    logo : '/logo.png',
    logo_small: '/logo_small.png',
    footerText : '法123后台管理系统 © 2018 枫玉科技',
    tableScrollX : 960, // 表格横向固定宽度
    APIV1_GET,
    APIV1_POST,
    // status
    LOADING : 'loading',
    SUCCESS : 'success',
    // 错误码
    ERR_OK : 0,
    // 所有api接口
    api : {
        // 用户列表接口 user
        userList: `${APIV1_GET}/admin/user/list`, // 用户列表
        userDetail: `${APIV1_GET}/admin/user/detail`, //用户详情
        userUpdate: `${APIV1_POST}/admin/user/update`, // 用户编辑
        userLogs: `${APIV1_GET}/admin/user/loginlogs`, // 用户登录日志
        // 首页接口 dashboard
        statistics: `${APIV1_GET}/admin/index/statistics`, // 总的数据统计接口
        logs: `${APIV1_GET}/admin/logs`, // 管理员日志
        tasks: `${APIV1_GET}/admin/index/task`, // 待办事项接口
        // 注册统计接口 userAnalysis
        regTotal: `${APIV1_GET}/admin/statistics/regtotal`, // 注册统计总数
        regList: `${APIV1_GET}/admin/statistics/reglist`, // 注册统计列表
        // 用户排行接口 rankUser
        userRecommendRank: `${APIV1_GET}/admin/statistics/recommendrank`, // 推荐量排名
        userReadRank: `${APIV1_GET}/admin/statistics/readrank`, // 被阅读量排名
        userFavoriteRank: `${APIV1_GET}/admin/statistics/storenum`, // 被收藏量排名
        // 分类排行接口 rankCategory
        categoryRecommendRank: `${APIV1_GET}/admin/statistics/type/recommendrank`, // 分类推荐量排名
        categoryReadRank: `${APIV1_GET}/admin/statistics/type/readrank`, // 分类阅读量排行
        categoryFavoriteRank: `${APIV1_GET}/admin/statistics/type/storenum`, // 分类收藏量排行
        // 文章排名接口 rankArticle
        articleReadRank: `${APIV1_GET}/admin/statistics/article/readrank`, // 文章阅读量排名
        articleFavoriteRank: `${APIV1_GET}/admin/statistics/article/storerank`, // 文章收藏量排名
        // 分类模块接口 category
        categoryAdd: `${APIV1_POST}/admin/sort/add`, // 添加分类
        categoryUpdate: `${APIV1_POST}/admin/sort/update`, // 编辑分类
        categoryList: `${APIV1_GET}/admin/sort/list`, // 分类列表
        categoryDetail: `${APIV1_GET}/admin/sort/detail`, // 分类详情
        // 菜单管理接口 menu
        menusAdd: `${APIV1_POST}/admin/menus/add`, // 添加菜单
        menusDetail: `${APIV1_GET}/admin/menus/detail`, // 菜单详情
        menusUpdate: `${APIV1_POST}/admin/menus/update`, // 编辑菜单
        menusList: `${APIV1_GET}/admin/menus/list`, // 菜单列表
        menusDelete: `${APIV1_GET}/admin/menus/delete`, // 删除菜单
        // 管理员接口 admin
        adminList: `${APIV1_GET}/admin/list`, // 管理员列表
        adminAdd: `${APIV1_POST}/admin/add`, // 添加管理员
        addminFreeze: `${APIV1_POST}/admin/freeze`, // 冻结管理员
        adminUpdate: `${APIV1_POST}/admin/update`, // 编辑管理员
        adminDetail: `${APIV1_GET}/admin/detail`, // 管理员详情
        // 角色管理接口 role
        roleList: `${APIV1_GET}/admin/roles/list`, // 角色列表
        roleAdd: `${APIV1_POST}/admin/roles/add`, // 添加角色
        roleUpdate: `${APIV1_POST}/admin/roles/update`, // 编辑角色
        roleDetail: `${APIV1_GET}/admin/roles/detail`, // 角色详情
        // 分配权限接口 permissionList
        permissionAssign: `${APIV1_POST}/admin/roles/assignment`, // 分配权限
        permissionOwn: `${APIV1_GET}/admin/roles/ownpermission`, // 查看角色下的所有权限
        // 权限管理接口 permission
        permissionAdd: `${APIV1_POST}/admin/permission/add`, // 添加权限
        permissionList: `${APIV1_GET}/admin/permission/list`, // 权限列表
        permissionDelete: `${APIV1_GET}/admin/permission/delete`, // 删除权限
        permissionUpdate: `${APIV1_POST}/admin/permission/update`, // 编辑权限
        // 导航管理接口 nav
        navAdd: `${APIV1_POST}/admin/nav/add`, // 添加导航
        navUpdate: `${APIV1_POST}/admin/nav/update`, // 编辑导航
        navDetail: `${APIV1_GET}/admin/nav/detail`, // 导航详情
        navList: `${APIV1_GET}/admin/nav/list`, // 导航列表
        navDelete: `${APIV1_POST}/admin/nav/delete`, // 删除导航
        // 内容管理模块 article
        articleList: `${APIV1_GET}/admin/article/list`, // 文章列表
        articleDetail: `${APIV1_GET}/admin/article/detail`, // 文章详情
        articleUpdate: `${APIV1_POST}/admin/article/update`, // 文章编辑
        articleAdd: `${APIV1_POST}/admin/article/add`, //添加文章
        articlePublish: `${APIV1_POST}/admin/article/publish`, // 发表文章
        // 内容反馈 article-feedback
        feedbackList: `${APIV1_GET}/admin/feedback/list`,  // 反馈列表
        feedbackHandle: `${APIV1_POST}/admin/feedback/deal`, // 处理反馈
        // 图片上传
        uploadImg: `${APIV1_POST}/file/upload`, // 图片上传 名字必须为file
        // 登录接口 login
        signIn: `${APIV1_POST}/admin/login`, // 登录
        // 退出登录 home
        signOut: `${APIV1_GET}/admin/logout` // 登出
    }
};
