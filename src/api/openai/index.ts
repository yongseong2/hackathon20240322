import { axiosInstance } from '../axiosInstance';

export type OpenAIResponseType = {
  data: string;
  type: string;
};
export const fetchOpenAIQuery = async (
  query: string
): Promise<OpenAIResponseType> => {
  const { data } = await axiosInstance.post(`/ai/search?query=${query}`);
  return data;
};

export const queryKeys = {
  openAIQuery: 'openAIQuery',
  insuranceFeeInfo: 'insuranceFeeInfo'
};
