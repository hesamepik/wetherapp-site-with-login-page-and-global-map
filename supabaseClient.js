
const supabaseUrl = 'https://cbmmppdcojxhjxhyzand.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibW1wcGRjb2p4aGp4aHl6YW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MDc2MTcsImV4cCI6MjA2MzM4MzYxN30.V--9g0OaP2O7G4OmVk5hqEXePzF3MnoHUTYIOOjAmSc';

window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
