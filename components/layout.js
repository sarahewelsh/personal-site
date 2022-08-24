import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const name = "Sarah Welsh";
export const siteTitle = "Sarah Welsh";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteTitle + " | Writes software sometimes"}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/squareprofile.jpeg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl font-bold p-2">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/squareprofile.jpeg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-3xl font-bold p-2">
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <section className="flex space space-x-4 justify-center py-2">
        <p>
          <Link href="https://github.com/sarahewelsh">
            <a className="text-black hover:text-slate-700">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </Link>
        </p>
        <p>
          <Link href="https://www.linkedin.com/in/sarah-welsh-996b1417/">
            <a className="text-black hover:text-slate-700">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </Link>
        </p>
      </section>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-700">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
