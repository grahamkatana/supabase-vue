import { createClient } from '@supabase/supabase-js'
//replace with own keys or use env
const url = ""
const key = ""

const supabaseUrl = url
const supabaseAnonKey = key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)