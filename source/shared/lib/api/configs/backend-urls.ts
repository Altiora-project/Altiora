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
  serviceCards: '/service-cards',
  mainPromo: '/home-page-content/',
  services: '/services/',
  sendRequest: '/project-request/',
  videoFeature: '/video-feature/',
  serviceDetails: (slug: string) => createRoute('/services/:slug', { slug }),
  technologies: '/technologies/'
} as const
