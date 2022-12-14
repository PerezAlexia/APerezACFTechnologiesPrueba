$(document).ready(function () {
      
});


function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        success: function (result) {//200 OK
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result.length; j++) {
                    var objeto = result[i, j];

                    var filas =
                        '<tr>'

                        + "<td class='hidden'>" + objeto.albumId + "</td>"
                        + "<td class='hidden'>" + objeto.id + "</td>"
                        + "<td class='text-center'>" + objeto.title + "</td>"
                        + "<td class='text-center'>" + objeto.url + "</ td>"
                        + "<td class='text-center'>" + "<img src= " + objeto.thumbnailUrl+ ">"+ "</td>"

                        + "</tr>";

                    $("#table_id tbody").append(filas);
                }
            }

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

        }
    });
}