import { PostModel, TagModel } from '@/models'
import { getLanguage } from '@/i18n/utils'
import { slugfy } from '@/utils'
import { MDXInstance } from 'astro'

export const getPosts = (posts: Array<MDXInstance<any>>, language: string = 'en-US'): PostModel[] => {
  const lang = getLanguage(language)
  const allPosts = posts
    .filter((post: any) => post.frontmatter.language === lang)
    .map<PostModel>((post: any) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    tags: post.frontmatter.tags,
    date: new Date(post.frontmatter.date),
    url: post.url
  }))
    .sort((a: PostModel, b: PostModel) => b.date.valueOf() - a.date.valueOf())
  return allPosts
}

export const getTags = (posts: PostModel[]): TagModel[] => {
  const allTags: TagModel[] = posts.map(post => post.tags).reduce((allTags: TagModel[], tags: string[]) => {
    tags.forEach(tag => {
      const slug = slugfy(tag)
      const currentTag = allTags.find(t => t.slug === slug)
      if (currentTag != null) {
        currentTag.total += 1
      } else {
        allTags.push({ tag, slug, total: 1, selected: false })
      }
    })
    return allTags
  }, []).sort((a, b) => a.tag > b.tag ? 1 : -1)
  return allTags
}
