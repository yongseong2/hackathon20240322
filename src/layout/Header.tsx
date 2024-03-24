import { Link } from 'react-router-dom';
import { RoutesNames } from '../routes/routes_names';
import Logo from '../assets/logo.svg';

// const navigation = [];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Link
            className="-m-1.5 flex items-center p-1.5"
            to={RoutesNames.home}
          >
            <img src={Logo} alt="logo" />
            <p className=" ml-2 text-xl text-gray-900 dark:text-white">
              암보험 계산기
            </p>
          </Link>
        </div>
        <div className="flex grow justify-center">
          {/* {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="mx-2 text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))} */}
        </div>
      </nav>
    </header>
  );
}
