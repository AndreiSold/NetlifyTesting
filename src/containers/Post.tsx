import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteData } from 'react-static'
import { Post } from '../../types'

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
