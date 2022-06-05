import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

/**
 * 
 * Table Skeleton
 */
const TableSkeleton = ({
  rowCount,
  colCount,
}: {
  rowCount: number;
  colCount: number;
}) => {
  return (
    <>
      {Array.from(Array(rowCount).keys()).map((rowKey) => (
        <TableRow key={rowKey}>
          {Array.from(Array(colCount).keys()).map((cellKey) => (
            <TableCell key={cellKey}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default React.memo(TableSkeleton);
