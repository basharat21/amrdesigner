interface IndexProps {
  allPosts:any
  edges:any
  preview:any
}
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/UI/Container";
import Header from "@/components/UI/Header";
import MoreStories from "@/components/blog/MoreStories";
import HeroPost from "@/components/blog/HeroPost";
import Intro from "@/components/UI/intro";
import Layout from "@/components/UI/layout";
import { getAllPostsForHome } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
const Index: React.FC<IndexProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome({preview});

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Index;