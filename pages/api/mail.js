const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: "jeremy.camus@alumnos.ucn.cl",
    from: "jeremy.camus.varela@gmail.com",
    subject: "New portfolio message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);
  res.status(200).json({ status: 200 });
}

export default handler;
