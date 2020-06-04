import { useEffect, useState } from "react"
import Head from "next/head"

export default function Hooks() {
  const [text, setText] = useState("unkown")

  useEffect(() => {
    setText("Componente montado!")
  }, [])

  const handleInputChange = function (event) {
    setText(event.target.value)
  }

  return (
    <div>
      <Head>
        <title>Hooks</title>
      </Head>
      <div>
        {text}
      </div>
      <div>
        <input onChange={handleInputChange} />
      </div>
    </div>
  )
} 