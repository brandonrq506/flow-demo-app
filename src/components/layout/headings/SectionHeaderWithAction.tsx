import { clsx } from "clsx";

type Props = {
  action: React.ReactNode;
  className?: string;
  title: string;
};

export const SectionHeaderWithAction = ({
  action,
  className,
  title,
}: Props) => {
  return (
    <div
      className={clsx(
        "mb-1 flex h-9 items-center justify-between border-b border-gray-200",
        className,
      )}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <div className="flex items-center justify-center">{action}</div>
    </div>
  );
};
