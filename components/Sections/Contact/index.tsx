import React from "react";

import Modal from "@/components/Modal";
import EmailLoader from "@/components/EmailLoader";
import ContactForm from "./ContactForm";
import Notification from "@/components/Notification";
import * as ga from "@/libs/googleAnalytics";
const Contact = () => {
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
    duration?: number,
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
    e: React.FormEvent<HTMLFormElement>,
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
      ga.event({
        action: "Contact form submition",
        params: {
          status: "success",
        },
      });
      return handleNotification(null, 6000);
    } catch (error) {
      toggleLoading();
      handleNotification({
        title: `Sorry, Your message couldn't be sended`,
        message:
          "It seems an error has occurred on the server. Please retry again or try later.",
      });
      ga.event({
        action: "Contact form submition",
        params: {
          status: "error",
        },
      });
      return handleNotification(null, 6000);
    }
  };
  return (
    <section className="main full-height " id="contact">
      <>
        <ContactForm onSubmit={sendEmail} />
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
    </section>
  );
};
export default Contact;
