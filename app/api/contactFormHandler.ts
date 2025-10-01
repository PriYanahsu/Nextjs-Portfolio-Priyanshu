
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   // Only allow POST requests
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Set up Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//       user: 'your-email@gmail.com', // Replace with your email
//       pass: 'your-email-password',   // Replace with your email password or app password
//     },
//   });

//   // Mail options
//   const mailOptions = {
//     from: email,
//     to: 'deepakchandra4551@gmai;.com', 
//     subject: `New message from ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ message: 'Failed to send email' });
//   }
// }
