var myArray = new Array();
var car = function (make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}
var Addcar = function () {
    var make = document.getElementById('carMake').value;
    var model = document.getElementById('carModel').value;
    var color = document.getElementById('carColor').value;
    var carObj = new car(make, model, color);
    myArray.push(carObj);
    showCars();
}

var showCars = function () {
    document.getElementById("Cardisplay").innerHTML = "";
    for (var i = 0; i < myArray.length; i++) {
        document.getElementById("Cardisplay").innerHTML += "<button type='button' class='btn' onclick='openEditModal(" + i + ")'>Edit</button> " + myArray[i].make + " " + myArray[i].model + " " + myArray[i].color + "<br/>";
    }
}

var sortCars = function () {
    myArray.sort(function (a, b) {
        if (a.make > b.make) return 1;
        else if (a.make < b.make) return -1;
        else return 0;
    });
    showCars();
}

function showDelete() {
    document.getElementById("Cardisplay").innerHTML = "";
    for (var i = 0; i < myArray.length; i++) {
        document.getElementById("Cardisplay").innerHTML += '<input type="checkbox" id="check' + i + '">' + myArray[i].make + " " + myArray[i].model + " " + myArray[i].color + "<br/>";
    }
}


function startDelete() {
    showDelete();
    document.getElementById("editDelete").innerHTML = "<button class='btn btn-success' onclick='confirmDelete()'>save</button>" +
         " " + "<button onclick='cancel();' class='btn btn-info'>x</button>";
}

var confirmDelete = function () {
    for (var i = myArray.length - 1; i >= 0; i--) {
        var checkBol = document.getElementById("check" + i).checked;
        if (checkBol == true) {
            myArray.splice(i, 1);
        }

    }
    cancel();
}

function cancel() {
    showCars();
    document.getElementById("editDelete").innerHTML = '<button class="btn btn-danger" onclick="startDelete();">delete</button>';
}

var openEditModal = function (i) {
    document.getElementById("editModel").value = myArray[i].model;
    document.getElementById("editMake").value = myArray[i].make;
    document.getElementById("editColor").value = myArray[i].color;
    document.getElementById("editSuccessbutton").innerHTML = "<button class='btn' onclick='saveEditChanges(" + i + ")'>Save</button>";
    $('#myModal').modal();
}

var saveEditChanges = function (i) {
    myArray[i].model = document.getElementById("editModel").value;
    myArray[i].make = document.getElementById("editMake").value;
    myArray[i].color = document.getElementById("editColor").value;
    $('#myModal').modal('toggle');
    showCars();
}


