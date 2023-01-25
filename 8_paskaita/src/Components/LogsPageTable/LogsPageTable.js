import LogsPageCard from "../LogsPageCard/LogsPageCard";
import { Table } from "./StyledLogsPageTable";

const LogsPageTable = ({ arr, type }) => {
  return (
    <div>
      <Table>
        {arr.map((item, index) => (
          <LogsPageCard
            key={index}
            status={item.status}
            description={item.description}
            type={type}
          />
        ))}
      </Table>
    </div>
  );
};

export default LogsPageTable;
