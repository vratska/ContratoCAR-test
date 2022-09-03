function handleSubmit () {
    
    const comodante = document.getElementById('comodante').value;
    const comodantecpf = document.getElementById('comodantecpf').value;
    const comodanteenderaco = document.getElementById('comodanteenderaco').value;
    const comandatario = document.getElementById('comandatario').value;
    const comandatariocpf = document.getElementById('comandatariocpf').value;
    const comandatarioenderaco = document.getElementById('comandatarioenderaco').value;
    
    sessionStorage.setItem("COMODANTE", comodante);
    sessionStorage.setItem("COMODANTECPF", comodantecpf);
    sessionStorage.setItem("COMODANTEENDERECO", comodanteenderaco);
    sessionStorage.setItem("COMANDATARIO", comandatario);
    sessionStorage.setItem("COMANDATARIOCPF", comandatariocpf);
    sessionStorage.setItem("COMANDATARIOENDERECO", comandatarioenderaco);

    return;
}