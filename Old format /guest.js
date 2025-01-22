// Function to handle delete button click
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const expenseItem = this.parentElement; // Get the parent <li> element
        expenseItem.remove(); // Remove the expense item from the list
    });
});

// Function to handle edit button click
document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function() {
        const expenseItem = this.parentElement; // Get the parent <li> element
        const description = expenseItem.children[0].innerText; // Get the description
        const amount = expenseItem.children[1].innerText; // Get the amount

        // Prompt user for new values
        const newDescription = prompt("Edit Description:", description);
        const newAmount = prompt("Edit Amount:", amount.replace('₹', '').replace(',', ''));

        // Update the values if they are not null
        if (newDescription !== null) {
            expenseItem.children[0].innerText = newDescription;
        }
        if (newAmount !== null) {
            expenseItem.children[1].innerText = '₹' + newAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
});