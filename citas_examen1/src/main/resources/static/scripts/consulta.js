today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
bandera = false;


months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    firstDay = (new Date(year, month)).getDay();
    daysInMonth = 32 - new Date(year, month, 32).getDate();

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    date = 1;
    for ( i = 0; i < 6; i++) {
        // creates a table row
        row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for ( j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {

                cell = document.createElement("td");

                for(var z = 0; z < jsonCitas.length; z++) {
                    var obj = jsonCitas[z];
                    var d = new Date(obj.fecha);

                    if (date === d.getDate()) {
                        var btn = document.createElement("BUTTON");
                        var t = document.createTextNode("Ver");       // Create a text node
                        btn.appendChild(t);
                        var att = document.createAttribute("onclick");        // Create a "href" attribute
                        att.value = "imprimir(" + obj.idCita + ")";            // Set the value of the href attribute
                        btn.setAttributeNode(att);
                        cell.appendChild(btn);
                        bandera = true;
                        break;
                    }else{
                        cell.appendChild(cellText);
                        cellText = document.createTextNode(date);
                    }
                }


                //cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                //alert("celda a agregar " + cellText.valueOf() );
                //cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
                bandera = false;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}