import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import React from "react";

interface ColTableProps {
    headers: Array<string>;
    colEntries: Array<Array<string | JSX.Element>>;
}
export const ColTable: React.FC<ColTableProps> = ({ headers, colEntries }) => (
    <TableContainer component={Paper}>
        <Table aria-label="Credits table">
            <TableHead>
                <TableRow>
                    {headers.map((header) => (
                        <TableCell align="center">{header}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {colEntries.map((row: Array<string | JSX.Element>, index: number) => (
                    <TableRow key={index}>
                        {row.map((entry) => (
                            <TableCell align="center">{entry}</TableCell>
                        ))}
                    </TableRow>
                ))}
                <TableRow key="credits">
                    <TableCell align="center">191</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);


interface RowTableProps {
    headers: Array<string>;
    rowEntries: Array<string | JSX.Element>;
}
export const RowTable: React.FC<RowTableProps> = ({ headers, rowEntries }) => (
    <TableContainer component={Paper}>
        <Table aria-label="Credits table">
            <TableBody>
                {
                    rowEntries.map((row: string | JSX.Element, index: number) => (
                        <TableRow>
                            <TableCell component="th" scope="row"><b>{headers[index]}</b> </TableCell>
                            <TableCell >{row}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
);