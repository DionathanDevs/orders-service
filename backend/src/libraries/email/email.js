import { Resend } from 'resend';

const email = new Resend(process.env.EMAIL_API_TOKEN);

export default email;
