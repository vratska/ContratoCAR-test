window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const comodante = params.get('comodante');
    const comodantecpf = params.get('comodantecpf');
    const comodanteendereco = params.get('comodanteendereco');
    const comandatario = params.get('comandatario');
    const comandatariocpf = params.get('comandatariocpf');
    const comandatarioendereco = params.get('comandatarioendereco');

    // const comodante = sessionStorage.getItem("COMODANTE");
    // const comodantecpf = sessionStorage.getItem("COMODANTECPF");
    // const comodanteendereco = sessionStorage.getItem("COMODANTEENDERECO");
    // const comandatario = sessionStorage.getItem("COMANDATARIO");
    // const comandatariocpf = sessionStorage.getItem("COMANDATARIOCPF");
    // const comandatarioenderaco = sessionStorage.getItem("COMANDATARIOENDERECO");

    document.getElementById('result-comodante').innerHTML = comodante;
    document.getElementById('result-comodantecpf').innerHTML = comodantecpf;
    document.getElementById('result-comodanteendereco').innerHTML = comodanteendereco;
    document.getElementById('result-comandatario').innerHTML = comandatario;
    document.getElementById('result-comandatariocpf').innerHTML = comandatariocpf;
    document.getElementById('result-comandatarioendereco').innerHTML = comandatarioendereco;
}) 