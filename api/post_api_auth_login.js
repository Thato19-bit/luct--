export default async function handler(req, res) {
  // Demo: accepts any login
  res.status(200).json({ success: true, user: "demo-user", message: "Login accepted!" });
}