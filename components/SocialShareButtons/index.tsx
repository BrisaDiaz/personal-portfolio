import React, { useEffect } from "react";
import styles from "./index.module.css";

export default function SocialShareButton() {
  const [pageUrl, setPageUrl] = React.useState("");

  React.useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const SHARE_LINKS = {
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?text=",
    google: "https://plus.google.com/share?url=",
    reddit: "https://www.reddit.com/submit?url=",
  };

  const SOCIALS = [
    {
      name: "facebook",
      cassName: `${styles.facebook} fa-facebook fa`,
      shareUrl: SHARE_LINKS["facebook"] + pageUrl,
    },
    {
      name: "twitter",
      cassName: `${styles.twitter} fa-twitter fa`,
      shareUrl: SHARE_LINKS["twitter"] + pageUrl,
    },
    {
      name: "google",
      cassName: `${styles.google} fa-google fa`,
      shareUrl: SHARE_LINKS["google"] + pageUrl,
    },
    {
      name: "linkedin",
      cassName: `${styles.linkedin} fa-linkedin fa`,
      shareUrl: SHARE_LINKS["linkedin"] + pageUrl,
    },
    {
      name: "reddit",
      cassName: `${styles.reddit} fa-reddit fa`,
      shareUrl: SHARE_LINKS["reddit"] + pageUrl,
    },
  ];
  return (
    <div className={styles.socialBar}>
      {SOCIALS.map((social) => (
        <a
          target="_blank"
          key={social.name}
          href={social.shareUrl}
          rel="noreferrer"
          className={social.cassName}
        />
      ))}
    </div>
  );
}
