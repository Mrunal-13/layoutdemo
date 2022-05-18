// document.addEventListener('DOMContentLoaded',()=>{
//     const dt = new Date()

//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     document.querySelector('.todays_div_header-value').innerText = `${dt.toLocaleString('en-us',{weekday:'short'})}, ${dt.toLocaleString('en-us',{day:'2-digit'})} ${dt.toLocaleString('en-us',{month:'short'})}`

//     // Tomorrow day
//     dt.setDate(new Date().getDate() + 1);
//     document.querySelector('.other_day.yellow_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.yellobw_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 3rd day from today
//     dt.setDate(new Date().getDate() + 2);
//     document.querySelector('.other_day.blue_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.blue_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 4th day from today
//     dt.setDate(new Date().getDate() + 3);
//     document.querySelector('.other_day.green_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.green_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 5th day from today
//     dt.setDate(new Date().getDate() + 4);
//     document.querySelector('.other_day.darkPurple_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.darkPurple_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 6th day from today
//     dt.setDate(new Date().getDate() + 5);
//     document.querySelector('.other_day.purple_cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.purple_cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

//     // 7th day from today
//     dt.setDate(new Date().getDate() + 6);
//     document.querySelector('.other_day.red_Cal .dayDate').innerText = `${dt.toLocaleString('en-us', {day:'2-digit'})} ${dt.toLocaleString('en-us', {month:'short'})}`
//     document.querySelector('.other_day.red_Cal .dayName').innerText = `${dt.toLocaleString('en-us', {weekday:'long'})}`

// })


var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");
var table3 = document.getElementById("table3");

var selection = document.getElementById("Chooseday");

selection.addEventListener("change", function() {

    if (selection.value == 'Day') {
        table1.style.display = 'table';
        table2.style.display = 'none';
        table3.style.display = 'none';
    } else if (selection.value == 'Week') {
        table1.style.display = 'none';
        table2.style.display = 'table';
        table3.style.display = 'none';
    } else if (selection.value == 'Month') {
        table1.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'table';
    }

});

$('.print').click(function() {
    $("#printRight").append($(".MainCalender"));
    $("#table1 tbody tr td:first-child").css("color", "white");
    $("#table1 tbody tr td:first-child").css("background-color", "#ACD4F1");
    $("#table2 tbody tr td:first-child").css("color", "white");
    $("#table2 tbody tr td:first-child").css("background-color", "#ACD4F1");
    $("#table3 tbody tr td").css("background-color", "white");
    $("#table3 tbody tr td").css("color", "#007185");
    $("table thead tr th:first-child").css("background-color", "#7CD8FF");
    $("table thead tr th").css("color", "#007185");
    $("table thead tr th").css("background-color", "#7CD8FF");
    $("table thead tr th div").css("border", "none");
    $("table thead tr th div").css("background-color", "#7CD8FF");
});

var select = document.getElementById("selectDays");

select.addEventListener("change", function() {

    if (select.value == 'day') {
        table1.style.display = 'table';
        table2.style.display = 'none';
        table3.style.display = 'none';
    } else if (select.value == 'week') {
        table1.style.display = 'none';
        table2.style.display = 'table';
        table3.style.display = 'none';
    } else if (select.value == 'month') {
        table1.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'table';
    }

});

var selectFontSize = document.getElementById("selectFontSize");

selectFontSize.addEventListener("change", function() {

    if (selectFontSize.value == 'smallest') {
        $("table thead tr th").css("font-size", "4px");
        $("table tbody tr td").css("font-size", "4px");

    } else if (selectFontSize.value == 'smaller') {
        $("table thead tr th").css("font-size", "6px");
        $("table tbody tr td").css("font-size", "6px");

    } else if (selectFontSize.value == 'small') {
        $("table thead tr th").css("font-size", "8px");
        $("table tbody tr td").css("font-size", "8px");

    } else if (selectFontSize.value == 'normal') {
        $("table thead tr th").css("font-size", "10px");
        $("table tbody tr td").css("font-size", "10px");

    } else if (selectFontSize.value == 'big') {
        $("table thead tr th").css("font-size", "12px");
        $("table tbody tr td").css("font-size", "12px");

    } else if (selectFontSize.value == 'bigger') {
        $("table thead tr th").css("font-size", "14px");
        $("table tbody tr td").css("font-size", "14px");

    } else if (selectFontSize.value == 'biggest') {
        $("table thead tr th").css("font-size", "16px");
        $("table tbody tr td").css("font-size", "16px");
    }

});

var selectOrientation = document.getElementById("selectOrientation");

selectOrientation.addEventListener("change", function() {

    if (selectOrientation.value == 'auto') {
        $(".MainCalender").css("padding", "10px");

    } else if (selectOrientation.value == 'portrait') {
        $(".MainCalender").css("padding", "100px");

    } else if (selectOrientation.value == 'landscape') {
        $(".MainCalender").css("padding", "10px");
    }
});

var selectColor = document.getElementById("selectColor");

