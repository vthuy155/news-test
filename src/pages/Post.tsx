import React from 'react'
import BannerPost from '../components/client/BannerPost'
import Posts from '../components/client/Posts'

type Props = {}

const Post = (props: Props) => {
  return (
    <div>
        <BannerPost/>
        <Posts/>
    </div>
  )
}

export default Post