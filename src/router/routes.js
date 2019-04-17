const routes = [{
        path: '/',
        component: () =>
            import ('pages/Index.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('components/home/home.vue')
            },
            {
                path: 'discover',
                component: () =>
                    import ('components/discover/discover.vue')
            },
            {
                path: 'news',
                component: () =>
                    import ('components/news/news.vue')
            },
            {
                path: 'transaction',
                component: () =>
                    import ('components/transaction/transaction.vue')
            },
            {
                path: 'homepage',
                component: () =>
                    import ('components/homepage/homepage.vue'),
                children: [{
                    path: '/',
                    component: () =>
                        import ('components/homepage/pages/HRight.vue')
                }, {
                    path: 'h_people',
                    component: () =>
                        import ('components/homepage/pages/hPeople.vue')
                }, {
                    path: 'h_record',
                    component: () =>
                        import ('components/homepage/pages/hRecord.vue')
                }, {
                    path: 'h_setting',
                    component: () =>
                        import ('components/homepage/pages/hSetting.vue')
                }, {
                    path: 'zhanghushezhi',
                    component: () =>
                        import ('components/homepage/pages/zhanghushezhi.vue')
                }]
            }, {
                path: 'chuangjianjiaoyi',
                component: () =>
                    import ('components/chuangjianjiaoyi/chuangjianjiaoyi.vue')
            }, {
                path: 'jiaoyixinxi',
                component: () =>
                    import ('components/jiaoyixinxi/jiaoyixinxi.vue')
            }, {
                path: 'shenhe',
                component: () =>
                    import ('components/shenhe/shenhe.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () =>
            import ('components/login/Login.vue')
    }, {
        path: '/enroll',
        component: () =>
            import ('components/login/Enroll.vue')
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes