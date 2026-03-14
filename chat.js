export default function handler(req, res) {
  const body = req.body || {};
  const msg = (body.message || "").toLowerCase();

  // AI name
  if(msg.includes("your name") || msg.includes("who are you")) {
    return res.json({ reply:"I am Eagle AI, your friendly assistant." });
  }

  // Developer
  if(msg.includes("developer") || msg.includes("creator") || msg.includes("who made you")) {
    return res.json({ reply:"I was developed by Mohd Juber." });
  }

  // English greeting
  if(msg.includes("hello") || msg.includes("hi")) {
    return res.json({ reply:"Hello! I am Eagle AI. How can I help you?" });
  }

  // Hindi greeting
  if(msg.includes("namaste") || msg.includes("kaise ho")) {
    return res.json({ reply:"नमस्ते! मैं Eagle AI हूँ। मैं आपकी मदद करने के लिए यहाँ हूँ।" });
  }

  // Urdu greeting
  if(msg.includes("salam") || msg.includes("assalamualaikum")) {
    return res.json({ reply:"السلام علیکم! میں Eagle AI ہوں۔ میں آپ کی مدد کے لیے یہاں ہوں۔" });
  }

  // Time
  if(msg.includes("time")) {
    let time = new Date().toLocaleTimeString();
    return res.json({ reply:"Current time is " + time });
  }

  // Date
  if(msg.includes("date")) {
    let date = new Date().toDateString();
    return res.json({ reply:"Today's date is " + date });
  }

  // Help
  if(msg.includes("help")) {
    return res.json({ reply:"You can ask me in English, Hindi or Urdu. I can tell time, date and answer basic questions." });
  }

  // Default
  res.json({ reply:"Eagle AI received your message. I support multiple languages." });
}
