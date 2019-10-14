export default {
    path: '/shop',
    name:'ShopIndex',
    component: resolve => require(['@/pages/shop/shop'], resolve),
    meta:{
        title:'shop页面'
    }
};
