var century,year,day,dayOfWeek,dayOfMonth; //variables declared

//input function
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year=parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("dob").value);

  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year ==""){
    alert("Input the correct year");
    return false;
  }else if (month ==""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }

}
//calculateDay function
function calculateDay(){
  getInput();
   dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    return (Math.floor(dayOfWeek));
}
//check akanDay
function checkDay(){
  day= calculateDay();
  checkGender();
}


let daysOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];// days of week array
let boyNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];   //boysnames array

//Function to checkGender
function checkGender(){
  var gen = document.getElementsByName("rads");
  if (gen[0].checked == true){
    var gender="male";
  }else if (gen[1].checked == true){
    var gender = "female";
  }

 switch(gender){
   case gender = "male":
   switch (day){
     case 0 || -0 :
        document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your Akan name is " + boyNames[0];
        break;
        case 1 || -1 :
        document.getElementById("result").innerHTML = "The day is Monday ." + " " + "Your Akan name is " + boyNames[1];
        break;
        case 2 || -2:
        document.getElementById("result").innerHTML = "The day is Tuesday ." + " " +"Your Akan name is " + boyNames[2];
        break;
        case 3 || -3:
        document.getElementById("result").innerHTML = "The day is on a Wednesday ." + "Your Akan name is " + boyNames[3];
        break;
        case 4 || -4:
        document.getElementById("result").innerHTML = "the day is Thursday . " + "Your Akan name is " + boyNames[4];
        break;
        case 5 || -5 :
           document.getElementById("result").innerHTML = "The day is on a Friday." + "  " + "Your Akan name is " + boyNames[0];
           break;
        case 6 || -6:
        document.getElementById("result").innerHTML ="The day is Saturday ." + "Your Akan name is " + boyNames[6];
        break;
        default:

   }
   break;
  case gender = "female":
  switch (day) {
    case 0||-0:
    document.getElementById("result").innerHTML = "The day is Sunday. " + "Your Akan name is Akosua";
    break;
    case 1||-1:
    document.getElementById("result").innerHTML = "The day is Monday. " + "Your Akan name is Adwoa";
    break;
    case 2||-2:
    document.getElementById("result").innerHTML = "The day is Tuesday. " + "Your Akan name is Abenaa";
    break;
    case 3||-3:
    document.getElementById("result").innerHTML = "The day is Wednesday. " + "Your Akan name is Akua";
    break;
    case 4||-4:
    document.getElementById("result").innerHTML = "The day is Thursday. " + "Your Akan name is Yaa";
    break;
    case 5||-5:
    document.getElementById("result").innerHTML = "The day is Friday. " + "Your Akan name is Afua";
    break;
    case 6||-6:
    document.getElementById("result").innerHTML = "The day is Saturday. " + "Your Akan name is Ama";
    break;

}
  break;
default:
  }
}
/*fnames
akosua sunday
adwoa Monday
abenaa Tuesday
akua  Wednesday
yaa   Thursday
afua  Friday
ama   saturday

mnames
 sunday  Kwasi
 Monday Kwadwo
 Tuesday Kwabena
Wednesday "Kwaku
Thursday Yaw
Friday Kofi
saturday Kwame

*/
