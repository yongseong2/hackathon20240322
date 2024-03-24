import { useState } from 'react';
import { Accordion } from '../components/common/Arcodian';
import AvatarCard from '../components/common/AvatarCard';
import Block from '../components/common/Block';
import { Button } from '../components/common/Button/Button';
import ButtonGroup from '../components/common/Button/ButtonGroup';
import { Card } from '../components/common/Card';
import { CardLabel } from '../components/common/CardLabel';
import { DateInput } from '../components/common/DateInput';
import { TabContentType, Tabs } from '../components/common/Tabs';
import Text from '../components/common/Text';
import { BadgeText } from '../components/insuranceInfo/BadgeText';
import Icon from '../components/common/Icon';
import { useParams } from 'react-router-dom';
import { CheckBox } from '../components/common/Checkbox';
import uuid from 'react-uuid';
import Desc1 from '../assets/image/desc/desc1.png';
import Desc2 from '../assets/image/desc/desc2.png';
import Desc3 from '../assets/image/desc/desc3.png';
import { useQuery } from 'react-query';
import {
  insuranceFeeInfoResponseType,
  insuranceInfoResponseType
} from '../api/insurance/types';
import { queryKeys } from '../api/openai';
import { fetchInsuranceFeeInfo, fetchInsuranceInfo } from '../api/insurance';

// import { useQuery } from 'react-query';
// import { queryKeys } from '../api/react-query/queryConstants';
// import { fetchInsuranceFeeInfo } from '../api/insurance';
// import { insuranceFeeInfoResponseType } from '../api/insurance/types';

const tabs: TabContentType[] = [
  {
    label: '기본정보',
    id: 'info1',
    children: (
      <div>
        <img src={Desc1} alt="desc1" />
      </div>
    )
  },
  {
    label: '보장내용',
    id: 'info2',
    children: (
      <div>
        <img src={Desc2} alt="desc2" />
      </div>
    )
  },
  {
    label: '상품특징',
    id: 'info3',
    children: (
      <div>
        <img src={Desc3} alt="desc3" />
      </div>
    )
  }
];

const Insurance: React.FC = () => {
  const [tabOpen, setTabOpen] = useState<boolean>(false);

  const params = useParams();

  const { data } = useQuery<insuranceInfoResponseType>(
    [queryKeys.insuranceFeeInfo],
    () => fetchInsuranceInfo(1)
  );

  console.log(data);

  const insuranceFeeInfoData = {
    type: '30세 여자',
    monthlyFee: 3500,
    initialFee: 100,
    diagnosisFee: 100,
    surgeryFee: 100,
    treatmentFee: 100,
    diagnosis: ['진단비 특약', '조기 발견 지원 특약'],
    surgery: ['수술비 지원 특약', '대수술비 추가 지원 특약'],
    treatment: ['항암 치료 지원 특약', '방사선 치료 지원 특약']
  };

  const insuranceInfoData = {
    title: '메트라이프 무배당 365 암보험',
    description: '메트라이프 무배당 365 암보험',
    feature: [
      '최대 100세까지(20년갱신) 주계약 암진단비 최대 1억 보장',
      '3대 특정암 보장강화 및 납입면제 혜택까지',
      '3대 특정암도 차등없이 주계약 가입금액 대비 100% 가입가능',
      '주계약은 감액기간 없이 암보장개시일부터 가입금액의 100% 지급'
    ],
    tabs
  };

  const RecommendInsuranceListInfoData = {
    title: '30대 여성분들의 인기 보험을 만나보세요',
    products: [
      {
        productId: 1,
        title: '전 생애 걸쳐 암 치료를 지원하는 종합 암보험',
        feature: ['암보험', '특약']
      },
      {
        productId: 2,
        title: '여성 특화 암보험: 유방암 및 자궁암 집중 보장',
        feature: ['암보험', '특약', '일반']
      },
      {
        productId: 3,
        title: '무해지환급형 암보험으로 보험료 부담 최소화',
        feature: ['암보험', '특약']
      },
      {
        productId: 4,
        title: '가족력을 고려한 맞춤형 암보험',
        feature: ['암보험', '일반']
      },
      {
        productId: 5,
        title: '1년 갱신형 암보험으로 유연한 보장 받기',
        feature: ['암보험', '특약', '일반']
      }
    ]
  };

  return (
    <>
      <div id="title" className="my-20 flex flex-col gap-2">
        <Text type="h1">{insuranceInfoData.title}</Text>
        <Text type="span" className="text-blue-500">
          {insuranceInfoData.description}
        </Text>
      </div>
      <div id="characteristic" className="my-8 flex flex-col gap-5">
        {insuranceInfoData.feature.map(elem => {
          return <BadgeText key={uuid()} label={elem} />;
        })}
      </div>
      <span
        className={`${!tabOpen && 'flex-wrap'} my-20 flex flex-col content-center justify-center`}
      >
        {tabOpen ? (
          <Tabs tabs={insuranceInfoData.tabs} />
        ) : (
          <button
            className="flex w-fit flex-row"
            onClick={() => setTabOpen(true)}
          >
            <span>펼쳐보기</span>
            <Icon name="AngleDown" color={'rgb(107 114 128)'} />
          </button>
        )}
      </span>
      <Text type="h1" className="mb-6">
        계산된 보험료
      </Text>
      <span className="mb-32 flex flex-row gap-x-6">
        <AvatarCard
          monthlyFee={insuranceFeeInfoData.monthlyFee}
          type={insuranceFeeInfoData.type}
          initialFee={insuranceFeeInfoData.initialFee}
          diagnosisFee={insuranceFeeInfoData.diagnosisFee}
          surgeryFee={insuranceFeeInfoData.surgeryFee}
          treatmentFee={insuranceFeeInfoData.treatmentFee}
        />
        <span className="flex w-1/2 flex-col justify-between">
          <span className="flex flex-col justify-between">
            <Block className={'mb-8 flex w-full flex-row justify-between'}>
              <DateInput />
              <ButtonGroup contents={['남자', '여자']} />
            </Block>
            <span className="flex flex-col gap-y-4">
              <Accordion title="진단" isFirst={true}>
                {insuranceFeeInfoData.diagnosis.map(elem => (
                  <CheckBox key={uuid()} id={uuid()} label={elem} />
                ))}
              </Accordion>
              <Accordion title="수술">
                {insuranceFeeInfoData.surgery.map(elem => (
                  <CheckBox key={uuid()} id={uuid()} label={elem} />
                ))}
              </Accordion>
              <Accordion title="치료">
                {insuranceFeeInfoData.treatment.map(elem => (
                  <CheckBox key={uuid()} id={uuid()} label={elem} />
                ))}
              </Accordion>
            </span>
          </span>
          <span className="flex flex-row justify-end">
            <Button link={`/insurance-designer/${params?.insuranceId}`}>
              설계사 추천받기
            </Button>
            <Button className="w-1/2">보장내용 확인하기</Button>
          </span>
        </span>
      </span>
      <Text type="h1" className="mb-6">
        {RecommendInsuranceListInfoData.title}
      </Text>
      <div className="grid grid-cols-3 gap-4">
        {RecommendInsuranceListInfoData.products.map(elem => (
          <Card title={elem.title} key={elem.productId}>
            <CardLabel type="green">암보험</CardLabel>
            <CardLabel type="red">특약</CardLabel>
            <CardLabel type="gray">일반</CardLabel>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Insurance;
