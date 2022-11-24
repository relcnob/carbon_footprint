require("dotenv").config();
import { getOverall } from "../../../../utils/helper";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xcckwxdaaemmncjylmpi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(400).send("The API should be accessed by GET only");
  const { slug } = req.query;
  const { data, error } = await supabase.from(process.env.TABLE_NAME).select("*");
  if (!error) res.status(200).json(getOverall(data, slug), console.log(res));
  if (error) {
    console.log(error);
    res.status(400).redirect("/error");
  }
}
