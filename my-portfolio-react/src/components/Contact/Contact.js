import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2abjrq', 'template_lypseco', form.current, '5X-6u1rj_hp2xl2cx')
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
        <a href="https://www.linkedin.com/in/parthurrod06/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a href="https://github.com/PArthur006" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a href="https://www.instagram.com/pedroarthurrod06/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          Instagram
        </a>
        <a href="mailto:parthur.rodrigues06@gmail.com">
          <i className="fas fa-envelope"></i>
          E-mail
        </a>
      </div>
    </section>
  );
}

export default Contact;