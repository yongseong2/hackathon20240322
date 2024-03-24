import Router from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ModalProvider } from './components/common/Modal/ModalContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
