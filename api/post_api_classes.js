export default async function handler(req, res) {
  // Demo: creates a mock class
  res.status(200).json({ success: true, class: "NewClass", message: "Class created!" });
}