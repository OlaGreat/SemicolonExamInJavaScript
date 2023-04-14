let pi = 4.0;
let numerator = 4.0;
let denomenator = 1;
for (let index = 2; index <=20000 ; index++) {

    if(index % 2 !==0){
        denomenator+=2;

    let divisor = numerator/denomenator;

    pi = pi + divisor;

}
 if(index % 2 === 0){
    denomenator+=2;

    let divisor = numerator/ denomenator;

    pi = pi - divisor;

 }
 console.log(index, pi);
    
}