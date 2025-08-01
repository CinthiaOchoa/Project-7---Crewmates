import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zzbdihkpeczemrmvedrp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YmRpaGtwZWN6ZW1ybXZlZHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODg4MTQsImV4cCI6MjA2ODk2NDgxNH0.Vw3THfcWyfkFGrcid3CXAsk14ELHFk4S2oQ59WIdPFk'
export const supabase = createClient(supabaseUrl, supabaseKey)
