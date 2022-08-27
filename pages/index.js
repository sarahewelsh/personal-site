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
      <section className="text-lg py-2 space-y-4">
        <p>
          I'm a former paralegal turned software developer living in the
          Portland, OR area. I love languages, eating, music, logic games, and
          travel.
        </p>
        <p>
          After graduating from UC Berkeley with a degree in political economy
          and deciding law school wasn't worth the financial investment, I spent
          over 20 years as a litigation paralegal, supporting attorneys in the
          real estate, employment, product liability, and IP fields.
        </p>
        <p>
          In 2020, I decided it was time for a change, enrolled in Oregon State
          University's online second baccelaureate program, and got my bachelors
          in computer science before embarking upon my second career.
        </p>
        <p>
          In my free time, I am teaching myself Korean (having already learned
          Spanish and French in school), doing yard and home improvement
          projects, and doing Crossfit in my garage.
        </p>
      </section>
      <p></p>
      <section className="text-base py-4">
        <h2 className="text-lg font-semibold">Past Projects</h2>
        <Link href="https://gotseoul.sarahwel.sh">
          <a className="text-base font-semibold text-black hover:text-slate-700">
            Got Seoul Korean Restaurant
          </a>
        </Link>
        <p className="text-xs text-slate-700">
          {" "}
          Project for my web development class - created a sample website for an
          imaginary Korean restaurant called Got Seoul that allowed customers to
          get directions to any of their locations, make reservations, and
          browse the menu
        </p>
      </section>
      <p></p>
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
