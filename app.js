console.log("Airplane Manager UML Class Diagram");

// An array that contains all the details regarding the created airplane
const airplane = [{
  id: "",
  type: "",
  flightAttendant: 6,
  pilot: 4,
  passenger: "",
  bcSeat: "",
  ecSeat: ""
}]

//Declearation of all of the inputs FIRST BOX - START
const airplaneId = document.getElementById("airplane-id");
const airplaneType = document.getElementById("airplane-type");
const airplaneFa = document.getElementById("airplane-fa");
const airplanePilot = document.getElementById("airplane-pilot");
const airplanePassenger = document.getElementById("airplane-passenger");
const aBusinessSeats = document.getElementById("a-businessSeats");
const aEconomySeats = document.getElementById("a-economySeats");
//Declearation of all of the inputs FIRST BOX - END

// Declearing of all of the inputs SECOND BOX - START
const crewName = document.getElementById("name");
const crewAge = document.getElementById("age");
const crewRole = document.getElementById("role-option");
const seniorYes = document.getElementById("sYes");
const seniorNo = document.getElementById("sNo");
// Declearing of all of the inputs SECOND BOX - END

// Declearing all the values from table - START
const idRow = document.getElementById("id-row");
const typeRow = document.getElementById("type-row");
// Declearing all the values from table - END

const firstButton = document.getElementById("first-button");
firstButton.addEventListener('click', () => {
  if(airplane[0].id === "") {
    airplane[0].id = airplaneId.value;
    airplane[0].type = airplaneType.value;
    airplane[0].flightAttendant = airplaneFa.value;
    airplane[0].pilot = airplanePilot.value;
    airplane[0].passenger = airplanePassenger.value;
    var newTableIdRow = document.createElement('td');
    var elementIdRow = document.getElementsByTagName("td");
    newTableIdRow.setAttribute('id', elementIdRow);
    newTableIdRow.innerHTML = airplaneId.value;
    idRow.appendChild(newTableIdRow);
    var newTableTypeRow = document.createElement('td');
    var elementTypeRow = document.getElementsByTagName("td");
    newTableTypeRow.setAttribute('id', elementTypeRow);
    newTableTypeRow.innerHTML = airplaneType.value;
    typeRow.appendChild(newTableTypeRow);
    airplaneId.value = "";
    airplaneType.value = "";
    airplaneFa.value = "";
    airplanePilot.value = "";
    airplanePassenger.value = "";
  } else {
    alert("There is already an airplan!");
    console.log(airplane);
  }
});

const secondButton = document.getElementById("second-button");
secondButton.addEventListener('click', () => {
  console.log("This is " + crewName.value + " (" + crewAge.value + " years old)" + crewRole.value);
});

// if name of the radiobutton.checked;
