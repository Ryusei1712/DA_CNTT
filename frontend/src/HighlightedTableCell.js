import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

const HighlightedTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export default HighlightedTableCell;
