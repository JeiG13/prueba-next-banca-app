import numbro from "numbro";
import moment from "moment";

export type CellType = 'date' | 'string' | 'number' | 'percentage';

function getCellFormat(cell: string, type: CellType = 'string'): string {
	switch (type) {
		case 'date': {
			if (!moment(cell).isValid()) return '---';

			const formattedDate = moment(cell, 'YYYY-MM-DD').format('DD/MM/YYYY');

			return formattedDate;
		}

		case 'string':
			return cell ?? '---';

		case 'number':
			return numbro(cell).format({ thousandSeparated: true });

		case 'percentage':
			return numbro(cell).format({ output: 'percent' });

		default:
			return cell ?? '---';
	}
}

export default getCellFormat;