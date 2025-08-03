// export const backendUrls = {
//   post: {
//     list: '/posts',
//     postDetails: '/posts/:id'
//   },
//   promo: {
//     title: '/title',
//     marquee: '/marquee'
//   }
// } as const

import { createRoute } from '@shared/configs/routes'

export const endpoints = {
  postList: '/posts',
  postDetails: (id: string) => createRoute('/posts/:id', { id }),
  mainPromo: '/home-page-content/',
  services: '/services/',
  servicesDetails: (slug: string) => createRoute('/services/:slug', { slug })
} as const
