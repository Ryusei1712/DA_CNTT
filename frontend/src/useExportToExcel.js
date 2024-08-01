// useExportToExcel.js
import { utils, writeFile } from 'xlsx';

// Hook xuất dữ liệu ra file Excel
const useExportToExcel = (data, filename, sheetName) => {
    const exportToExcel = () => {
        if (!Array.isArray(data)) {
            console.error('Dữ liệu không hợp lệ');
            return;
        }
        const ws = utils.json_to_sheet(data);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, sheetName);
        writeFile(wb, filename);
    };

    return exportToExcel;
};

export default useExportToExcel;
