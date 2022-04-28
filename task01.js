
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const priority = document.querySelector("#input-priority");
  	const date = document.querySelector("#input-date");

	form.addEventListener('submit', (e) => {
		e.preventDefault(); // If the event does not explicitly get handled, it will not proceed the default action

		var table = document.getElementById('task-table');
		var rowCount = table.rows.length; // Using rowCount to track the number of rows
		var row = table.insertRow(rowCount); // To insert 3 data in a new row

		var cell1 = row.insertCell(0); // Details column element
		cell1.innerHTML = input.value;

		var cell2 = row.insertCell(1); // Priority column element
		cell2.innerHTML = priority.value;

		var cell3 = row.insertCell(2); // Date column element
		cell3.innerHTML = date.value;

		var cell4 = row.insertCell(3); // Add a delete button
		cell4.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)">';
		
		rowCount += 1;
		input.value = '';

  	});
});

function deleteRow(row_to_be_deleted) { // Delete the row
	var index_of_row_to_be_deleted = row_to_be_deleted.parentNode.parentNode.rowIndex;
    document.getElementById("task-table").deleteRow(index_of_row_to_be_deleted);
   }
