import GridItem from "../GridItem/GridItem";
import { Table } from "./StyledTable";

const GridTable = ({ arr, type }) => {
  return (
    <div>
      <Table>
        {arr.map((item, index) => (
          <GridItem
            key={index}
            name={item.name}
            date={item.dob}
            email={item.client_email}
            id={item.id}
            type={type}
          />
        ))}
      </Table>
    </div>
  );
};

export default GridTable;
