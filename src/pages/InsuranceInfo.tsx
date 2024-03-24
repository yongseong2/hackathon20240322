import { TabContentType, Tabs } from '../components/common/Tabs';
import Text from '../components/common/Text';
import { BadgeText } from '../components/insuranceInfo/BadgeText';

export function InsuranceInfo() {
  const tabs: TabContentType[] = [
    {
      label: '기본정보',
      id: 'info1',
      children: <div>기본정보 내용입니다</div>
    },
    {
      label: '보장내용',
      id: 'info2',
      children: <div>보장내용 정보입니다</div>
    },
    {
      label: '상품특징',
      id: 'info3',
      children: <div>상품특징정보입니다</div>
    }
  ];

  return (
    <main>
      <div id="title" className="flex flex-col gap-2">
        <Text type="h1">메트라이프 무배당 365 암보험</Text>
        <Text type="span" className="text-blue-500">
          메트라이프 무배달 365 암보험
        </Text>
      </div>
      <div id="characteristic" className="my-20 flex flex-col gap-5">
        <BadgeText label="암보험 보장항목 대포 특징1" />
        <BadgeText label="암보험 보장항목 대포 특징2" />
        <BadgeText label="암보험 보장항목 대포 특징3" />
        <BadgeText label="암보험 보장항목 대포 특징4" />
      </div>
      <Tabs tabs={tabs} />
    </main>
  );
}
