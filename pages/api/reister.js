import Registered from "../db/schema";
import connectDB from "../db";

export default async function handler(req, res) {
  connectDB().catch((err) => console.log(err.message));
  try {
    const create = await Registered.create(req.body);
    res.status(201).send({ create });
  } catch (err) {
    console.log(err.message);
  }
}
