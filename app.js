console.log("im linked to index.html");

// 1: 
// nummer 2
// nummer 3
// nummer 4
// nummer 6
// // dock finns inga måsvingar efter if-satsen, osäker på om det förhindrar hela grejen

// 2: 
for(i=1; i<=5; i++) {
    console.log("hej");
}

// 3:
// varje element på var sin rad

// 4:
let arr = [1.1, 1.2, 1.3, 1.4];
arr.forEach((e) => console.log(e));

// 5:
for(i=10; i<=15; i++) {
    console.log(i);
}

// 6:
for(i=10; i<=18; i+=2) {
    console.log(i);
}
// alternativt:
for(i=10; i<=18; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// 7:
const array = ['äpple', 'päron', 'banan']
for( let index=array.length-1; index>=0; index-- ) {
    console.log( array[index] )
}

// 8:
let sum = 0
for(i=0;i<=10;i++) {
    sum += i;
}
console.log(sum);

// Object:

// 1: varken x, y eller z är definierade. object.x och object.y är definierade, så de kan man skriva ut om man så önskar

// 2:
let user = {
    userName: 'kalle',
    userAge: 20,
    userScore: 10,
    totalUserCount: 100
}
let animal = {
    animalType: 'ekorre',
    animalFood: 'nötter'
}

// 3:
const user2 = {
    name: 'Sam',
    cartValues: [19, 120, 200]
}

let sum2 = 0;
for(i=0; i<user2.cartValues.length; i++) {
    sum2 += user2.cartValues[i];
}