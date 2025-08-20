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
  homePageContent: '/home-page-content/',
  services: '/services/',
  sendRequest: '/project-request/',
  serviceDetails: (slug: string) => createRoute('/services/:slug', { slug }),
  siteSettings: '/site-settings/',
  technologies: '/technologies/'
} as const
