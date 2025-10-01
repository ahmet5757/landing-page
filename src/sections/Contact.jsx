import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ad soyad boş olamaz";
    if (!formData.email.trim()) newErrors.email = "E-posta boş olamaz";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta girin";
    if (!formData.message.trim()) newErrors.message = "Mesaj boş olamaz";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsModalOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">İletişim</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Input
            label="Adınız"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
          />
          {errors.name && <p className="contact__error">{errors.name}</p>}
        </div>
        <div className="input-group">
          <Input
            label="E-posta"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresiniz"
          />
          {errors.email && <p className="contact__error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="message">Mesajınız</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı yazın..."
          />
          {errors.message && <p className="contact__error">{errors.message}</p>}
        </div>

        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Teşekkürler 🎉</h2>
        <p>Mesajınız başarıyla gönderildi.</p>
      </Modal>
    </section>
  );
}

export default Contact;
