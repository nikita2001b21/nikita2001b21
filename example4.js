//PROFESSIONAL TAX

let empName ;
let salary;
let gender;

 const PT = 200;
 empName = " nikita";
 salary =  10000;
 gender = "female";

 
 if(salary <= 10000  && gender == "female")
 {
    console.log(empName + "  will not eligible to pay " + PT);
 }

  if(salary > 10000 && gender == "female")
  {
    console.log(empName + " will have eligible to pay " + PT)
  }

   if( salary > 7000 && gender == "male")
   {
    console.log(empName + " will have eligible to pay " + PT);
   }

   if(salary<= 7000 && gender == "male")
   {
    console.log(empName + ' will not eligible  to pay ' + PT);
   }
   