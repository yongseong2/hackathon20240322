import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { setToken } from '../store/modules/user';
import { RoutesNames } from '../routes/routes_names';

export function LoginRedirect() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const oauthLogin = async () => {
      // [TOKEN] 가져오기
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('at') || '';
      dispatch(setToken({ accessToken }));
      navigate(RoutesNames.sample, { replace: true });
    };
    oauthLogin();
  }, []);
  return <></>;
}
