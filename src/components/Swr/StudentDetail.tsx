import * as React from "react";
import useSWR from "swr";
export interface IStudentDetailProps {
  studentId: any;
}

export default function StudentDetail({ studentId }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`students/${studentId}`, {
    revalidateOnFocus: false,
  });
  return <div>Name: {data.data.name || "--"}</div>;
}
