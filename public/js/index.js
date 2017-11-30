//var insert = require('./createElements.js');

var optionC = document.querySelector(".cC");
var optionP = document.querySelector(".cP");
var boxCoord = document.querySelectorAll(".box-coordenadas");

var btn = document.querySelector(".btn-inserir");

var cCartesiana = document.querySelector(".cCartesiana");
var cPolar = document.querySelector(".cPolar");

var dadosForm = document.getElementById("dadosForm");

var tBody = document.querySelector(".tbody");
var table = document.querySelector('.table');
var id = 1;


//pegar os dados de inserção
var dForm = {
    valueX: dadosForm.valueX,
    valueY: dadosForm.valueY,
    valueR: dadosForm.valueR,
    valueA: dadosForm.valueA,
    valueV: dadosForm.valueV,
    valueD: dadosForm.valueD
};


optionC.addEventListener("click", function(){
    if(optionC.value == 'cartesiana'){
        
        if(cPolar.getAttribute("class").valueOf("none") != -1){
            cPolar.classList.add("none");
        }
        cCartesiana.classList.remove("none");
        
    }
});

optionP.addEventListener("click", function(){
    if(optionP.value == 'polar'){
        if(cCartesiana.getAttribute("class").valueOf("none") != -1){
            cCartesiana.classList.add("none");
        }
        cPolar.classList.remove("none");
    }
});



var k =  dForm.valueV.value;
function insert(x, y, returnRaio, returnAngulo, d, v, contId){
                
    var TR = document.createElement("tr");
    TR.setAttribute("class", "table_tr");
    TR.setAttribute("id", contId);
    
    var text1, text2, text3, text4, text5, text6;
    var vetTD1 = document.createElement("td");
    var vetTD2 = document.createElement("td");
    var vetTD3 = document.createElement("td");
    var vetTD4 = document.createElement("td");
    var vetTD5 = document.createElement("td");
    var vetTD6 = document.createElement("td");
    var vetID = document.createElement("td");
    
    var vetInput = document.createElement("input");
    
    //criar os atributos do input
    vetInput.setAttribute("type","checkbox");
    
    //add atributos nos td e no tr
    vetInput.setAttribute("class", "select");
    vetID.setAttribute("class", "id");
    vetTD1.setAttribute("class", "value_x");
    vetTD2.setAttribute("class", "value_y");
    vetTD3.setAttribute("class", "box-v_direcao");
    vetTD4.setAttribute("class", "value_a");
    vetTD5.setAttribute("class", "value_v");
    vetTD6.setAttribute("class", "value_d");
    
    
    var textid = document.createTextNode(contId);
    
    if(x >= 0 && y >= 0){
        

        text1 = document.createTextNode(x);
        text2 = document.createTextNode(y);
        text3 = document.createTextNode(returnRaio);
        text4 = document.createTextNode(returnAngulo);
        
    }else if(r >= 0 && a >= 0){
        alert();
        text1 = document.createTextNode(returnPolar.x);
        text2 = document.createTextNode(returnPolar.y);
        text3 = document.createTextNode(r);
        text4 = document.createTextNode(a);
    }
    
    text5 = document.createTextNode(v);
    text6 = document.createTextNode(d);
    
    vetID.appendChild(textid);
    vetTD1.appendChild(text1);
    vetTD2.appendChild(text2);
    vetTD3.appendChild(text3);
    vetTD4.appendChild(text4);
    vetTD5.appendChild(text5);
    vetTD6.appendChild(text6);
    
    TR.appendChild(vetInput);
    TR.appendChild(vetID);
    TR.appendChild(vetTD1);
    TR.appendChild(vetTD2);
    TR.appendChild(vetTD3);
    TR.appendChild(vetTD4);
    TR.appendChild(vetTD5);
    TR.appendChild(vetTD6);
    
    return TR;
}

//iserir o avião 
function insertAviao(x, y, d, contId, r, a){
    var aviao = document.createElement("img");
    var box_av = document.createElement("DIV");
    var X, Y;

    console.log("R :"+ r);
        console.log("A :"+ a);
    
    aviao.setAttribute("src","images/aviao_branco.png");
	aviao.setAttribute("class","avSize");
    box_av.setAttribute("id",contId);

    
    if(x >= 0 && y >= 0){
        alert("Cartesiana");
        X = 235 + x;
        Y = 235 - y;
        console.log("X :"+ X);
        console.log("Y :"+ Y);
        box_av.style.transform = "translate("+X+"px"+","+Y+"px"+")";
    }
    if(r >= 0 && a >= 0){
        alert("Polar");
        X = 235 + r;
        Y = 235 - a;
        console.log("X :"+ X);
        console.log("Y :"+ Y);
        box_av.style.transform = "translate("+X+"px"+","+Y+"px"+")";
    }
    
    
    aviao.style.transform = "rotate("+-d+"deg)";
    
    box_av.appendChild(aviao);
    
    var container = document.querySelector(".container");
    container.appendChild(box_av);
}



