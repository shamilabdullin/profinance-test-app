import React, { Dispatch, SetStateAction, useMemo } from 'react'
import styles from './Table.module.sass'
import { TableContainer, Table as MTable, TableHead, TableRow, TableCell, Paper, TableBody, Box } from '@mui/material'
import { DataGrid, GridColDef, GridPreProcessEditCellProps, GridRowModel, GridRowsProp, GridSlotsComponent, GridSlotsComponentsProps } from '@mui/x-data-grid'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Products = {
  id: string,
  subject: string,
  article: string,
  size: string,
  availableForOrder: string,
  goodsOnTheWay: string,
  totalAmount: string
}

type TableProps = {
  products: Products[],
  setProducts: Dispatch<SetStateAction<Products[]>>
}

function Table(props: TableProps) {

  const goodsOnTheWay = useMemo(() => {
    const goodsOnTheWay = props.products.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.goodsOnTheWay)
    }, 0)
    return goodsOnTheWay
  }, [props.products])

  const totalAmount = useMemo(() => {
    const totalAmount = props.products.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.totalAmount)
    }, 0)
    return totalAmount
  }, [props.products])

  const processRowUpdate = (newRow: Products) => {
    const updatedRow = { ...newRow, isNew: false };
    props.setProducts(props.products.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  return (
    <Box
      sx={{
        boxShadow: 'none',
        maxWidth: '1200px',
        width: '100%',
      }}
    >
      <DataGrid 
        style={{ borderRadius: '18px 18px 0px 0px', minHeight: '250px' }}
        rows={props.products} 
        slots={{  
          footer: CustomFooterComponent
        }}
        columns={columns} 
        processRowUpdate={processRowUpdate}
        hideFooterPagination
        localeText={{ noRowsLabel: 'Нажите "Загрузить данные из csv" чтобы заполнить таблицу' }}
      />
      <TableContainer component={Paper} style={{ boxShadow: 'none', borderRadius: '0px 0px 18px 18px' }}>
      <MTable 
        sx={{ 
          minWidth: 650 , 
          boxShadow: 'none', 
          borderRight: 'solid 1px rgba(224, 224, 224, 1)', 
          borderLeft: 'solid 1px rgba(224, 224, 224, 1)',
          borderRadius: '0px 0px 18px 18px' 
          
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell>Итого:</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="left" style={{ paddingLeft: '0px', color: 'var(--blue-700)' }}>{goodsOnTheWay}</TableCell>
            <TableCell align="left" style={{ color: 'var(--blue-700)' }}>{totalAmount}</TableCell>
          </TableRow>
        </TableBody>
      </MTable>
    </TableContainer>
    </Box>
  )
}

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'Баркод', 
    width: 180, 
    editable: true 
  },
  {
    field: 'subject',
    headerName: 'Предмет',
    type: 'string',
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'article',
    headerName: 'Артикул поставщика',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'Размер',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'availableForOrder',
    headerName: 'Доступно к заказу',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'goodsOnTheWay',
    headerName: 'Товары в пути',
    type: 'string',
    width: 180,
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      const hasError = isNaN(params.props.value)
      return { ...params.props, error: hasError };
    }
  },
  {
    field: 'totalAmount',
    headerName: 'Итого кол-во товаров',
    type: 'string',
    width: 180,
    editable: true,
  },
];

export default Table

export function CustomFooterComponent() {
  return (
    <div></div>
  );
}