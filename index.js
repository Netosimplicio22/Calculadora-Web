function include(num){
    var r = document.getElementById("resposta").innerHTML
    document.getElementById("resposta").innerHTML = r + num
}

function dell(){
    var apagar = document.getElementById("resposta")
    apagar.innerHTML = ""
}

function clean(){
    var r = document.getElementById("resposta").innerHTML
    document.getElementById("resposta").innerHTML = r.substring(0, r.length -1)
}

function calcular(){
    var call = document.getElementById("resposta").innerHTML
    
    if(call){
        document.getElementById("resposta").innerHTML = eval(call)
    }
    else{
        window.alert("[ERRO] Preencha a caixa com uma operação.")
    }
}