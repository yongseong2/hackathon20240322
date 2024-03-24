import { axiosInstance } from '../axiosInstance';
import { insuranceType } from '../types';

export const fetchHomeInsuranceList = async (): Promise<insuranceType[]> => {
  const { data } = await axiosInstance.get(`/products`);
  // const mockData = [
  //   {
  //     id: 1,
  //     name: '메트라이프 무배당 365 암보험'
  //   },
  //   {
  //     id: 2,
  //     name: '(무)360암보험'
  //   },
  //   {
  //     id: 3,
  //     name: '무배당 베스트콜 헬스케어보험'
  //   },
  //   {
  //     id: 4,
  //     name: '무배당 베스트콜 의료보장보험'
  //   },
  //   {
  //     id: 5,
  //     name: '무배당 베스트콜 암보험Ⅱ'
  //   },
  //   {
  //     id: 6,
  //     name: '무배당 새생활암보험'
  //   },
  //   {
  //     id: 7,
  //     name: '꿈돌이사랑보험'
  //   },
  //   {
  //     id: 7,
  //     name: '나이팅게일 암보험'
  //   }
  // ];
  return data;
};
