import nodemailer from "nodemailer";
import { google } from "googleapis";

const {
  OAUTH_USER,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  OAUTH_REDIRECT_URI,
} = process.env;

async function createTransporter() {
  const oauth2Client = new google.auth.OAuth2(
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI
  );

  oauth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

  try {
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(err);
        }

        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: OAUTH_USER,
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    } as any);

    transporter.verify((err, success) => {
      if (err) {
        console.log("Verification error" + err);
        return;
      }
      console.log(`=== Server is ready to take messages: ${success} ===`);
    });

    return transporter;
  } catch (err: any) {
    console.log(err);
    throw new Error(err?.message || "there was an error while verifying email");
  }
}
export const sendEmail = async (emailOptions: any) => {
  try {
    const emailTransporter = await createTransporter();
    if (emailTransporter) {
      await emailTransporter.sendMail(emailOptions);
    }
  } catch (err: any) {
    console.log(err);

    throw new Error(err?.message || "there was an error while sending email");
  }
};
