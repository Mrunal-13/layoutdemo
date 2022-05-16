let alertsDropdown=document.getElementById("alertsDropdown");
let alertDetails=document.getElementById("alertDetails");
alertDetails.style.display="none";
alertsDropdown.addEventListener("click",()=>{
  if (alertDetails.style.display=="none") {
    alertDetails.style.display="";
    messageAlertDetails.style.display="none";

  }
  else{
    alertDetails.style.display="none";
  }
})

let messagesDropdown=document.getElementById("messagesDropdown");
let messageAlertDetails=document.getElementById("messageAlertDetails");
messageAlertDetails.style.display="none";

messagesDropdown.addEventListener("click",()=>{
  if (messageAlertDetails.style.display=="none") {
    messageAlertDetails.style.display="";
    alertDetails.style.display="none";

  }
  else{
    messageAlertDetails.style.display="none";
  }
})
 
function openNav() {
        if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width==="") {
          document.getElementById("mySidenav").style.width = "250px";
        }
        else{
          if (window.screen.width<=767) {
            document.getElementById("mySidenav").style.width = "";
          }
          else{
            document.getElementById("mySidenav").style.width = "63px";
          }
        }
        if (document.getElementById("leftright").style.width === "95.5%" || document.getElementById("leftright").style.width === "") {
          document.getElementById("leftright").style.width = "83.5%"
        }
        else{
          document.getElementById("leftright").style.width = "95.5%";
        }
        if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === ""){
          document.getElementById("navbar-fourth").style.width = "83.5%";
          console.log("83")
        }
        else if (document.getElementById("navbar-fourth").style.width === "78%"){
          document.getElementById("navbar-fourth").style.width = "65%";
          console.log("65")
        }
        else if(document.getElementById("navbar-fourth").style.width === "65%"){
          document.getElementById("navbar-fourth").style.width = "78%";
          console.log("78")
        }
        else{
          document.getElementById("navbar-fourth").style.width = "96%";
        }
        // if (document.getElementById("commeddiv").style.marginLeft === "1170px" || document.getElementById("commeddiv").style.marginLeft === ""){
        //   document.getElementById("commeddiv").style.marginLeft = "980px"
        // }
        // else if (document.getElementById("commeddiv").style.marginLeft === "900px" || document.getElementById("commeddiv").style.marginLeft === ""){
        //   document.getElementById("commeddiv").style.marginLeft = "700px"
        // }
        // else if(document.getElementById("commeddiv").style.marginLeft === "980px"){
        //   document.getElementById("commeddiv").style.marginLeft = "1170px";
        // }
        // else if (document.getElementById("commeddiv").style.marginLeft === "700px" || document.getElementById("commeddiv").style.marginLeft === ""){
        //   document.getElementById("commeddiv").style.marginLeft = "900px";
        //   console.log("900")
        // }
        if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === ""){
          document.getElementById("Appointment").style.marginLeft = "300px";
        }
        else if (document.getElementById("Appointment").style.marginLeft === "300px"){
          document.getElementById("Appointment").style.marginLeft = "480px"
        }
        else if (document.getElementById("Appointment").style.marginLeft === "180px"){
          document.getElementById("Appointment").style.marginLeft = "10px"
        }
        else if (document.getElementById("Appointment").style.marginLeft === "10px"){
          document.getElementById("Appointment").style.marginLeft = "180px"
        }
}

let adminSettingBox=document.getElementById("adminSettingBox");
adminSettingBox.style.display="none";
let dropbtnMyfunction=document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click",()=>{
  if (adminSettingBox.style.display==="none") {
      adminSettingBox.style.display="";
  } else {
    adminSettingBox.style.display="none";
  }
})


function showpateintTable(){
  if ( document.getElementById("pateintdropdown").style.display === 'none'){
    document.getElementById('pateintdropdown').style.display = 'block';
  }
  // document.getElementsById('btnforpateints').style.background = 'yellow';
  if (document.getElementById("navbar-fourth").style.width === "96%" || document.getElementById("navbar-fourth").style.width === ""){
    document.getElementById("navbar-fourth").style.width = "78%";
  }
  else if ( document.getElementById("navbar-fourth").style.width === "83.5%"){
    document.getElementById("navbar-fourth").style.width = "65%";
  }
  else if (document.getElementById("pateintdropdown").style.display === "block"){
    document.getElementById("pateintdropdown").style.display = "none";
    if(document.getElementById("navbar-fourth").style.width === "65%"){
      document.getElementById("navbar-fourth").style.width = "83.5%";
    }
    else if(document.getElementById("navbar-fourth").style.width === "78%"){
      document.getElementById("navbar-fourth").style.width = "96%";
    }
  }
  if(document.getElementById("vl").style.marginLeft === "10px" || document.getElementById("vl").style.marginLeft === ""){
    document.getElementById("vl").style.marginLeft = "300px"
  }
  else if(document.getElementById("vl").style.marginLeft === "300px" || document.getElementById("vl").style.marginLeft === ""){
    document.getElementById("vl").style.marginLeft = "10px"
  }
  if (document.getElementById("Appointment").style.marginLeft === "480px" || document.getElementById("Appointment").style.marginLeft === ""){
    document.getElementById("Appointment").style.marginLeft = "180px";
  }
  else if (document.getElementById("Appointment").style.marginLeft === "180px" || document.getElementById("Appointment").style.marginLeft === ""){
    document.getElementById("Appointment").style.marginLeft = "480px";
  }
  else if (document.getElementById("Appointment").style.marginLeft === "300px"){
    document.getElementById("Appointment").style.marginLeft = "10px"
  }
  else if (document.getElementById("Appointment").style.marginLeft === "10px"){
    document.getElementById("Appointment").style.marginLeft = "300px"
  }
  
}




