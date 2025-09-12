import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import getCellFormat, { CellType } from "../helpers/getCellFormat";
import { getNestedValue } from "../helpers/getTableNestedValue";

export interface Column<TRow> {
  key: keyof TRow | string;
  label: string;
  align?: 'left' | 'center' | 'right';
  type?: CellType;
}

interface BasicTableProps<TData> {
  columns: Column<TData>[];
  data: TData[];
}

function BasicTable<T>({
  columns,
  data
}: BasicTableProps<T>) {
  return (
    <TableContainer component={Paper} className="shadow-md rounded-xl">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                align={col.align ?? "left"}
                sx={{ fontWeight: 600, color: '#8D918D', fontSize: 14 }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors"
            >
              {columns.map((col) => {
                const value = getNestedValue(row as Record<string, unknown>, String(col.key));
                return (
                <TableCell
                  key={`${String(col.key)}-${rowIndex}`}
                  align={col.align ?? "left"}
                  sx={{ color: '#272727', fontSize: 14, fontWeight: 500 }}
                >
                  {getCellFormat(value as string, col.type)}
                </TableCell>
              )})}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
