import useForm from "@/hooks/useForm";

import Input from "@/components/ContactForm/Input";
import Button from "@/components/Button";

import styles from "./index.module.css";

export default function LoginForm({
  onSubmit,
}: {
  onSubmit: (
    formData: { [key: string]: string | FileList | string[] },
    e: React.FormEvent<HTMLFormElement>
  ) => void;
}) {
  const { register, handleSubmit, errors } = useForm({
    onSubmit,
  });

  return (
    <form
      className={styles.form}
      name="login"
      onSubmit={handleSubmit}
      action="mailto:brisaabigaildiaz2000@gmail.com"
      method="post"
      encType="text/plain"
    >
      <section className={styles["form__content"]}>
        <Input
          alertProps={{ id: "name-error" }}
          errors={errors["name"]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          }
          inputProps={{
            placeholder: "Name*",
            id: "name",
            type: "text",

            "aria-label": "name",
            "aria-required": true,
            autoComplete: "name",
            "aria-invalid": errors["name"]?.length ? true : false,
            "aria-describedby": "name-error",
            ...register("name", {
              minLength: {
                value: 10,
                message: "The message most be at least 10 characters long",
              },
              maxLength: {
                value: 60,
                message: "Name most not exceed the 60 characters",
              },
              required: "Name is required",
            }),
          }}
        />
        <Input
          alertProps={{ id: "email-error" }}
          errors={errors["email"]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          }
          inputProps={{
            placeholder: "Email*",
            id: "email",
            type: "text",
            "aria-label": "email",
            "aria-required": true,
            autoFocus: true,
            autoComplete: "email",
            "aria-invalid": errors["email"]?.length ? true : false,
            "aria-describedby": "email-error",
            ...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please insert a valid email",
              },
              required: "Email is required",
            }),
          }}
        />
        <Input
          alertProps={{ id: "subject-error" }}
          errors={errors["name"]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
            </svg>
          }
          inputProps={{
            placeholder: "Subject*",
            id: "subject",
            type: "text",

            "aria-label": "subject",
            "aria-required": true,
            autoComplete: "subject",
            "aria-invalid": errors["subject"]?.length ? true : false,
            "aria-describedby": "name-error",
            ...register("subject", {
              minLength: {
                value: 3,
                message: "The message most be at least 3  characters long",
              },
              maxLength: {
                value: 150,
                message: "The subject most not exceed the 150 characters",
              },
              required: "Subject is required",
            }),
          }}
        />
        <Input
          alertProps={{ id: "message-error" }}
          errors={errors["message"]}
          textarea={true}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          }
          inputProps={{
            placeholder: "Message*",
            id: "message",

            rows: "10",
            "aria-label": "message",
            "aria-required": true,
            autoComplete: "message",
            "aria-invalid": errors["message"]?.length ? true : false,
            "aria-describedby": "name-error",
            ...register("message", {
              minLength: {
                value: 40,
                message: "The message most be at least 40 characters long",
              },
              required: "Message is required",
            }),
          }}
        />
        <Button className={styles["form__button"]} text="Send Message" />
      </section>
    </form>
  );
}
