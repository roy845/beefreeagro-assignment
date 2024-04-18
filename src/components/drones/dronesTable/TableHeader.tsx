type TableHeaderProps = {
  label: string;
};

const TableHeader = ({ label }: TableHeaderProps): JSX.Element => {
  return (
    <th
      scope="col"
      className="py-3 px-6 text-center border border-white bg-[#0d0c26] hover:bg-[#b319ab] hover:text-white cursor-pointer "
    >
      {label}
    </th>
  );
};

export default TableHeader;
