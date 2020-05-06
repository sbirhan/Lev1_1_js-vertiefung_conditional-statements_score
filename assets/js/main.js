const result = document.getElementById("result")

function adult(age){
    if (age<0){
        window.alert("Bitte geben sie einen gültigen wert ein!");
        document.getElementById("age").value = 0;
    }
    else if (age<18){
        result.innerHTML = "Sie sind nicht volljährig.";  
    }
    else{
        result.innerHTML = "Sie sind volljährig.";
    }
}

function submit(){
    adult(parseInt(document.getElementById("age").value));
}