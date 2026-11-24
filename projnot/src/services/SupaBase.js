import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://qqnvlwqtwrfgjyuxlcig.supabase.co';
const supabaseKey = 'sb_publishable_S8ialNosBvXUsSwFxk0aug_0przMsJU'; 
export const supabase = createClient(supabaseUrl, supabaseKey);