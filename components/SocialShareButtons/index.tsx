import React, { useEffect } from "react";
import styles from "./index.module.css";
import Logo from "./Logo";

export default function SocialShareButton() {
  const [pageUrl, setPageUrl] = React.useState("");

  React.useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const SHARE_LINKS = {
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?text=",
    telegram:
      "https://telegram.me/share/url?text=Hi, I found this website and thought you might like it&url=",
    reddit: "https://www.reddit.com/submit?url=",
    email:
      "mailto:?subject=<Look at this website&body=Hi, I found this website and thought you might like it ",
    whatsapp: "https://api.whatsapp.com/send/?phone&text=",
  };

  const SOCIALS = [
    {
      name: "facebook",
      className: `${styles.facebook}  ${styles["bar__link"]}`,
      shareUrl: SHARE_LINKS["facebook"] + pageUrl,
    },
    {
      name: "twitter",
      className: `${styles.twitter} ${styles["bar__link"]}`,
      shareUrl: SHARE_LINKS["twitter"] + pageUrl,
    },
    {
      name: "email",
      className: `${styles.email}  ${styles["bar__link"]} `,
      shareUrl: SHARE_LINKS["email"] + pageUrl,
    },
    {
      name: "telegram",
      className: `${styles.telegram}  ${styles["bar__link"]} `,
      shareUrl: SHARE_LINKS["telegram"] + pageUrl,
    },
    {
      name: "whatsapp",
      className: `${styles.whatsapp}  ${styles["bar__link"]} `,
      shareUrl: SHARE_LINKS["whatsapp"] + pageUrl,
    },

    {
      name: "linkedin",
      className: `${styles.linkedin}   ${styles["bar__link"]}`,
      shareUrl: SHARE_LINKS["linkedin"] + pageUrl,
    },
    {
      name: "reddit",
      className: `${styles.reddit}  ${styles["bar__link"]} `,
      shareUrl: SHARE_LINKS["reddit"] + pageUrl,
    },
  ];
  return (
    <nav className={styles.bar} aria-label="social share">
      {SOCIALS.map((social) => (
        <a
          target="_blank"
          key={social.name}
          title={"share via " + social.name}
          href={social.shareUrl}
          rel="noreferrer"
          className={social.className}
        >
          <Logo name={social.name} />
        </a>
      ))}
    </nav>
  );
}