//calcular o angulo
function calcAngulo(x, y){
    var angulo = Math.atan2(y, x) * 180/Math.PI;
    return parseFloat(angulo).toFixed(2);
}

//calcular o raio
function calcRaio(x, y){
    var soma = Math.pow(x,2) + Math.pow(y,2);
    var res = Math.sqrt(soma);
    var converter = parseFloat(res).toFixed(2);
    
    return converter;
    
}

//cartesiana para polar
function conversaoPolar(a, r){
    
    var angulo = (a * Math.PI/180);
    var x = r * (Math.cos(angulo));
    var y = r * (Math.sin(angulo));
    
    return {
        x: x.toFixed(2),
        y: y.toFixed(2)
    }
}

//
btn.addEventListener("click", function(x, y){
	var x = parseFloat(dForm.valueX.value);
    var y = parseFloat(dForm.valueY.value);
    var d = parseFloat(dForm.valueD.value);
    var v = parseFloat(dForm.valueV.value);
    var r = parseFloat(dForm.valueR.value);
    var a = parseFloat(dForm.valueA.value);

    var contId = id++;
    
    var returnPolar = conversaoPolar(a, r);
    var returnRaio = calcRaio(x, y);
    var returnAngulo = calcAngulo(x, y);
    //var returnTR = insert(x, y, returnRaio, returnAngulo, d, v, r, a, returnPolar, contId);
    var returnTR;
    
	
    
    if(tBody.childElementCount == 5) alert("Numero máximo de Aviões");
    
    if(x >= 0 && y >= 0){
        alert("Cartesiana");
        insertAviao(x, y, d, contId, r, a); 
        var bd = armazenarDados(contId, x, y, returnRaio, returnAngulo, v, d);
        returnTR = insert(bd.vX, bd.vY, bd.vR, bd.vA, bd.vD, bd.vV, bd.id);
    }else if(r >= 0 && a >= 0){
        alert("Polar");
        insertAviao(x, y, d, contId, r, a); 
        var bd = armazenarDados(contId, x, y, returnRaio, returnAngulo, v, d);
        returnTR = insert(bd.vR, bd.vA, bd.vX, bd.vY, bd.vD, bd.vV, bd.id);
    }

    
    if(tBody.childElementCount < 5) tBody.appendChild(returnTR);
      
    dadosForm.reset();
});






   
/*
Para pegar os dados após selecionar a checkbok, devo acessar o pai (parentNode), e depois acessar os filhos do elemento TR acessado

*/
var select = document.querySelectorAll(".select");
console.log(select.parentNode);


////
var body = document.querySelector("tbody");

var pegarSelect = [];
body.addEventListener("click", selectVetor);
function selectVetor(event){

    var aux = event.target;
    var k = aux.parentNode;
    
    if(!k.querySelector(".select").hasAttribute("checked")){
        k.querySelector(".select").setAttribute("checked","");
        pegarSelect.push(k);
    }else{
        k.querySelector(".select").removeAttribute("checked");
        pegarSelect = [];
    }

};
////



//função de transladar
document.querySelector(".btn-transladar").addEventListener("click", function(){
    alert("Yes entrou");
    var tbodyR = document.querySelectorAll(".table_tr");
    // tbodyR.forEach(function(vet){
    //     vet.addEventListener("mousemove",function(){
    //         vet.querySelector(".select").removeAttribute("checked");
    //     });
    // });
    document.removeEventListener("click", selectVetor);
    //var id = dados.id;
        console.log(pegarSelect);
    
      
    //if(transladarX != '' && transladarY != ''){
        alert("Yes entrou no if");
        pegarSelect.forEach(function(v){
            var transladarX = document.querySelector(".transladarX").value;
            var transladarY = document.querySelector(".transladarY").value;
            var x = v.querySelector(".value_x").innerHTML;
            var y = v.querySelector(".value_y").innerHTML;
            var d = v.querySelector(".value_d").innerHTML;
            var id = v.querySelector(".id").innerHTML;
            var av = document.getElementById(id);

            //alert("x: "+x+"----"+"y: "+y);
            //alert("X: "+transladarX+"----"+"Y: "+transladarY);

            var X = parseFloat(transladarX) + parseFloat(x);
            var Y = parseFloat(transladarY) + parseFloat(y);

            //alert("X: "+X+"----"+"Y: "+Y);

            

            var returnRaio = calcRaio(X, Y);
            var returnAngulo = calcAngulo(X, Y);
            alert("Angulo "+returnAngulo);
            v.querySelector(".value_x").innerHTML = X;
             v.querySelector(".value_y").innerHTML = Y;
            v.querySelector(".box-v_direcao").innerHTML = returnRaio;
            v.querySelector(".value_a").innerHTML = returnAngulo;

            var value_X = 235 + X;
            var value_Y = 235 - Y;
            av.style.transform = "translate("+value_X+"px"+","+value_Y+"px"+")";

        });

        pegarSelect = [];
    
});

