import { KakaoLoginImage } from '../assets/image';

export default function KakaoLogin() {
  return (
    <a
      className="w-fit"
      // href={`${API_URL + REDIRECTION_URL}`}
      href="/login-redirect" // TODO: 삭제 예정
    >
      <img
        className="opacity-100 transition-opacity duration-300 hover:opacity-60"
        src={KakaoLoginImage}
        width={0}
        height={0}
        alt={'kakao'}
        style={{ width: 200, height: 50 }}
      />
    </a>
  );
}
