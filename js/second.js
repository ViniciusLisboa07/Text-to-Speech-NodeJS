var msg = new SpeechSynthesisUtterance();
var pacienteTela = document.querySelector("#pacienteTela");
var consultorioTela = document.querySelector("#consultorioTela");

// Configurando a voz
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[1];
msg.lang = "pt";
msg.rate = 1;
msg.pitch = 1;

window.addEventListener("load", () => {

    if(window.opener && !window.opener.closed){
        var nomePaciente = window.opener.getPaciente();
        var consultorio = window.opener.getConsultorio();
    }
    
    pacienteTela.innerHTML = nomePaciente;
    consultorioTela.innerHTML = consultorio;

    var str = "Atenção: " + pacienteTela.innerHTML + " por favor se dirija ao " + consultorioTela.innerHTML;

    executarVoz(str);
});

function executarVoz(str) {
    // Instânciando a mensagem
    msg.text = str;

    // Executando a voz
    window.speechSynthesis.speak(msg);

}