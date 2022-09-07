/*const n=[1,2,3,4,5];
let maximo=n[0];
let minimo=n[0];
for(let i=1;i<n.length;i++){
    if(minimo>n[i]){
        minimo=n[i];
    }
    else{ 
        if (maximo<n[i]){
        maximo=n[i];
    }

}
};
console.log("el maximo es " + maximo);
console.log("el minimo es " + minimo );
*/



//promedio

const n=[1,2,3,4,5];
let maximo=n[0];
let minimo=n[0];
let sumatoria=0;
for(let i=1;i<n.length;i++){
    sumatoria=sumatoria + n[i];
}


function promedio(){
sumatoria/n.length;
return sumatoria;
}
console.log(promedio());
