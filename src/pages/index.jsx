import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import Header from "@/components/UI/Header";
import Container from "@/components/UI/Container";
import Layout from "@/components/UI/layout";
import Hero from "@/components/UI/hero";
import AboutMe from "@/components/UI/AboutMe";
import SectionHeading from "@/components/UI/SectionHeading";
import { getAllPostsForHome } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <Layout>
    <Head>
        <title>Amardeep Singh | Website Designer in India 2024 | Web</title>
        <meta name="description" content="Amardeep Singh Chahal CEO of AMR Softec, Expert Web Designer, Frontend Developer &amp; eCommerce Website Developer in India. Call +91-9888940088." />
    </Head>
    <Header/>
    <Hero/>
</Layout>
  );
}
