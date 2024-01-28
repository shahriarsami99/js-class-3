let inc = document.querySelector('.inc');
let dec =document.querySelector('.dec');
let result =document.querySelector('.result');


inc .addEventListener('click', function(){
 result.value = Number(result.value) + 1;

})

dec .addEventListener('click', function(){
    if(result.value > 1){
        result.value =Number(result.value) - 1;
        dec.style.cursor= 'not-allowed';

    }
    
})
