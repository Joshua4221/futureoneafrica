import Registered from "../db/schema";
import connectDB from "../db";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));
  try {
    const body = req.body;
    const create = await Registered.create(body);
    res.status(200).json({ data: create });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
