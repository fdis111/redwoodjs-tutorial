import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from '../../components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
