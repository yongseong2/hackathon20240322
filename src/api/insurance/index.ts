import { axiosInstance } from '../axiosInstance';
import {
  insuranceFeeInfoResponseType,
  insuranceInfoRequestType,
  insuranceInfoResponseType,
  recommendInsuranceListInfoType
} from './types';

// 보험료 정보 가져오기
export const fetchInsuranceFeeInfo =
  async (): Promise<insuranceFeeInfoResponseType> => {
    const { data } = await axiosInstance.get(`/insurecfee`);
    return data;
  };

// 보험료 정보 변경하기
export const modifyInsuranceFeeInfo = async ({
  birth,
  gender
}: insuranceInfoRequestType): Promise<insuranceFeeInfoResponseType> => {
  const { data } = await axiosInstance.post(`/insurecfee`, { birth, gender });
  return data;
};

// 보험 정보 가져오기
export const fetchInsuranceInfo = async (
  product_id: number
): Promise<insuranceInfoResponseType> => {
  const { data } = await axiosInstance.get(`/product/${product_id}`);
  return data;
};

// 인기 보험 리스트 가져오기
export const fetchRecommendInsuranceListInfo =
  async (): Promise<recommendInsuranceListInfoType> => {
    const { data } = await axiosInstance.get(`/member/email`);
    return data;
  };
