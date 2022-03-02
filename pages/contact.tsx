import React from "react";

import type { NextPage } from "next";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Head from "next/head";
import Modal from "@/components/Modal";
import EmailLoader from "@/components/EmailLoader";
import Banner from "@/components/Sections/Banner";
import Notification from "@/components/Notification";
const Technologies: NextPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [notification, setNotification] = React.useState({
    open: false,
    title: "",
    message: "",
  });

  const toggleLoading = () => {
    setLoading((isLoading) => !isLoading);
  };
  const handleNotification = (
    newNotification?: {
      title: string;
      message: string;
    } | null,
    duration?: number
  ) => {
    if (newNotification) {
      return setNotification({
        open: true,
        ...newNotification,
      });
    }
    setTimeout(() => {
      setNotification({
        open: false,
        title: "",
        message: "",
      });
    }, duration || 0);
  };

  const sendEmail = async (
    data: { [key: string]: string },
    e: React.FormEvent<HTMLFormElement>
  ) => {
    toggleLoading();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toggleLoading();
      handleNotification({
        title: `Thank you for getting in touch!`,
        message: `I appreciate you for contacting me. i'll get back in touch with you soon! Have a great day!`,
      });

      return handleNotification(null, 6000);
    } catch (error) {
      toggleLoading();
      handleNotification({
        title: `Sorry, Your message couldn't be sended`,
        message:
          "It seems an error has occurred on the server. Please retry again or try later.",
      });

      return handleNotification(null, 6000);
    }
  };
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Contact 👩‍💻</title>
      </Head>
      <WithNavbar>
        <main className="main full-height ">
          <>
            <Banner onSubmit={sendEmail} />
            <Modal isOpen={loading}>
              <EmailLoader />
            </Modal>
            <Notification
              isOpen={Boolean(notification.open)}
              message={notification.message}
              title={notification.title}
              onClose={() => handleNotification(null, 0)}
            />
          </>
        </main>
      </WithNavbar>
    </div>
  );
};

export default Technologies;
