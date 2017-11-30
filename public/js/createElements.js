exports.insert = function (x, y, returnRaio, returnAngulo, d, v, r, a, returnPolar, contId){
    
    var TR = document.createElement("tr");
    TR.setAttribute("class", "table_tr");
    
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
};

