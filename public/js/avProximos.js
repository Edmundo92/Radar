// var body = document.querySelector("tbody");

// var pegarSelect = [];
// body.addEventListener("click", selectVetor);
// function selectVetor(event){

//     var aux = event.target;
//     var k = aux.parentNode;
//     pegarSelect.push(k);

// };

// document.querySelector(".btn-transladar").addEventListener("click", function(){
//     alert("Yes entrou");
    
//     document.removeEventListener("click", selectVetor);
//     //var id = dados.id;
   
    
      
//     //if(transladarX != '' && transladarY != ''){
        
//         pegarSelect.forEach(function(v){
//             var transladarX = document.querySelector(".transladarX").value;
//             var transladarY = document.querySelector(".transladarY").value;
//             var x = v.querySelector(".value_x").innerHTML;
//             var y = v.querySelector(".value_y").innerHTML;
//             var d = v.querySelector(".value_d").innerHTML;
//             var id = v.querySelector(".id").innerHTML;
//             var av = document.getElementById(id);

//             alert("x: "+x+"----"+"y: "+y);
//             alert("X: "+transladarX+"----"+"Y: "+transladarY);

//             var X = parseFloat(transladarX) + parseFloat(x);
//             var Y = parseFloat(transladarY) + parseFloat(y);

//             alert("X: "+X+"----"+"Y: "+Y);

            

//             var returnRaio = calcRaio(X, Y);
//             var returnAngulo = calcAngulo(X, Y);
//             alert("Angulo "+returnAngulo);
//             v.querySelector(".value_x").innerHTML = X;
//              v.querySelector(".value_y").innerHTML = Y;
//             v.querySelector(".box-v_direcao").innerHTML = returnRaio;
//             v.querySelector(".value_a").innerHTML = returnAngulo;

//             var value_X = 235 + X;
//             var value_Y = 235 - Y;
//             av.style.transform = "translate("+value_X+"px"+","+value_Y+"px"+")";

//         });

//         pegarSelect = [];
    
// });
