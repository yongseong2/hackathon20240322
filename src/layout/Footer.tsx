import Logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="border-t p-8" aria-labelledby="footer-heading px-1">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <span className="flex flex-col flex-wrap content-center justify-center">
        <div className="w-fit border-gray-900/10">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2024 Metlife Team6. All RIGHTS RESERVED.
          </p>
        </div>
        <div className="mt-4 flex w-fit flex-row">
          <img src={Logo} alt="logo" />
          <p className="ml-2 content-center text-sm leading-6 text-gray-600">
            서울시 강남구 봉은사로 150 삼정호텔
          </p>
        </div>
      </span>
    </footer>
  );
}
