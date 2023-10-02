AOS.init();

const data = new Date('Jun 26, 2024 00:00:00')
const timeStampEvento = data.getTime()

const contaHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const dia = 1000 * 60 * 60 *24;
    const hora = 1000 * 60 * 60;
    const minuto = 1000*60

    const diasAteEvento = Math.floor(distanciaEvento / dia)
    const horasAteEvento = Math.floor((distanciaEvento % dia) / hora)
    const minutosAteEvento = Math.floor((distanciaEvento % hora) / minuto)
    const segundosAteEvento = Math.floor((distanciaEvento % minuto) / 1000)
    
    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(diasAteEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Meu aniversário já acabou, espera o próximo ano';
    }
    
}, 1000)