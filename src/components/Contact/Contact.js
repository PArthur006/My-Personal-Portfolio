import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import contactData from '../../data/contactData';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [isSending, setIsSending] = useState(false); // Estado para indicar envio

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');
    setMessageType('');

    try {
      const formData = new FormData(form.current);
      const payload = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setMessage('Mensagem enviada com sucesso!');
        setMessageType('success');
        form.current.reset();
      } else {
        setMessage(json.error || 'Erro ao enviar mensagem. Tente novamente.');
        setMessageType('error');
      }
    } catch (err) {
      setMessage('Erro ao enviar mensagem. Tente novamente.');
      setMessageType('error');
    } finally {
      setIsSending(false);
    }
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
        <button type="submit" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
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