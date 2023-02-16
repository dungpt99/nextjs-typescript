import { Work } from "@/src/models";
import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";

export interface IWorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: IWorkListProps) {
  if (workList.length === 0) return null;

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <Box>{work.title}</Box>
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}
