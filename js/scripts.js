var century,year,day,dayOfWeek,dayOfMonth;

function getInput(){
  century = parseInt(document.getElementById("century").value);
  year=parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("day").value);

  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }

}
function calculateDay(){
  getInput();
   dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    return (Math.floor(dayOfWeek));
}


let daysOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let boyNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
