import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"

interface ContactForm {
  name: string
  email: string
  message: string
}

function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await axios.post("/api/contact", form)
    alert("Message sent!")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
