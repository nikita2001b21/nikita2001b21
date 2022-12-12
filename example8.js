// CLASS OF STUDENT

let studentName  = "Nikita";
let percentage = 76;

if(percentage < 35)
{
    console.log(studentName + "is failed");
}
if(percentage > 30 && percentage <= 40)
{
   console.log( studentName  + "  is passed.");
}
if(percentage > 40 && percentage <= 60)
{
    console.log( studentName + " is passed with second class.");
}
if(percentage > 60 && percentage <= 75)
{
    console.log(studentName + " is passed with first class.");
}
if(percentage > 75)
{
    console.log( studentName + " is passed with distinction .")
}
if(percentage >= 100)
{
    console.log(" ERROR")
}