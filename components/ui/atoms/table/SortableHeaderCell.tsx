import React from "react";

interface SortableHeaderCellProps {
  title: string;
  isSorted: boolean;
  isAscending: boolean;
  onSort: () => void;
  isDate: boolean;
}

const SortableHeaderCell: React.FC<SortableHeaderCellProps> = ({
  title,
  isSorted,
  isAscending,
  onSort,
  isDate,
}) => {
  return (
    <th className="text-center py-4" onClick={onSort}>
      {title}
      {isDate && (
        <span className="cursor-pointer">
          {isSorted ? (isAscending ? " ▲" : " ▼") : " ▲"}
        </span>
      )}
    </th>
  );
};

export default SortableHeaderCell;