import { AvatarImage } from '../../assets/image';
import Block from '../common/Block';

import { Button } from '../common/Button/Button';
import Icon from '../common/Icon';
import Input from '../common/Modal/Input';
import { Modal } from '../common/Modal/Modal';
import { useModalContext } from '../common/Modal/ModalContext';

interface Props {
  designerSpec: DesignerSpecType;
}

export interface DesignerSpecType {
  profile: string;
  name: string;
  careerYear: string;
  spec: {
    label: string;
    stars: number;
  }[];
}

export const DesignerCard = ({ designerSpec }: Props) => {
  const { openModal } = useModalContext();

  return (
    <Block>
      <div className="mb-5 flex flex-col items-center">
        <img
          className="mt-14 cursor-pointer opacity-100 transition-opacity duration-300 hover:opacity-60"
          src={AvatarImage}
          width={0}
          height={0}
          alt={'avatar image'}
          style={{ width: 96, height: 96 }}
        />
        <p className="mb-1 text-xl font-bold">{designerSpec.name}</p>
        <p className="text-xl text-gray-500">
          보험 경력:{' '}
          <span className="text-blue-500">{designerSpec.careerYear}년</span>
        </p>
      </div>
      {designerSpec.spec.map(item => {
        return (
          <span
            key={item.label}
            className="mb-10 flex flex-row justify-between"
          >
            <p className="text-xl text-gray-500">{item.label}</p>
            <p className="flex gap-1 text-xl text-gray-500">
              {Array.from({ length: item.stars }, (_, index) => (
                <Icon name="Star" key={index} color=" rgb(250 204 21)" />
              ))}
            </p>
          </span>
        );
      })}

      <div className="flex w-full justify-center">
        <Button onClick={() => openModal(designerSpec.name)}>
          상담 예약하기
        </Button>
      </div>
      <Modal id={designerSpec.name} label="고객 정보">
        <div className="flex w-80 flex-col gap-3">
          <div className="flex justify-between">
            <p className="w-24">이름</p>
            <Input />
          </div>
          <div className="flex justify-between">
            <p className="w-24">이메일</p>
            <Input />
          </div>
          <div className="flex justify-between">
            <p className="w-24">전화번호</p>
            <Input type="number" />
          </div>
        </div>
        <div className="mt-4 flex w-full justify-end">
          <Button>제출</Button>
        </div>
      </Modal>
    </Block>
  );
};
