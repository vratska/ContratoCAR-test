function handleSubmit () {
    
    const comodante = document.getElementById('comodante').value;
    const comodantecpf = document.getElementById('comodantecpf').value;
    const comodanteenderaco = document.getElementById('comodanteenderaco').value;
    const comandatario = document.getElementById('comandatario').value;
    const comandatariocpf = document.getElementById('comandatariocpf').value;
    const comandatarioenderaco = document.getElementById('comandatarioenderaco').value;
    
    localStorage.setItem("COMODANTE", comodante);
    localStorage.setItem("COMODANTECPF", comodantecpf);
    localStorage.setItem("COMODANTEENDERECO", comodanteenderaco);
    localStorage.setItem("COMANDATARIO", comandatario);
    localStorage.setItem("COMANDATARIOCPF", comandatariocpf);
    localStorage.setItem("COMANDATARIOENDERECO", comandatarioenderaco);

    return;
}