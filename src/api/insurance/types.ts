import { insuranceType } from '../types';

export type insuranceInfoRequestType = {
  birth: string;
  gender: string;
};

export type insuranceFeeInfoResponseType = {
  type: string;
  monthlyFee: number;
  initialFee: number;
  diagnosisFee: number;
  surgeryFee: number;
  treatmentFee: number;
  diagnosis: string[];
  surgery: string[];
  treatment: string[];
};

type tabType = {
  label: string;
  id: string;
  content: string;
};

export type insuranceInfoResponseType = {
  title: string;
  description: string;
  feature: string[];
  tabs: tabType[];
};

export type recommendInsuranceListInfoType = {
  title: string;
  products: insuranceType[];
};
