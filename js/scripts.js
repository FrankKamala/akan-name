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
