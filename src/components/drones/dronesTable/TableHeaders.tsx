import { TableEnum } from "../../../constants/tableConstants";
import TableHeader from "./TableHeader";

const TableHeaders = (): JSX.Element => {
  return (
    <tr>
      <TableHeader label={TableEnum.DRONE_CODE} />
      <TableHeader label={TableEnum.NAME} />
      <TableHeader label={TableEnum.RANGE} />
      <TableHeader label={TableEnum.RELEASE_DATE} />
    </tr>
  );
};

export default TableHeaders;
