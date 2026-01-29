// src/data/contactData.js
// Links e configurações de contato centralizados

const contactData = {
  linkedin: 'https://www.linkedin.com/in/parthurrod06/',
  github: 'https://github.com/PArthur006',
  instagram: 'https://www.instagram.com/parthur06',
  email: 'parthur.rodrigues06@gmail.com',
  emailjs: {
    // Prefer using environment variables for serverless path. These are kept for fallback/testing only.
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_a2abjrq',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_lypseco',
    userId: process.env.REACT_APP_EMAILJS_USER_ID || '5X-6u1rj_hp2xl2cx'
  }
};

export default contactData;
