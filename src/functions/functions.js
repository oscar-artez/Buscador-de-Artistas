export function formatDate(fecha){
    let day = fecha.slice(8,10);
    let month = fecha.slice(5,7);;
    let year = fecha.slice(0,4);;

    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    month = months[month - 1];

    let newDate = day + ' de ' + month + ' de ' + year;
    return newDate
}