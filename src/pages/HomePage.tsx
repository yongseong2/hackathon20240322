import React from 'react';
import { Card } from '../components/common/Card';
import { CardLabel } from '../components/common/CardLabel';
import ChatBotPage from '../components/chat';
import { fetchHomeInsuranceList } from '../api/home';
import { queryKeys } from '../api/react-query/queryConstants';
import { insuranceType } from '../api/types';
import { useQuery } from 'react-query';
import { RenderLoadingCards } from '../components/common/RenderLoadingCards';
import { useNavigate } from 'react-router';
import Text from '../components/common/Text';
import Icon from '../components/common/Icon';

export function HomePage() {
  const { data, isLoading, isError } = useQuery<insuranceType[]>(
    [queryKeys.insuranceHomeList],
    () => fetchHomeInsuranceList()
  );
  const navigate = useNavigate();

  return (
    <div>
      {/* <h1 className="py-10 text-xl font-bold text-gray-900">전체 상품</h1> */}
      <Text type="h1" className="mb-10">
        전체 상품
      </Text>
      <div className="grid grid-cols-3 gap-4">
        {isLoading
          ? RenderLoadingCards()
          : data &&
            data.map(product => {
              return (
                <Card
                  key={product.id}
                  title={product.username}
                  onClick={() => {
                    navigate(`insurance/${product.id}`);
                  }}
                >
                  <CardLabel type="green">암보험</CardLabel>
                  <CardLabel type="red">특약</CardLabel>
                  <CardLabel type="gray">일반</CardLabel>
                </Card>
              );
            })}

        {isError && (
          <Text type="h4" className="flex items-center gap-1">
            <span>
              <Icon name="CloseCircle" color="rgb(239 68 68)" />
            </span>
            상품이 존재하지 않습니다
          </Text>
        )}
      </div>
      <Text type="h1" className="my-10">
        인공지능 보험 추천
      </Text>
      <h2 className="pb-4 text-sm font-bold text-gray-500">
        AI가 나에게 맞는 보험을 추천해줘요
      </h2>
      <div className="h-[500px]">
        <ChatBotPage />
      </div>
    </div>
  );
}
