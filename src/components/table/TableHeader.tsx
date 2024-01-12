import cx from "classnames";
import PropTypes from "prop-types";
import { Typography } from "../Typography";

type TableHeaderProps = {
  className?: string;
  label: string;
};

export const TableHeader = ({ className, label }: TableHeaderProps) => {
  return (
    <div
      className={cx("px-3 flex w-full items-center justify-between", className)}
    >
      <Typography size="2xl">{label}</Typography>
    </div>
  );
};
