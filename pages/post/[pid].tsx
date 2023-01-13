import { PostType } from './_types'

type PostProps = {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="m-10 mb-10 cursor-pointer">
      <article className="container bg-white shadow-2xl rounded-2xl p-5">
        <h1 className="font-bold text-yellow-500">{post.title}</h1>
        <p className="font-light text-gray-500 hover:font-bold">{post.desc}</p>
        <h6 className="text-sm text-gray-300 mb-5">Publiée le 08/10/2022</h6>
        <div className="text-right">
          <a
            href="#"
            className="rounded-lg py-2 px-4 text-center text-white bg-yellow-400 hover:bg-yellow-500"
          >
            查看
          </a>
        </div>
      </article>
    </div>
  )
}

export default Post
