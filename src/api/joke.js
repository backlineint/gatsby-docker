import fetch from "node-fetch"

const handler = async (req, res) => {
  const joke = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then(response => response.json())
    .then(data => ({
      body: data.joke,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))

  res.status(200).json({ joke })
}

export default handler
