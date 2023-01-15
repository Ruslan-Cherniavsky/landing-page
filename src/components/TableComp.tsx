import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';



export default function DataTable() {

  return (
    <>
      <div className="tableDiv col s12">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: '80vh', minHeight: '80vh', display: 'flex', top: '0', flexDirection: 'column-reverse' }} >
            <h1>comp test 1</h1>
          </TableContainer>
        </Paper>
      </div>
    </>
  );
}