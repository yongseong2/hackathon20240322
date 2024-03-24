import ContentLoader from 'react-content-loader';

export const RenderLoadingCards = () => {
  return Array.from({ length: 6 }).map((_, index) => (
    <ContentLoader
      key={index}
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="400" height="160" />
    </ContentLoader>
  ));
};
