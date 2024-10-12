let marks = prompt("Enter your marks: ");
let grade;
let comment = "Your grade is:"; 

function gradef() {
    grade = (marks >= 0 && marks <= 100) ?
        (marks >= 90 ? "A" :
            marks >= 80 ? "B" :
                marks >= 70 ? "C" :
                    marks >= 60 ? "D" :
                        marks >= 50 ? "E" : "F")
        : "Invalid Marks";
}

gradef();

switch (grade) {
    case "A":
        console.log(`${comment} ${grade} Excellent work!`);
        break;
    case "B":
        console.log(`${comment} ${grade} Well done`);
        break;
    case "C":
        console.log(`${comment} ${grade} Good job`);
        break;
    case "D":
        console.log(`${comment} ${grade} You passed, but you could do better`);
        break;
    case "E":
        console.log(`${comment} ${grade} Just Passed`);
        break;
    case "F":
        console.log(`${comment} ${grade} Sorry, you failed`);
        break;
    default:
        console.log("Invalid Marks");
        break;
}

if (grade == "A" || grade == "B" || grade == "C" || grade == "D" || grade == "E") {
    console.log(`${comment} ${grade} Congratulations! You are eligible for the next level`);
} else {
    console.log(`${comment} ${grade} Sorry, you failed. Please try again next time`);
}
