// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration tab
// 6. Replace the values below with your actual credentials

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Example template variables for EmailJS:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{message}} - message content
// {{to_name}} - your name (can be hardcoded in template)

export default emailjsConfig;