import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

const Tab = ({ styles, salesLogic }) => {
  return (
    <div>
      <TableContainer
      sx={{
        marginBottom: '3rem'
      }} 
      component={Paper} 
      className={styles.table_container}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead className={styles.thead}>
            <TableRow>
              <TableCell className={styles.thead_cell}>
                Name
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Balance
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Price
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Network
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Wallet Address
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Contact Email
              </TableCell>
              <TableCell className={styles.thead_cell} align="center">
                Activate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesLogic?.SalesData?.data?.map((product, index) => (
              <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell
                className={styles.client_cell}
                component="th"
                scope="row">
                  {product?.store_name}
                </TableCell>
                <TableCell align="center">{product?.gift_card_balance}</TableCell>
                <TableCell align="center">{product?.price}</TableCell>
                <TableCell align="center">{product?.blockchain_network}</TableCell>
                <TableCell align="center">{product?.wallet_address}</TableCell>
                <TableCell align="center">
                  <a href={`mailto:${product?.contact_email}`} style={{ color: "blue" }}>
                    {product?.contact_email}
                  </a>
                </TableCell>
                <TableCell align="center">
                  <Switch
                  checked={
                    product?.is_active
                    ? true
                    : false
                  }
                  onChange={
                    () => {
                      salesLogic?.ActivateSale(
                        JSON.stringify({id: product?.id}),
                        () => salesLogic?.changeSaleStatus(product?.id),
                        "PUT"
                      )}
                  } />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tab;
