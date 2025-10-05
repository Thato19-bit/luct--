export default async function handler(req, res) {
  // Demo: returns a mock user
  res.status(200).json({ user: "demo-user", message: "API is working!" });
}.