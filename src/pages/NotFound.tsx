import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
            페이지를 찾을 수 없습니다.
          </h2>
          <p className="mb-8 text-center font-bold text-red-500">
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <button
            className="block w-full rounded-md bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={() => navigate(-1)}
          >
            이전 페이지로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
