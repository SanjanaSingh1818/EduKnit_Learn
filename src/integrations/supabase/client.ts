// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ubgssogoarglecygtzys.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ3Nzb2dvYXJnbGVjeWd0enlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxOTg3NTAsImV4cCI6MjA2Mjc3NDc1MH0.iAkcReiMRcfK0_DKltn7IfcjWckQT67X69vfGnE-bY8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);