function makelist(){
  document.getElementById('inputforhistory').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}


document.getElementById('inputforhistory').addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    
    var text = document.getElementById('inputforhistory').value;
    document.getElementById('inputforhistory').value = null;
    document.getElementById('inputforhistory').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforhistory').value;
    if( empyttext != null){
      document.getElementById('MedicalHistory').appendChild(li);
    }
  }
});

function makelist1(){
  document.getElementById('inputfordiseases').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputfordiseases').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputfordiseases').value;
    document.getElementById('inputfordiseases').value = null;
    document.getElementById('inputfordiseases').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputfordiseases').value;
    if( empyttext != null){
      document.getElementById('otherdisease').appendChild(li);
    }
  }
});

function makelist2(){
  document.getElementById('inputfordrug').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputfordrug').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputfordrug').value;
    document.getElementById('inputfordrug').value = null;
    document.getElementById('inputfordrug').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputfordrug').value;
    if( empyttext != null){
      document.getElementById('drugallergy').appendChild(li);
    }
  }
});

function makelist3(){
  document.getElementById('inputforfood').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforfood').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforfood').value;
    document.getElementById('inputforfood').value = null;
    document.getElementById('inputforfood').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforfood').value;
    if( empyttext != null){
      document.getElementById('foodallergy').appendChild(li);
    }
  }
});

function makelist4(){
  document.getElementById('inputforinsect').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforinsect').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforinsect').value;
    document.getElementById('inputforinsect').value = null;
    document.getElementById('inputforinsect').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforinsect').value;
    if( empyttext != null){
      document.getElementById('insectallergy').appendChild(li);
    }
  }
});

function makelist5(){
  document.getElementById('inputforlatex').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforlatex').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforlatex').value;
    document.getElementById('inputforlatex').value = null;
    document.getElementById('inputforlatex').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforlatex').value;
    if( empyttext != null){
      document.getElementById('latexallergy').appendChild(li);
    }
  }
});

function makelist6(){
  document.getElementById('inputformold').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputformold').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputformold').value;
    document.getElementById('inputformold').value = null;
    document.getElementById('inputformold').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputformold').value;
    if( empyttext != null){
      document.getElementById('moldallergy').appendChild(li);
    }
  }
});

function makelist7(){
  document.getElementById('inputforpet').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforpet').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforpet').value;
    document.getElementById('inputforpet').value = null;
    document.getElementById('inputforpet').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforpet').value;
    if( empyttext != null){
      document.getElementById('petallergy').appendChild(li);
    }
  }
});

function makelist8(){
  document.getElementById('inputforpollen').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforpollen').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforpollen').value;
    document.getElementById('inputforpollen').value = null;
    document.getElementById('inputforpollen').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforpollen').value;
    if( empyttext != null){
      document.getElementById('pollenallergy').appendChild(li);
    }
  }
});



document.getElementById("AddRecordButton").addEventListener("change",function(){
  console.log("selected: ",this.value);
  var value = this.value;
  document.getElementById("iframes").style.display = "block";
  if(value === "Vital Signs"){
    console.log("iframe1");
    document.getElementById("iframe1").style.display = "block";
  }
  else if(value === "Clinical Notes"){
    console.log("iframe2");
    document.getElementById("iframe2").style.display = "block";
  }
  else if(value === "Prescription"){
    console.log("iframe3");
    document.getElementById("iframe3").style.display = "block";
  }
  else if (value === "Files"){
    console.log("Files");
    document.getElementById("iframe4").style.display = "block";
  }
  else if(value === "Lab Advice"){
    console.log("Lab Advice");
    document.getElementById("iframe5").style.display = "block";
  }
  else if (value === "Treatment Plan"){
    console.log("Treatment Plan");
    document.getElementById("iframe10").style.display = "block";
  }
  else if(value === "Complete Procedure"){
    console.log("Complete Procedure");
    document.getElementById("iframe11").style.display = "block";
  }

  
});


