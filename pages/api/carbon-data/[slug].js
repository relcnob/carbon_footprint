require("dotenv").config();
import { v4 as uuidv4 } from "uuid";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xcckwxdaaemmncjylmpi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(400).send("The API should be accessed by GET only");
  const { slug } = req.query;
  const { data, error } = await supabase.from("carbon-data").select("*").eq("slug", slug);
  if (!error) res.status(200).json(data);
  if (error) console.log(error);
}
