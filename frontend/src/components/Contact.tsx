import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import axios from "axios"

// Define interface for the form state
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

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/contact", form)
      alert("Message sent!")
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="Aurora Lee"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          name="casaur2@gmail.com"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="Hello!"
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
