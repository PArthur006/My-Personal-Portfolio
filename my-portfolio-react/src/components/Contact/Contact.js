import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contactData from '../../data/contactData';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceId, templateId, userId } = contactData.emailjs;
    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
          console.log(result.text);
          setMessage('Mensagem enviada com sucesso!');
          setMessageType('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setMessage('Erro ao enviar mensagem. Tente novamente.');
          setMessageType('error');
      });
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000); // 5 segundos
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section id="contact">
      <h2>Entre em Contato</h2>
      <p>Sinta-se à vontade para se conectar comigo nas redes sociais ou me enviar um e-mail.</p>
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Seu Nome" required />
        <input type="email" name="from_email" placeholder="Seu E-mail" required />
        <input type="text" name="subject" placeholder="Assunto" required />
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar Mensagem</button>
        {message && <p className={`form-message ${messageType}`}>{message}</p>}
      </form>

      <div className="contact-links">
        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          LinkedIn
        </a>
        <a href={contactData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          GitHub
        </a>
        <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          Instagram
        </a>
        <a href={`mailto:${contactData.email}`}>
          <FaEnvelope />
          E-mail
        </a>
      </div>
    </section>
  );
}

export default Contact;