import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Schemas from '@/components/schemas/PostPageSchemas';
import Container from "@/components/UI/Container";
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import Header from "@/components/UI/Header";
import PostHeader from "@/components/blog/PostHeader";
import SectionSeparator from "@/components/UI/SectionSeparator";
import Layout from "@/components/UI/layout";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
        <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title}`}
                </title>
                <meta name="robots" content="noindex"></meta>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
                <Schemas schemaData={post}/>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {/* {post.tags.edges.length > 0 && <Tags tags={post.tags} />} */}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}
export const getServerSideProps= async ({
    params,
    preview = false,
    previewData,
  }) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  
    return {
      props: {
        preview,
        post: data.post,
        posts: data.posts,
      },
      revalidate: 10,
    };
  };
