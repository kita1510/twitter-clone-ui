/** @format */

import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL as "",
//   process.env.NEXT_PUBLIC_SUPABASE_KEY as ""
// );

const supabase = createClient(
  "https://kkursbmcvmtmhdydarku.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrdXJzYm1jdm10bWhkeWRhcmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1OTg2MjIsImV4cCI6MjAzMzE3NDYyMn0.-ueNRMqLDZ_uF_zh2vC8mZ2tF-jAXtLMmVOIMNOqJrA"
);

export default supabase;
