import Icon from '../common/Icon';
import Text from '../common/Text';

interface Props {
  label: string;
}

export function BadgeText({ label }: Props) {
  return (
    <div className="flex w-fit items-center justify-center gap-2 text-lg font-semibold">
      <Icon name="BadgeCheck" />
      <Text type="span">{label}</Text>
    </div>
  );
}