//função Escalonar
document.querySelector(".btn-escalonar").addEventListener("click", function(){
    alert("Yes entrou");
    
    document.removeEventListener("click", selectVetor);
    //var id = dados.id;
   
    //if(transladarX != '' && transladarY != ''){
        alert("Yes entrou no if");
        pegarSelect.forEach(function(v){
            var escalonarX = document.querySelector(".escalonarX").value;
            var escalonarY = document.querySelector(".escalonarY").value;
            var x = v.querySelector(".value_x").innerHTML;
            var y = v.querySelector(".value_y").innerHTML;
            var d = v.querySelector(".value_d").innerHTML;
            var id = v.querySelector(".id").innerHTML;
            var av = document.getElementById(id);

            alert("x: "+x+"----"+"y: "+y);
            alert("X: "+escalonarX+"----"+"Y: "+escalonarY);

            var X = (parseFloat(escalonarX)) * (parseFloat(x));
            var Y = (parseFloat(escalonarY)) * (parseFloat(y));

            alert("X: "+X+"----"+"Y: "+Y);

            

            var returnRaio = calcRaio(X, Y);
            var returnAngulo = calcAngulo(X, Y);
            alert("Angulo "+returnAngulo);
            v.querySelector(".value_x").innerHTML = X;
             v.querySelector(".value_y").innerHTML = Y;
            v.querySelector(".box-v_direcao").innerHTML = returnRaio;
            v.querySelector(".value_a").innerHTML = returnAngulo;

            var value_X = 235 + X;
            var value_Y = 235 - Y;
            av.style.transform = "translate("+value_X+"px"+","+value_Y+"px"+")";

        });

        pegarSelect = [];
     
});


//função que verifica se o body do "mostrar relatório" tem algum tr, caso tenha ele apaga e depois inseri novos elementos
function removeElementChildren(elementParent){
    if(elementParent.childElementCount > 0){
        var ChildrensElement = elementParent.querySelectorAll("TR");
        ChildrensElement.forEach(function(childrenSingle){
            elementParent.removeChild(childrenSingle);
        });
    }
}

//aviões proximos uns dos outros
var avProxAv = document.querySelector(".avProximo_av");
document.querySelector(".btn_Av_Proximos").addEventListener("click", function(){
    
    document.removeEventListener("click", selectVetor);
    var k = document.querySelector(".lista-relatorio");
    removeElementChildren(k);

    
        for(var i=0; i<pegarSelect.length; i++){

            var x = pegarSelect[i].querySelector(".value_x").innerHTML;
            var y = pegarSelect[i].querySelector(".value_y").innerHTML;
            var id = pegarSelect[i].querySelector(".id").innerHTML;
            
            for(var j=i+1; j<pegarSelect.length; j++){

                var x1 = pegarSelect[j].querySelector(".value_x").innerHTML;
                var y1 = pegarSelect[j].querySelector(".value_y").innerHTML;
                var id1 = pegarSelect[j].querySelector(".id").innerHTML;
                
                var calc = Math.pow((x-x1), 2) + Math.pow((y-y1), 2) ;
                var result = Math.sqrt(calc);
                
                if(result <= parseInt(avProxAv.value)){
                    
                    var lista= document.querySelector(".lista-relatorio");
    
                    var tr = document.createElement("TR");
                    var td1 = document.createElement("TD");
                    var td2 = document.createElement("TD");
                    var td3 = document.createElement("TD");
                    
                    var text1 = document.createTextNode(id);
                    var text2 = document.createTextNode(id1);
                    var text3 = document.createTextNode(result);

                    td1.appendChild(text1);
                    td2.appendChild(text2);
                    td3.appendChild(text3);

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    
                    lista.appendChild(tr);
                    
                }                
            
            }
        }

        pegarSelect = [];
     
});


