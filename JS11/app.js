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


//4: Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage() {
    document.getElementById("myImage").src = "https://m.media-amazon.com/images/S/pv-target-images/95d8bc8a1b90b3f592156e1b98e099b468180bf59c5d5d7f9d0ac5c0a92d34ea._SX1080_FMjpg_.jpg";
}

function resetImage() {
    document.getElementById("myImage").src = "https://m.media-amazon.com/images/S/pv-target-images/4a35c033f66805ba67d017dbd3ce2ab01a12b1801ffa6197ceb72420d6ea087d._SX1080_FMjpg_.jpg";
}

//5: Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counterValue').innerText = counter;
}

function decreaseCounter() {
    counter--;
    document.getElementById('counterValue').innerText = counter;
}