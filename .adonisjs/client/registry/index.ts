/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'notes.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/notes',
    tokens: [{"old":"/api/v1/notes","type":0,"val":"api","end":""},{"old":"/api/v1/notes","type":0,"val":"v1","end":""},{"old":"/api/v1/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['notes.index']['types'],
  },
  'notes.store': {
    methods: ["POST"],
    pattern: '/api/v1/notes',
    tokens: [{"old":"/api/v1/notes","type":0,"val":"api","end":""},{"old":"/api/v1/notes","type":0,"val":"v1","end":""},{"old":"/api/v1/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['notes.store']['types'],
  },
  'notes.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/notes/:id',
    tokens: [{"old":"/api/v1/notes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['notes.show']['types'],
  },
  'notes.update': {
    methods: ["PUT"],
    pattern: '/api/v1/notes/:id',
    tokens: [{"old":"/api/v1/notes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['notes.update']['types'],
  },
  'notes.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/notes/:id',
    tokens: [{"old":"/api/v1/notes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['notes.destroy']['types'],
  },
  'notes.sync_tags': {
    methods: ["POST"],
    pattern: '/api/v1/notes/:id/tags',
    tokens: [{"old":"/api/v1/notes/:id/tags","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id/tags","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id/tags","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id/tags","type":1,"val":"id","end":""},{"old":"/api/v1/notes/:id/tags","type":0,"val":"tags","end":""}],
    types: placeholder as Registry['notes.sync_tags']['types'],
  },
  'comments.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/notes/:id/comments',
    tokens: [{"old":"/api/v1/notes/:id/comments","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id/comments","type":1,"val":"id","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"comments","end":""}],
    types: placeholder as Registry['comments.index']['types'],
  },
  'comments.store': {
    methods: ["POST"],
    pattern: '/api/v1/notes/:id/comments',
    tokens: [{"old":"/api/v1/notes/:id/comments","type":0,"val":"api","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"v1","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"notes","end":""},{"old":"/api/v1/notes/:id/comments","type":1,"val":"id","end":""},{"old":"/api/v1/notes/:id/comments","type":0,"val":"comments","end":""}],
    types: placeholder as Registry['comments.store']['types'],
  },
  'comments.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/comments/:id',
    tokens: [{"old":"/api/v1/comments/:id","type":0,"val":"api","end":""},{"old":"/api/v1/comments/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/comments/:id","type":0,"val":"comments","end":""},{"old":"/api/v1/comments/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['comments.destroy']['types'],
  },
  'categories.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/categories',
    tokens: [{"old":"/api/v1/categories","type":0,"val":"api","end":""},{"old":"/api/v1/categories","type":0,"val":"v1","end":""},{"old":"/api/v1/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.index']['types'],
  },
  'categories.store': {
    methods: ["POST"],
    pattern: '/api/v1/categories',
    tokens: [{"old":"/api/v1/categories","type":0,"val":"api","end":""},{"old":"/api/v1/categories","type":0,"val":"v1","end":""},{"old":"/api/v1/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.store']['types'],
  },
  'categories.update': {
    methods: ["PUT"],
    pattern: '/api/v1/categories/:id',
    tokens: [{"old":"/api/v1/categories/:id","type":0,"val":"api","end":""},{"old":"/api/v1/categories/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/categories/:id","type":0,"val":"categories","end":""},{"old":"/api/v1/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categories.update']['types'],
  },
  'categories.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/categories/:id',
    tokens: [{"old":"/api/v1/categories/:id","type":0,"val":"api","end":""},{"old":"/api/v1/categories/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/categories/:id","type":0,"val":"categories","end":""},{"old":"/api/v1/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categories.destroy']['types'],
  },
  'tags.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/tags',
    tokens: [{"old":"/api/v1/tags","type":0,"val":"api","end":""},{"old":"/api/v1/tags","type":0,"val":"v1","end":""},{"old":"/api/v1/tags","type":0,"val":"tags","end":""}],
    types: placeholder as Registry['tags.index']['types'],
  },
  'tags.store': {
    methods: ["POST"],
    pattern: '/api/v1/tags',
    tokens: [{"old":"/api/v1/tags","type":0,"val":"api","end":""},{"old":"/api/v1/tags","type":0,"val":"v1","end":""},{"old":"/api/v1/tags","type":0,"val":"tags","end":""}],
    types: placeholder as Registry['tags.store']['types'],
  },
  'tags.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/tags/:id',
    tokens: [{"old":"/api/v1/tags/:id","type":0,"val":"api","end":""},{"old":"/api/v1/tags/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/tags/:id","type":0,"val":"tags","end":""},{"old":"/api/v1/tags/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['tags.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
