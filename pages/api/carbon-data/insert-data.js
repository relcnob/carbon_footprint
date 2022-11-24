require("dotenv").config();
import { v4 as uuidv4 } from "uuid";
import { getTotalEmission } from "../../../utils/helper";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xcckwxdaaemmncjylmpi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).send("<h1>The API should be accessed by POST only</h1><a href='/'> GO back to initial page </a>");
  } else {
    const { data, error } = await supabase
      .from(process.env.TABLE_NAME)
      .insert([{ slug: uuidv4(), ...req.body }])
      .select("*");
    if (!error) {
      res.status(200).json({ ...data[0] });
    } else {
      res.status(400).json({ message: req.body });
    }
  }
}
