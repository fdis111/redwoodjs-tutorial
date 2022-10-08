import { FC } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface ArticlePageProps {
  id: number
}

const ArticlePage: FC<ArticlePageProps> = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
