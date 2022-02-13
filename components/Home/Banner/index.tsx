import styles from "./index.module.css";
import Link from "next/link";
import Illustration from "@/components/Illustration";
import Button from "@/components/Button/index";

export default function Banner({ url }: { url: string }) {
  return (
    <article className={styles.callToActionBanner}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Are we compatible?</h3>

          <p>
            My ideal job is one that allows me to be in a position of
            responsibility that utilize and makes the most of my skills and
            experience, in which I can join and work in an environment of growth
            and excellence and that provides me with job satisfaction and
            personal development as well as help me achieve personal and
            organizational goals.
          </p>
          <Link href="#aboutMe" passHref>
            <a href="" title="about me section">
              <Button text="Lest get in touch!" tabIndex={-1} />
            </a>
          </Link>
        </div>

        <div className={styles.bannerIllustration}>
          <Illustration name="agreement" />
        </div>
      </div>
    </article>
  );
}
