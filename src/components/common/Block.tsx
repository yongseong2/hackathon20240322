interface BlockType {
  children: React.ReactNode;
  className?: string;
}

const Block = ({ children, className }: BlockType) => {
  return (
    <div
      className={`${className ?? 'flex-col'} flex h-fit w-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow`}
    >
      {children}
    </div>
  );
};

export default Block;
