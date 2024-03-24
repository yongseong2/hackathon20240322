import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../layout/Layout';
import { Error } from '../pages/Error';
import { HomePage } from '../pages/HomePage';
import { RoutesNames } from './routes_names';
import { LoginRedirect } from '../pages/LoginRedirect';
import Insurance from '../pages/Insurance';
import { InsuranceInfo } from '../pages/InsuranceInfo';
import { InsuranceDesigner } from '../pages/InsuranceDesigner';
// import ProtectedRoute from './ProtectedRoute';

export default function Router() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutesNames.home} element={<HomePage />} />
          <Route
            path={RoutesNames['insurance-info']}
            element={<InsuranceInfo />}
          />

          <Route
            path={RoutesNames['login-redirect']}
            element={<LoginRedirect />}
          />
          <Route path={RoutesNames.insurance} element={<Insurance />} />
          <Route
            path={RoutesNames['insurance-designer']}
            element={<InsuranceDesigner />}
          />
        </Route>
        {/* 로그인안할시 제한되는 페이지
        <Route element={<ProtectedRoute />}></Route> */}
        <Route path={RoutesNames.wildcards} element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
