import { useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const { t } = useLanguage();
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      if (!accessKey) {
        throw new Error('VITE_WEB3FORMS_ACCESS_KEY is not configured.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message.');
      }

      showAlert({
        show: true,
        text: t.contact.success,
        type: 'success',
      });

      setForm({
        name: '',
        message: '',
      });
    } catch (error) {
      console.error(error);

      showAlert({
        show: true,
        text: t.contact.error,
        type: 'error',
      });
    } finally {
      setIsSending(false);

      setTimeout(() => {
        hideAlert(false);
      }, 3000);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} labels={t.alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">{t.contact.title}</h3>

          <p className="text-lg text-white-600 mt-3">{t.contact.intro}</p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">{t.contact.fullName}</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t.contact.namePlaceholder}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">{t.contact.message}</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={t.contact.messagePlaceholder}
              />
            </label>

            <button className="field-btn" type="submit" disabled={isSending}>
              {isSending ? t.contact.sending : t.contact.send}

              {!isSending && <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
