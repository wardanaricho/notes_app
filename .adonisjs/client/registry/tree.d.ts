/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  notes: {
    index: typeof routes['notes.index']
    store: typeof routes['notes.store']
    show: typeof routes['notes.show']
    update: typeof routes['notes.update']
    destroy: typeof routes['notes.destroy']
    syncTags: typeof routes['notes.sync_tags']
  }
  comments: {
    index: typeof routes['comments.index']
    store: typeof routes['comments.store']
    destroy: typeof routes['comments.destroy']
  }
  categories: {
    index: typeof routes['categories.index']
    store: typeof routes['categories.store']
    update: typeof routes['categories.update']
    destroy: typeof routes['categories.destroy']
  }
  tags: {
    index: typeof routes['tags.index']
    store: typeof routes['tags.store']
    destroy: typeof routes['tags.destroy']
  }
}
