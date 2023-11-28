import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import defaultData from "./data.json";
import { useEffect, useState } from "react";
import axios from "axios";

type Products = {
  id: number;
  title: string;
  description: string;
  price: string;
};

const columnHelper = createColumnHelper<Products>();

const columns = [
  columnHelper.accessor("id", {
    header: "No",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
  }),
];
const Tabletanstack = () => {
  const [data, setTableData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(data);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response?.data, "rs");
    setTableData(response?.data);
  };

  return (
    // <Box overflow={"auto"}>
      <Table variant="striped" colorScheme="teal" overflow={"auto"}>
        <TableCaption>Just Trying TanStack Table</TableCaption>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    // </Box>
  );
};

export default Tabletanstack;
