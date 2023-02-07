
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react';
const queryClient = new QueryClient();

import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { StarshipApiScreen } from './src/screens/StarshipApiScreen';
import { TermsScreen } from './src/screens/TermsScreen';

const App = () => {
 return <QueryClientProvider client={queryClient}><StarshipApiScreen />
 </QueryClientProvider>; 
  
};

export default App;