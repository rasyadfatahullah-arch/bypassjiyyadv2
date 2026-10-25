export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const r = await fetch("https://api.zyvor.my.id/api/bypass/bypasslinkv2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: req.body && req.body.url }),
    });
    res.status(r.status).json(await r.json());
  } catch (e) {
    res.status(500).json({ error: "Gagal menghubungi API" });
  }
}
