/*
The “Grade Assigner” Application
Usage: Use else if statements
1.	Collect the a number between 1 and 100 from the user. 
2.	Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
3.	If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.


=


*/

let grade = parseInt(prompt('Please enter the student\'s grade between 1 and 100'));
if (grade >=0 && grade <=100){


    if (grade >= 90) {
        document.write('The student received an A.');
    }    
        else if (grade >=80){
            console.log('The student received an B.');

        }
        else if (grade >=70){
            console.log('The student received an C.');

        }
        else if (grade >=60){
            console.log('The student received an D.');

        }
        else{
            console.log('The student failed the course.');
        }
}
else {
        console.log('Please write a grade between 1 and 100, only numbers between 1 and 100 are accepted.')

    };