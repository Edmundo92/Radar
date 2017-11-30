var btn_AvProx = document.querySelector(".btn-av_prox_aeroporto");

btn_AvProx.addEventListener("click", function(){
    
    alert();
    var tableTr = document.querySelectorAll(".table_tr");
    var tBody = document.querySelector(".lista-relatorio");
    var proxAeroporto = document.querySelector(".prox_do_aeroporto");
    var numberRaio = parseFloat(proxAeroporto.value); 
    var vetNumber = [];
    
//    if(tBody.childElementCount){
//        alert();
//        for(var i=0; i<tableTr.length; i++){
//            document.removeChild(tableTr[i]);
//        }
        //se eu clicar e tiver um elemento na tabela
        //devo apagar todos os elemento e depois quando sair vão ser inseridos novos elementos
        
    //}
    
    tableTr.forEach(function(tr){
        var pegarNumber = parseFloat(tr.querySelector(".box-v_direcao").innerHTML);
        var pegarId = parseFloat(tr.querySelector(".id").innerHTML);
        
        var dados = {
            number: pegarNumber,
            id: pegarId
        }
        
        if(dados.number < numberRaio){
            vetNumber.push(dados);
        }
    });
    
    createLista(vetNumber);
    
    
});


function createLista(vetNumber){
    
    var lista= document.querySelector(".lista-relatorio");
    
    vetNumber.forEach(function(number){
        var tr = document.createElement("TR");
        var li = document.createElement("TD");
        var li2 = document.createElement("TD");
        
        var liText = document.createTextNode(number.number);
        var liId = document.createTextNode(number.id)
        
        li.appendChild(liText);
        li2.appendChild(liId);
        
        tr.appendChild(li2);
        tr.appendChild(li);
        
        
        lista.appendChild(tr);
    });
}