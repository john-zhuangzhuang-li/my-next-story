import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_APIKEY);
const sanitize = (text) => text.replace(/[<>]/g, "");

const sendEmail = async (req, res) => {
  try {
    const {
      name: inputName,
      email: inputEmail,
      message: inputMessage,
    } = req.body;
    const sanitizedInputs = {
      name: inputName ? sanitize(inputName) : "Missing name",
      email: inputEmail ? sanitize(inputEmail) : "Missing email",
      message: inputMessage ? sanitize(inputMessage) : "Missing message",
    };
    const { name, email, message } = sanitizedInputs;
    await sendgrid.send({
      to: "john-zhuangzhuang-li@outlook.com",
      from: "ca19aw2tem91@protonmail.com",
      subject: `Contact message from ${name}`,
      text: `Sender name: ${name}; Sender email: ${email}; Message: ${message}`,
      html: `<p><strong>Sender name:</strong></p><p>${name}</p><p><strong>Sender email:</strong></p><p>${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
};

export default sendEmail;
