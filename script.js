// 4th part

$('p').css('background','purple');

$('p').text('<strong>hello world</strong>');
$('p').html('<strong>hello world</strong>');
$('p').append('<strong>another</strong>');


$('button').click(()=> {
    $('.first').toggleClass('hidden');
})


//from first part to third
console.log("This is JaBaScript;)");

let colors = ["orange", "blue", "green", "purple"];

let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool","nice job"]
};

console.log(colors);
console.log(post);

let age = 18;

if (age>=18){
    console.log("You are an adult!");
} else{
    console.log("you r a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);   
}

console.log(colors);

let myFunction = x =>{
    console.log(x);
}

let greeter = name => {
    console.log(`Hello, ${name}`);
    if(name ==="Adam") {
        console.log("he's an adult");
    }
    if (name === "Adam"){
        console.log("he's an adult");
    }
}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");

colors.forEach(color => {
console.log(color);
});

console.log("END OF THE CODE");

