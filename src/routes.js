import Detail from '@/views/detail/Detail'

export default [
    { path: '', redirect: '/home' },
    { path: '/home', component: () => import('@/views/home/Home') },
    { path: '/category', component: () => import('@/views/category/Category') },
    { path: '/cart', component: () => import('@/views/cart/Cart') },
    { path: '/profile', component: () => import('@/views/profile/Profile') },
    { path: '/detail/:iid', component: Detail }


]