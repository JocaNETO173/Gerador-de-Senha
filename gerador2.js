const lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialArray = ['!', `"`, '#', '$', '%', '&', "'", '(', ')', '*', '+', ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_","`", "{", "|", "}", "~"];
const numbersArray = ['1','2','3','4','5','6','7','8','9','0'];

const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
const special = document.getElementById('special');
const numbers = document.getElementById('numbers');

let senha = document.getElementById('texto');




function gerar(){
    const letras = [];

    if(lower.checked){  
        for(i=0;i<lowerArray.length;i++){
        letras.push(lowerArray[i]);
        };
    };

    if(upper.checked){  
        for(i=0;i<upperArray.length;i++){
        letras.push(upperArray[i])
        }
    };

    if(special.checked){  
        for(i=0;i<specialArray.length;i++){
        letras.push(specialArray[i])
        }
    };

    if(numbers.checked){  
        for(i=0;i<numbersArray.length;i++){
        letras.push(numbersArray[i])
        }
    };

    console.log(letras)

    let caracteres = document.getElementById('caracteres').value
    if(caracteres !=""){
        document.getElementById("caracteres").value="";
}
    senha.innerHTML = "Sua senha: "


    for(i=0;i<caracteres;i++){
        
        const numero = Math.floor(Math.random()*letras.length);
        senha.innerHTML += letras[numero];
        
    }
}
