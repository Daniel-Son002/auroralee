import { useEffect, useState } from "react"
import axios from "axios"

interface MessageResponse {
  message: string
}

function Home() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    axios.get<MessageResponse>("/api/message")
      .then(res => setMessage(res.data.message))
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  )
}

export default Home
