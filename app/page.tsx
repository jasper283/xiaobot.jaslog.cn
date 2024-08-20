import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="mt-6"></div>
      <p className="text-normal text-lg">
        在小报童专栏中，有许多优质的付费专栏。由于去中心化和不依赖算法推荐，读者可能会难以浏览或检索这些专栏。为此，我们精心挑选了一些优质内容，帮助读者快速预览，轻松找到有价值的信息。
      </p>

      <div className="mt-6"></div>
      <p className="text-normal text-lg">
        以下是一些推荐专栏：
      </p>


      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.link} target="_blank">
              <h2 className="">{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </>
  )
}
