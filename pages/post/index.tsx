import axios from 'axios'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import Post from './[pid]'
import { PostType } from './_types'

const PostList: NextPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
      {posts.map((post: PostType) => (
        <Post post={post}/>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://api.vvhan.com/api/hotlist?type=huPu')
  const posts: PostType[] = res.data.data
  console.log(process.env.DB_HOST)
  return {
    props: {
      posts,
    },
  }
}

export default PostList
