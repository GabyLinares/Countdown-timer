const diasQ = document.getElementById('dias')
const horasQ = document.getElementById('horas')
const minsQ = document.getElementById('minutos')
const secsQ = document.getElementById('segundos')

const fechaQuery = "3 Dec 2023";

formatoCero = (elemento) => {

    return elemento < 10 ? `0${elemento}` : elemento;

}

verFecha = (elemento) => {

    return elemento <= 0 ? 0 : elemento;
}

countdown = () => {
    const fechaBusqueda = new Date(fechaQuery);
    const fechaHoy = new Date();

    const secsFaltantes = (fechaBusqueda - fechaHoy) / 1000;

    // console.log(secsFaltantes);

    const dias = Math.floor(secsFaltantes / 3600 / 24);
    const horas = Math.floor(secsFaltantes / 3600) % 24;
    const mins = Math.floor(secsFaltantes / 60) % 60;
    const secs = Math.floor(secsFaltantes) % 60;

    diasQ.innerHTML = verFecha(dias);
    horasQ.innerHTML = formatoCero(verFecha(horas));
    minsQ.innerHTML = formatoCero(verFecha(mins));
    secsQ.innerHTML = formatoCero(verFecha(secs));
}

countdown();
setInterval(countdown, 1000);