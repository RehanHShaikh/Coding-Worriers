//problem1
function displayName(){
    document.write("<h1>Welcome Rehan</h1");
}

//problem2
function displayName10(){
    for(let i=1 ; i<=10 ; i++)
        document.write("<h1>Welcome Rehan</h1>");
}

//problem3
function displayNameDoWhile(){
    let i=1;
    do{
        document.write("<h1>Welcome Rehan</h1>");
        i++;
    }while(i<=10);
}

function displayNameWhile(){
    let i=1;
    while(i<=10){
        document.write("<h1>Welcome Rehan</h1>");
        i++;
    }
}

//problem4
function print1To10(){
    let i=1;
    while(i <= 10)
        document.write((i++) + ", ");
}

//problem5
function displayName1to6(){
    for(let i=1; i<=6; i++)
    document.write("<h" + i + ">Welcome Rehan</h" + i + ">");
}

//problem6
function triangle(){
    let i = 1;
    while(i <= 5){
        let j = 1;
        while(j++ <= i)
            document.write("* ");
        document.write("<br>");
        i++;
    }
}

//problem7
function prime(){
    for(let i=1; i<=100; i++){
        if(i>1) isPrime = true;
        else  continue;
        for(let j=2; (j<=i/2); j++){
            if(i%j == 0) isPrime = false;
        }
        if(isPrime) document.write(i + "<br>");
    }
}

//problem8
function fact(n){
    if(n==1) return 1;
    return n * fact(n-1);
}
function factCall(){
    let num = window.prompt("Enter a number to find factorial: ");
    if(num>0)
        document.write("factorial of " + num + " = " + fact(num));
    else document.write("Please enter a positive number");
}

//html body

const problem = [
    "Display your name in level 1 heading.",
    "Display your name in level 1 heading 10 times using for loop",
    "Display your name in level 1 heading 10 times using do-while and while loop",
    "Print 1 to 10 in single horizontal line separated with coma",
    "Write JavaScript to print your name in level 1 to level 6 heading",
    "Write JavaScript to print triangle of * (stars) of height 5",
    "Write JavaScript to print prime numbers upto 100",
    "Write JavaScript to print factorial of a number using recursion"
];
const solution = [
    "displayName()",
    "displayName10()",
    "displayNameDoWhile()",
    "displayNameWhile()",
    "print1To10()",
    "displayName1to6()",
    "triangle()",
    "prime()",
    "factCall()"
]
document.write("<table border='1' width='100%' class='table table-striped'><thead><tr><td colspan='3'><h1 align='center'>Coding Worriers</h1></td></tr><tr><th>Sr no.</th><th>Problem</th><th>Solution</th></tr></thead><tbody>");
let j=0;
for(let i=0; i<problem.length; i++) {
    document.write("<tr><td class='srno'>" + (i+1) + "</td><td>" + problem[i] + "</td><td class='soln'>");
    if(solution[i] == "displayNameDoWhile()"){
    document.write("<button class='button1 btn btn-success' onclick='displayNameDoWhile()'>do-while</button><button class='button1 btn btn-success' onclick='displayNameWhile()'>while</button></td></tr>");
    j+=2;
    }
    else{
        document.write("<button class='button btn btn-success' onclick='"+ solution[j++] +"'>Solution:"+ (i+1) + "</td></tr>");
    }
}
document.write("</tbody></table>");