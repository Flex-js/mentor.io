import React from 'react';
import styles from './Table.css';

interface Table {

}

export default function Table(props: Table) {
	return (
		<table
			className={styles.uiTable}
			cellSpacing={0}
		>
			<thead className={styles.uiTableTHeader}>
				<tr className={styles.uiTableRow}>
					<th className={styles.uiTableHeaderCell}>1</th>
					<th className={styles.uiTableHeaderCell}>1</th>
					<th className={styles.uiTableHeaderCell}>1</th>
					<th className={styles.uiTableHeaderCell}>1</th>
					<th className={styles.uiTableHeaderCell}>1</th>
					<th className={styles.uiTableHeaderCell}>1</th>
				</tr>
			</thead>
			<tbody>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
				<tr className={styles.uiTableRow}>
					<td className={styles.uiTableCell}>a</td>
					<td className={styles.uiTableCell}>b</td>
					<td className={styles.uiTableCell}>c</td>
					<td className={styles.uiTableCell}>d</td>
					<td className={styles.uiTableCell}>e</td>
					<td className={styles.uiTableCell}>f</td>
				</tr>
			</tbody>
		</table>
	);
}
