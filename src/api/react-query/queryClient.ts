import { AxiosError } from 'axios';
import { QueryClient } from 'react-query';

export function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof AxiosError
      ? error.response?.data?.error || error.message
      : 'error connecting to server';

  console.log(title);
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000, // 10분
        cacheTime: 900000, // 15분
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
      },
      mutations: {
        onError: queryErrorHandler
      }
    }
  });
}

export default generateQueryClient();
