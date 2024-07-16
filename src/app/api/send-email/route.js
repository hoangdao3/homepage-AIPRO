import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, content } = await req.json();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Gmail SMTP host
      port: 587, // Gmail SMTP port for TLS
      secure: false, // Use TLS
      auth: {
        user: 'tuanhhoang20037c@gmail.com', // Your Gmail email
        pass: 'kaof dbbs qquh cxav', // Your Gmail App Password
      },
    });

    // Send mail with defined transport object
    let mailOptions = {
      from: '"AI-PRO Contact Form" <tuanhhoang20037c@gmail.com>', // Sender address
      to: 'hr-admin@aipro-tech.com', // List of receivers
      subject: `New Collaboration Request from ${email}`, // Subject line
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nContent: ${content}`, // Plain text body
      html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Content: ${content}</p>`, // HTML body
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
