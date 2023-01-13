import type { NextPage } from 'next'

type Post = {
  index: number
  title: string
}

const Home: NextPage = () => {
  return (
    <button className="btn-blue">
      Click me
    </button>
  )
}

export default Home
