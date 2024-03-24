import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Text from '../components/common/Text';
import {
  DesignerCard,
  DesignerSpecType
} from '../components/insuranceDesigner/DesignerCard';

export function InsuranceDesigner() {
  const designerSpecs: DesignerSpecType[] = [
    {
      profile: '../../assets/image',
      name: '김 팀장',
      careerYear: '5',
      spec: [
        {
          label: '고객 중심 사고',
          stars: 5
        },
        {
          label: '판매전문성',
          stars: 4
        },
        {
          label: '신뢰감',
          stars: 4
        },
        {
          label: '금융전문상식',
          stars: 5
        }
      ]
    },
    {
      profile: '../../assets/image',
      name: '구 팀장',
      careerYear: '2',
      spec: [
        {
          label: '고객 중심 사고',
          stars: 5
        },
        {
          label: '판매전문성',
          stars: 2
        },
        {
          label: '신뢰감',
          stars: 5
        },
        {
          label: '금융전문상식',
          stars: 4
        }
      ]
    },
    {
      profile: '../../assets/image',
      name: '강 팀장',
      careerYear: '2',
      spec: [
        {
          label: '고객 중심 사고',
          stars: 3
        },
        {
          label: '판매전문성',
          stars: 3
        },
        {
          label: '신뢰감',
          stars: 2
        },
        {
          label: '금융전문상식',
          stars: 5
        }
      ]
    },
    {
      profile: '../../assets/image',
      name: '오 팀장',
      careerYear: '2',
      spec: [
        {
          label: '고객 중심 사고',
          stars: 5
        },
        {
          label: '판매전문성',
          stars: 2
        },
        {
          label: '신뢰감',
          stars: 5
        },
        {
          label: '금융전문상식',
          stars: 4
        }
      ]
    },
    {
      profile: '../../assets/image',
      name: '한 팀장',
      careerYear: '2',
      spec: [
        {
          label: '고객 중심 사고',
          stars: 5
        },
        {
          label: '판매전문성',
          stars: 2
        },
        {
          label: '신뢰감',
          stars: 5
        },
        {
          label: '금융전문상식',
          stars: 4
        }
      ]
    }
  ];
  return (
    <main className="flex flex-col items-center gap-10">
      <Text type="h1">설계사 추천</Text>
      <div className="flex size-full justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          keyboard={{
            enabled: true
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {designerSpecs.map(spec => {
            return (
              <SwiperSlide key={spec.name}>
                <div className="flex w-full justify-center py-10">
                  <DesignerCard designerSpec={spec} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
}
