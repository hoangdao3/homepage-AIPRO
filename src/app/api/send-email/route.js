import nodemailer from 'nodemailer';
require('dotenv').config();
export async function POST(req) {
  try {
    const { name, phone, email, content } = await req.json();

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Gmail SMTP port for TLS
      secure: false, // Use TLS
      auth: {
        user: process.env.MAIL, // Your Gmail email
        pass: process.env.PASSWORD, // Your Gmail App Password
      },
    });

    let mailOptions = {
      from: '"AI-PRO Contact Form"',
      to: process.env.PAGEMAIL,
      subject: `New Collaboration Request from ${email}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nContent: ${content}`,
      html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Content: ${content}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}