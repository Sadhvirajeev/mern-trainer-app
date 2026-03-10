import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

// In-memory array to store trainers
let trainers = [
  { id: 1, name: "Mahesh", skills: "React" },
  { id: 2, name: "Arun", skills: "Node" },
  { id: 3, name: "Divya", skills: "MongoDB" },
]

// Get all trainers
app.get("/trainers", (req, res) => {
  res.json(trainers)
})

// Add a trainer
app.post("/trainer", (req, res) => {
  const { name, skills } = req.body
  const newTrainer = { id: trainers.length + 1, name, skills }
  trainers.push(newTrainer)
  res.json({ message: "Trainer Added" })
})

app.listen(PORT, () => console.log("Server running on", PORT))