// "use srict";

let number;
number = -11;
 
switch (true) {
    case number==0:
        console.log('this is zero');
        break;

    case number > 0 && (number % 2) == 0:
        console.log(number + " is Even and positive");
        break;

    case number > 0 && (number % 2) !=0:
        console.log(number + " is odd and positive");
        break;

    case number < 0 && (number % 2) ==0:
        console.log(number + " is even and negative");
        break;

    case number < 0 && (number % 2) !=0:
        console.log(number + " is odd and negative")
        break;
}