selectColor.addEventListener("change", function() {

    if (selectColor.value == 'outline') {


    } else if (selectColor.value == 'fullcolor') {
        $("#printRight").append($(".MainCalender"));
        $("#table1 tbody tr td:first-child").css("color", "white");
        $("#table1 tbody tr td:first-child").css("background-color", "#ACD4F1");
        $("#table2 tbody tr td:first-child").css("color", "white");
        $("#table2 tbody tr td:first-child").css("background-color", "#ACD4F1");
        $("#table3 tbody tr td").css("background-color", "white");
        $("#table3 tbody tr td").css("color", "#007185");
        $("table thead tr th:first-child").css("background-color", "#7CD8FF");
        $("table thead tr th").css("color", "#007185");
        $("table thead tr th").css("background-color", "#7CD8FF");
        $("table thead tr th div").css("border", "none");
        $("table thead tr th div").css("background-color", "#7CD8FF");

    } else if (selectColor.value == 'black-white') {
        $("table tbody tr td:first-child").css("background-color", "#e7e7e7");
        $("table tbody tr td").css("color", "black");
        $("table thead tr th").css("background-color", "#d3d3d3");
        $("table thead tr th div").css("background-color", "#d3d3d3");
        $("table thead tr th").css("color", "black");
        $("#table3 tbody tr td").css("background-color", "white");
    }
});

$('#btnCancel').click(function() {
    $(".RightSideMAin").append($(".MainCalender"));
    $("table tbody tr td").css("color", "black");
    $("table tbody tr td").css("background-color", "white");
    $("table thead tr th").css("color", "black");
    $("table thead tr th").css("background-color", "white");
    $("table thead tr th div").css("background-color", "white");
    $("table thead tr th div .dateColor").css("border", "1px solid");
    $("table thead tr th div .dateColor").css("background-color", "rgba(182, 255, 255, 1)");
    $(".MainCalender").css("padding", "10px");
    $("table thead tr th").css("font-size", "1rem");
    $("table tbody tr td").css("font-size", "1rem");
});

$('table tbody tr  td').on('click', function() {
    $("#exampleModal").modal("show");
});

$(document).ready(function() {
    document.getElementById("Appointment").style.background = "rgba(217, 239, 255, 1)";
    document.getElementById("Reminder").style.background = "white";
    document.getElementById("BlockCalender").style.background = "white";
});
$(document).ready(function() {
    $("#Appointment").click(function() {
        $("div.ToggleAppointment").show();
        $("div.toggleReminder").hide();
        $("div.toggleBlockCalender").hide();

        document.getElementById("Appointment").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Reminder").style.background = "white";
        document.getElementById("BlockCalender").style.background = "white";
    });
});

$(document).ready(function() {
    $("#Reminder").click(function() {
        $("div.ToggleAppointment").hide();
        $("div.toggleReminder").show();
        $("div.toggleBlockCalender").hide();
        document.getElementById("Reminder").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Appointment").style.background = "white";
        document.getElementById("BlockCalender").style.background = "white";
    });
});
$(document).ready(function() {
    $("#BlockCalender").click(function() {
        $("div.ToggleAppointment").hide();
        $("div.toggleReminder").hide();
        $("div.toggleBlockCalender").show();

        document.getElementById("BlockCalender").style.background = "rgba(217, 239, 255, 1)";
        document.getElementById("Reminder").style.background = "white";
        document.getElementById("Appointment").style.background = "white";
    });
});

function oncustom() {
    $('#myModal').modal('show');
}

function onAllday() {
    $('#myModal').modal('hide');
}

function displayDivDemo(elementValue) {
    if (elementValue.value == 0) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    } else if (elementValue.value == 1) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'block';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    } else if (elementValue.value == 2) {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('RepeatOnWeek')[0].style.display = 'none';
        document.getElementsByClassName('RepeatOnMonth')[0].style.display = 'none';

    }
}

function onBlockList() {
    document.getElementsByClassName('BlockHidediv')[0].style.display = 'block';
    document.getElementsByClassName('AlldayHideDiv')[0].style.display = 'none';
}

function onAllday2() {
    document.getElementsByClassName('AlldayHideDiv')[0].style.display = 'block';
    document.getElementsByClassName('BlockHidediv')[0].style.display = 'none';
}

$(document).on('change', 'input[type=color]', function() {
    this.parentNode.style.backgroundColor = this.value;
});

function printData() {
    var dayToPrint = document.getElementById("table1");
    var weekToPrint = document.getElementById("table2");
    var monthToPrint = document.getElementById("table3");

    if (dayToPrint.style.display == "table") {
        dayToPrint.style.width = "100%";
        dayToPrint.style.height = "100%";
        newWin = window.open("");
        newWin.document.write(dayToPrint.outerHTML);
        newWin.print();
        newWin.close();

    } else if (weekToPrint.style.display == "table") {
        weekToPrint.style.width = "100%";
        weekToPrint.style.height = "100%";
        newWin2 = window.open("");
        newWin2.document.write(weekToPrint.outerHTML);
        newWin2.print();
        newWin2.close();

    } else if (monthToPrint.style.display == "table") {
        monthToPrint.style.width = "100%";
        monthToPrint.style.height = "100%";
        newWin3 = window.open("");
        newWin3.document.write(monthToPrint.outerHTML);
        newWin3.print();
        newWin3.close();
    }
}

$('#btnPrint').on('click', function() {
    printData();
});