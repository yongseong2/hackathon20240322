import { AvatarImage } from '../../assets/image';
import Block from './Block';
import ButtonGroup from './Button/ButtonGroup';

interface AvatarCardType {
  type: string;
  monthlyFee: number;
  initialFee: number;
  diagnosisFee: number;
  surgeryFee: number;
  treatmentFee: number;
}

const AvatarCard = ({
  type,
  monthlyFee,
  initialFee,
  diagnosisFee,
  surgeryFee,
  treatmentFee
}: AvatarCardType) => {
  return (
    <Block>
      <>
        <span className="mb-7 flex flex-col items-center">
          <img
            className="mt-14 cursor-pointer opacity-100 transition-opacity duration-300 hover:opacity-60"
            src={AvatarImage}
            width={0}
            height={0}
            alt={'avatar image'}
            style={{ width: 96, height: 96 }}
          />
          <p className="mb-1 text-xl text-gray-500">{type}</p>
          <p className="mb-1 text-2xl font-bold text-gray-900">
            월 {monthlyFee}원
          </p>
          <p className="text-xl text-gray-500">
            1~3회차 납입 보험료: {initialFee}원
          </p>
        </span>
        <p className="mb-3 text-xl text-gray-500">보장항목</p>
        <span className="mb-3 flex flex-row items-end justify-between">
          <p className="text-xl text-gray-500">진단</p>
          <p className="text-xl text-gray-500">최고 {diagnosisFee}만원</p>
        </span>
        <span className="mb-3 flex flex-row items-end justify-between">
          <p className="text-xl text-gray-500">수술</p>
          <p className="text-xl text-gray-500">최고 {surgeryFee}만원</p>
        </span>
        <span className="mb-10 flex flex-row justify-between">
          <p className="text-xl text-gray-500">치료</p>
          <p className="text-xl text-gray-500">최고 {treatmentFee}만원</p>
        </span>
        <p className="mb-6 text-2xl font-bold text-gray-900">보험 조건 선택</p>
        <span className="mb-5">
          <p className="mb-3 text-xl text-gray-500">보험 기간</p>
          <ButtonGroup contents={['70세', '80세', '100세']} />
        </span>
        <span className="mb-5">
          <p className="mb-3 text-xl text-gray-500">납입 기간</p>
          <ButtonGroup contents={['5년', '10년', '20년']} />
        </span>
      </>
    </Block>
  );
};

export default AvatarCard;
