export default async function handler(req, res) {
  // Demo: accepts any registration
  res.status(200).json({ success: true, user: "demo-user", message: "Registration accepted!" });
}.