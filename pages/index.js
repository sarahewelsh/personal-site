import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg py-2">
        <p>
          I'm a former paralegal turned software developer living in the
          Portland, OR area. I love languages, eating, music, logic games, and
          travel.
        </p>
      </section>
      <section className="text-base py-2">
        <h2 className="text-lg font-semibold">Daily Korean Writing Practice</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="py-1">
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-sm">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
