import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = proces.env.REACT_APP_SUPABASE_ANON_KEY

export default supabase = createClient(supabaseUrl, supabaseAnonKey);