//Rotacionar
var cont = 1;
var btnRotacionar = document.querySelector(".btn-rotacionar");
btnRotacionar.addEventListener("click", rotacionar);
function rotacionar(){
    //var rotacionarX = document.querySelector(".rotacionarX").value;
    //var rotacionarY = document.querySelector(".rotacionarY").value;
    
    
    pegarSelect.forEach(function(v){
         setTimeout(function(){

            var rotacionarX = document.querySelector(".rotacionarX").value;
            var rotacionarY = document.querySelector(".rotacionarY").value;
            var angulo = document.querySelector(".angulo").value;
            var x = v.querySelector(".value_x").innerHTML;
            var y = v.querySelector(".value_y").innerHTML;
            //var d = v.querySelector(".value_d").innerHTML;
            var id = v.querySelector(".id").innerHTML;
            var av = document.getElementById(id);

            //alert("x: "+x+"----"+"y: "+y);
            //alert("X: "+rotacionarX+"----"+"Y: "+rotacionarY);

            var X =  parseFloat(x) - parseFloat(rotacionarX);
            var Y =  parseFloat(y) - parseFloat(rotacionarY);

            alert("X: "+X+"----"+"Y: "+Y+"  Angulo->"+angulo);

            

            // var returnRaio = calcRaio(X, Y);
            // var returnAngulo = calcAngulo(X, Y);
            // alert("Angulo "+returnAngulo);
            v.querySelector(".value_x").innerHTML = X;
            v.querySelector(".value_y").innerHTML = Y;
            // v.querySelector(".box-v_direcao").innerHTML = returnRaio;
            // v.querySelector(".value_a").innerHTML = returnAngulo;

            
            //converte de radiano para graus
            var rad = angulo * (Math.PI/180);
            var newAnguloS = Math.sin(rad);
            var newAnguloC = Math.cos(rad);

            var xLinha = (X * newAnguloC) - (Y * newAnguloS);
            var yLinha = (Y * newAnguloC) + (X * newAnguloS);
            //alert("Xlinha -> "+xLinha+" --  Ylinha-->"+yLinha);
            
            var cX = parseFloat(xLinha) + parseInt(rotacionarX);
            var cY = parseFloat(yLinha) + parseInt(rotacionarY);

            var value_X = parseInt(235) + (parseFloat(cX) + parseInt(rotacionarX));
            var value_Y = parseInt(235) - (parseFloat(cY) + parseInt(rotacionarY));
            
            alert("VX-->"+value_X);
            alert("VY -->"+value_Y);
            av.style.transform = "translate("+value_X+"px"+","+value_Y+"px"+")";

         },2000 * cont++);

    });

    

    
}


//função para calcular a rota de colisão
var btnRotaColisao = document.querySelector(".btn_rota-colisao");
btnRotaColisao.addEventListener("click", rotaColisao);
function rotaColisao(){
    var rotaColisaoTempo = document.querySelector(".rotaColisao");
    alert(rotaColisaoTempo.value);  

    rotaColisaoTempo.value.reset();
}


//funcção montar a função

function montarFunc(){

    var X2=4, Y2=7, A ,B ,C ,D ,E 
     angulo = 45;
     
    //coeficiente angular
    var rad = angulo * (Math.PI/180);
    var coeficienteAn = Math.tan(rad);

    /*
        Y2 - y = m(X2 - x)    
        m - coeficienteAn


        (m * x2) => coeficienteAn.toFixed() * X2
        

    */
    var calcM_X = coeficienteAn.toFixed() * X2;
    //var calcM_X1 = coeficienteAn.toFixed() * x;
    var calcY2_MX = calcM_X - Y2;  
    //var Y = calcY2_MX - X;
    calcValueX2(expressao);
}

function calcValueX2(expressao){


}

//selecionar os checkboxs
// var select = document.querySelectorAll(".select");
// var vetSelect = [];
// for(var i=0; i<select.length; i++){
// 	vetSelect.push(select[i]);
// }

// vetSelect.forEach(function(value){
// 	value.addEventListener('click', function(v){
// 		alert(v.target.parentNode.id);
// 	});
// });


function armazenarDados(contId, x, y, returnRaio, returnAngulo, v, d){
    sessionStorage.setItem("id"+contId, contId);
    sessionStorage.setItem("valueX"+contId, x);
    sessionStorage.setItem("valueY"+contId, y);
    sessionStorage.setItem("valueR"+contId, returnRaio);
    sessionStorage.setItem("valueA"+contId, returnAngulo);
    sessionStorage.setItem("valueV"+contId, v);
    sessionStorage.setItem("valueD"+contId, d);


    return bdReturn = {
        id : sessionStorage.getItem("id"+contId),
        vX : sessionStorage.getItem("valueX"+contId),
        vY : sessionStorage.getItem("valueY"+contId),
        vR : sessionStorage.getItem("valueR"+contId),
        vA : sessionStorage.getItem("valueA"+contId),
        vV : sessionStorage.getItem("valueV"+contId),
        vD : sessionStorage.getItem("valueD"+contId)
    };
}
