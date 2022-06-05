import { Box, Skeleton } from "@mui/material";
import React from "react";

const FormSkeleton = ({count=5}: {count?: number}) => {
  return (
    <Box display="flex" flexDirection="column">
      {Array.from(Array(count).keys()).map((rowKey) => (
        <Box mb={2} key={rowKey}>
            <Skeleton variant="rectangular" height={40}/>
        </Box>
      ))}
      <Box display="flex" justifyContent="flex-end">
        <Skeleton variant="rectangular" height={40} width={100}/>
      </Box>
    </Box>
  );
};

export default React.memo(FormSkeleton);
