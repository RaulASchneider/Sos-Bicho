const SUPABASE_URL = "https://jfrjhbnlnmyfqaumgezp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcmpoYm5sbm15ZnFhdW1nZXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNjI2OTYsImV4cCI6MjA3ODYzODY5Nn0.jHSHEzEEPd-jP7v6OFQw-Nz0D3Y8O7gXvTvqL6QeaDA"; // NUNCA SERVICE ROLE


const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);