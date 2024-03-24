import { FallbackProps } from 'react-error-boundary';

export function Error({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
            앗! 에러가 발생했습니다.
          </h2>
          <p className="mb-8 text-center font-bold text-red-500">
            {error.toString()}
          </p>
          <button
            className="block w-full rounded-md bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={resetErrorBoundary}
          >
            다시 시도
          </button>
        </div>
      </div>
    </div>
  );
}
