// 1. Show an alert box on click on a link.

function showAlert() {
    alert('You clicked the link!');
}



// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function mobileAlert(mobileName) {
    alert('You clicked on ' + mobileName);
}


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
function deleteRow() {
    var table = document.write("table");
    return table.deleteRow(1);
}