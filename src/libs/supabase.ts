/** @format */

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as "",
  process.env.NEXT_PUBLIC_SUPABASE_KEY as ""
);

export default supabase;
