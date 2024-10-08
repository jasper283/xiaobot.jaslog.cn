import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";


// import Button from "@/components/button"
import { Mdx } from "@/components/mdx-components";
import { Metadata } from "next";
import Link from "next/link";

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/")
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h2 className="mb-2">{post.title}</h2>

      <Link href={post.link} target="_blank" className="inline-block bg-primary no-underline text-white py-2 px-4 rounded-md hover:bg-primary-700 transition block text-center">
        查看专栏详情
      </Link>
      {/* {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )} */}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article >
  )
}
