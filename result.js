window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const comodante = params.get('comodante');
    const comodantecpf = params.get('comodantecpf');
    const comodanteendereco = params.get('comodanteendereco');
    const comandatario = params.get('comandatario');
    const comandatariocpf = params.get('comandatariocpf');
    const comandatarioendereco = params.get('comandatarioendereco');
    const terrahec = params.get('terrahec')
    const localterra = params.get('localterra');
    const car = params.get('car');
    const conjuge = params.get('conjuge');
    const tempoterra = params.get('tempoterra');
    const tempocontrato = params.get('tempocontrato');
    const dia = params.get('dia');
    const mes = params.get('mes');
    const ano = params.get('ano');

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
    document.getElementById('result-terrahec').innerHTML = terrahec;
    document.getElementById('result-localterra').innerHTML = localterra;
    document.getElementById('result-car').innerHTML = car;
    document.getElementById('result-conjuge').innerHTML = conjuge;
    document.getElementById('result-tempoterra').innerHTML = tempoterra;
    document.getElementById('result-tempocontrato').innerHTML = tempocontrato;
    document.getElementById('result-dia').innerHTML = dia;
    document.getElementById('result-mes').innerHTML = mes;
    document.getElementById('result-ano').innerHTML = ano;
}) 