function openAppointment(){
  if(document.getElementById("AppointmentDetails").style.display = "none")
  {
    document.getElementById("AppointmentDetails").style.display ="block";
    document.getElementById("iframes").style.display = "none";
  }
  var f = document.querySelectorAll(".iframe");
    for (let i = 0; i < f.length; i++) {
      f[i].style.display = "none";
    }
}


function openPayments(){
  document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "rgb(237, 97, 162)";
  document.getElementById("VeiwsAndPaymentsbutton").style.color = "black";
  document.getElementById("VisitReportButton").style.backgroundColor = "white";
  document.getElementById("VisitReportButton").style.color = "grey";
  document.getElementById("VisitReportButton").style.borderWidth = "1px";
  document.getElementById("VisitReportButton").style.borderStyle = "solid";
  document.getElementById("VisitReportButton").style.borderColor = "grey";
  document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "white";
  document.getElementById("ReadyCaseFormatButton").style.color = "grey";
  if(document.getElementById("AppointmentDetails").style.display = "block"){
    document.getElementById("AppointmentDetails").style.display = "none";
    document.getElementById("VeiwsAndPaymentsContent").style.display = "block"
    document.getElementById("ReadyCaseFormatContent").style.display = "none";
    document.getElementById("iframes").style.display = "none";
  }
  else if(document.getElementById("AppointmentDetails").style.display = "none"){
    document.getElementById("VeiwsAndPaymentsContent").style.display = "block";
    document.getElementById("ReadyCaseFormatContent").style.display = "none";
    document.getElementById("iframes").style.display = "none";
  }
}

function Billingp(){
  document.getElementById("Billingt").style.display = "block";
  document.getElementById("Billingp").style.backgroundColor = "yellow";
  document.getElementById("paymenthistoryp").style.backgroundColor = "white";
  document.getElementById("paymenthistoryt").style.display = "none";
}


function paymenthistory(){
  document.getElementById("Billingp").style.backgroundColor = "white";
  document.getElementById("paymenthistoryp").style.backgroundColor = "yellow";
  document.getElementById("Billingt").style.display = "none";
  document.getElementById("paymenthistoryt").style.display = "block";
}


function veiwHistory(){
  document.getElementById("veiwHistoryTable").style.display = "block";
}


function OpenReadyCase(){
  document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "rgb(237, 97, 162)";
  document.getElementById("ReadyCaseFormatButton").style.color = "black";
  document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "white";
  document.getElementById("VeiwsAndPaymentsbutton").style.color = "grey";
  document.getElementById("VisitReportButton").style.backgroundColor = "white";
  document.getElementById("VisitReportButton").style.color = "grey";
  document.getElementById("VisitReportButton").style.borderWidth = "1px";
  document.getElementById("VisitReportButton").style.borderStyle = "solid";
  document.getElementById("VisitReportButton").style.borderColor = "grey";
  document.getElementById("VeiwsAndPaymentsContent").style.display = "none";
  document.getElementById("iframes").style.display = "none";
  document.getElementById("ReadyCaseFormatContent").style.display = "block";
  if(document.getElementById("AppointmentDetails").style.display = "block"){
    document.getElementById("AppointmentDetails").style.display = "none";
  }
  
}


function VisitReport(){
  document.getElementById("VisitReportButton").style.backgroundColor = "rgb(237, 97, 162)";
  document.getElementById("VisitReportButton").style.color ="black";
  document.getElementById("VeiwsAndPaymentsbutton").style.backgroundColor = "white";
  document.getElementById("VeiwsAndPaymentsbutton").style.color = "grey";
  document.getElementById("ReadyCaseFormatButton").style.backgroundColor = "white";
  document.getElementById("ReadyCaseFormatButton").style.color = "grey";
  //document.getElementById("VisitReportButton").style.borderColor = "grey";
  if(document.getElementById("AppointmentDetails").style.display = "block"){
    document.getElementById("AppointmentDetails").style.display = "none";
  }
  if(document.getElementById("ReadyCaseFormatContent").style.display = "block"){
    document.getElementById("ReadyCaseFormatContent").style.display = "none";
  }
  if(document.getElementById("VeiwsAndPaymentsContent").style.display = "block"){
    document.getElementById("VeiwsAndPaymentsContent").style.display = "none";
  }
  if(document.getElementById("iframes").style.display = "none"){
    document.getElementById("iframes").style.display ="block";
    var f = document.querySelectorAll(".iframe");
    for (let i = 0; i < f.length; i++) {
      f[i].style.display = "block";
    }
  }
}

