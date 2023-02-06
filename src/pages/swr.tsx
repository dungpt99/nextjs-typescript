import * as React from "react";
import StudentDetail from "../components/Swr/StudentDetail";

export default function SWRPage() {
  return (
    <div>
      <h1>SWR Playground</h1>
      <ul>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
        <li>
          <StudentDetail studentId="lea2aa9l7x3a5v0" />
        </li>
      </ul>
    </div>
  );
}
