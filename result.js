window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const comodante = params.get('comodante');
    const comodantecpf = params.get('comodantecpf');
    const comodanteenderaco = params.get('comodanteenderaco');
    const comandatario = params.get('comendatario');
    const comandatariocpf = params.get('comendatariocpf');
    const comandatarioenderaco = params.get('comendatarioenderaco');

    // const comodante = sessionStorage.getItem("COMODANTE");
    // const comodantecpf = sessionStorage.getItem("COMODANTECPF");
    // const comodanteenderaco = sessionStorage.getItem("COMODANTEENDERECO");
    // const comandatario = sessionStorage.getItem("COMANDATARIO");
    // const comandatariocpf = sessionStorage.getItem("COMANDATARIOCPF");
    // const comandatarioenderaco = sessionStorage.getItem("COMANDATARIOENDERECO");

    document.getElementById('result-comodante').innerHTML = comodante;
    document.getElementById('result-comodantecpf').innerHTML = comodantecpf;
    document.getElementById('result-comodanteenderaco').innerHTML = comodanteenderaco;
    document.getElementById('result-comandatario').innerHTML = comandatario;
    document.getElementById('result-comandatariocpf').innerHTML = comandatariocpf;
    document.getElementById('result-comandatarioenderaco').innerHTML = comandatarioenderaco;
} ) 