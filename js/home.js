var msg = new SpeechSynthesisUtterance();
var nomePaciente = document.querySelector("#nomePaciente");
var consultorio = document.querySelector("#consultorio")
var btnFalar = document.querySelector("#btnFalar");

function getPaciente() {
    return nomePaciente.value;
}

function getConsultorio() {
    return consultorio.value;
}

btnFalar.onclick = function (event) {
    event.preventDefault();
    var screenWindow = window.open('/screen', 'screenWindow', 'left=0,top=0,width=1024,height=1140,toolbar=0,scrollbars=0,status=0');
    if (screenWindow) {
        window.open("", "screenWindow");
    }
}