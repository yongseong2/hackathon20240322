import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export function BreadCrumb() {
  const location = useLocation();

  const generateBreadcrumbs = (path: string) => {
    const breadcrumbs = [
      {
        path: '/',
        label: 'Home'
      }
    ];

    const pathSegments = path.split('/').filter(Boolean);
    let currentPath = '';

    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      if (currentPath !== '/') {
        const label = currentPath.slice(1);
        breadcrumbs.push({
          path: currentPath,
          label: label.charAt(0).toUpperCase() + label.slice(1)
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <div className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      {breadcrumbs.map(({ path, label }, index) => {
        const isCurrentPage = location.pathname === path;
        return (
          <div
            key={index}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white "
          >
            {isCurrentPage ? (
              <span>{label}</span>
            ) : (
              <Link to={path}>{label}</Link>
            )}
            <span>
              {index < breadcrumbs.length - 1 && (
                <Icon name="AngleRight" size={15} />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
