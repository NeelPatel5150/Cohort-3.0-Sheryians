import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import InfiniteScroll from './Infinite.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
    <InfiniteScroll />
 </QueryClientProvider>
)
