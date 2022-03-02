import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "libs/nodemailer";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sendEmail({
      to: process.env.OAUTH_USER,
      from: process.env.OAUTH_USER,
      replyTo: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: `<article><p>${req.body.message.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      )}</p>
      <br/>
      <h3> Sender Data:</h3>
      <p>${req.body.name}</p>
      <p>${req.body.email}</p>
      </article>`,
    });
    return res.status(200).json({
      success: true,
      message: "your email was successfully sended",

      data: req.body,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "your email couldn't be  sended",
      data: req.body,
    });
  }
}
