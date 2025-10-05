export default async function handler(req, res) {
  // Demo: returns a mock class list
  res.status(200).json({ classes: ["Math", "Science"], message: "API is working!" });
}