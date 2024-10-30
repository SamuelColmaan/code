let x = 0;

function add() {
    var name = document.getElementById('contact-name').value;
    var contact = Number(document.querySelector('#contact-number').value);

    if (name && contact) {
        var table = document.getElementById('result');
        var nameDuplicate = false;
        var contactDuplicate = false;
        
        // Loop through existing rows to check for duplicates
        for (var i = 0; i < table.rows.length - 1; i++) {
            var row = table.rows[i];
            var existingName = row.cells[0].textContent;
            var existingContact = Number(row.cells[1].textContent);

            // Check for duplicate names
            if (existingName === name) {
                nameDuplicate = true;
            }

            // Check for duplicate contact numbers
            if (existingContact === contact) {
                contactDuplicate = true;
            }

            // Exit the loop if both duplicates are found
            if (nameDuplicate && contactDuplicate) {
                break;
            }
        }

        if (nameDuplicate) {
            window.alert("A contact with this name already exists.");
            return; // Exit the function to prevent adding a duplicate
        }

        if (contactDuplicate) {
            window.alert("A contact with this number already exists.");
            return; // Exit the function to prevent adding a duplicate
        }
        
        var newRow = table.insertRow(table.rows.length - 1); // Insert before the last row
        var nameCell = newRow.insertCell(0);
        var contactCell = newRow.insertCell(1);
        
        nameCell.textContent = name;
        contactCell.textContent = contact;
        
        // Clear the input fields after adding the row
        document.getElementById('contact-name').value = '';
        document.querySelector('#contact-number').value = '';
        
        // Increment the counter and update the total
        x += 1;
        document.getElementById('res').textContent = x;
    } else {
        window.alert('Please fill out both fields.');
    }
}
