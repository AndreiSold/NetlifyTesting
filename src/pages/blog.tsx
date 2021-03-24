import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteData } from 'react-static'
import { Post } from 'types'

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
