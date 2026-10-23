import { createClient } from '@supabase/supabase-js';

const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = (typeof envUrl === 'string' && envUrl.trim() !== '') 
  ? envUrl 
  : 'https://placeholder.supabase.co';

const supabaseAnonKey = (typeof envKey === 'string' && envKey.trim() !== '') 
  ? envKey 
  : 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
