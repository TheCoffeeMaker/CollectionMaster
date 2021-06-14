import React, { useEffect, useState } from "react";
import { getSuppliers } from '../../api/SuppliersApi';
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@material-ui/core";
import { useTranslation  } from 'react-i18next';

export function View(props) {
  const [suppliers, setSuppliers] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getSuppliers().then((sup) => {
      setSuppliers(sup.data);
    });
  }, []);

  function DisplaySuppliers(searchText) {
    let supplierList = suppliers;
    if (searchText) {
      supplierList = supplierList.filter(function (supplier) {
        return (
          supplier.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          supplier.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          supplier.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return supplierList.map((supplier) => (
      <Row key={supplier.id} supplier={supplier} />
    ));
  }

  return (
    <Table aria-label="suppliers">
      <TableHead>
        <TableRow>
          <TableCell>
            <Box fontWeight="bold">#</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">{t('firstName')}</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">{t('lastName')}</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">{t('company')}</Box>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplaySuppliers(props.searchText)}</TableBody>
    </Table>
  );
}
