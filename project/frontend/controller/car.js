
$(document).ready(function () {
    var tok = localStorage.getItem('token');
    var id;
    //alert(tok)
    $.ajax({
        type: 'get',
        url: 'http://localhost:6060/showCars',
        beforeSend: function (xhr) {
            if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
        },
        success: function (data) {

            $.each(data, function (index) {
                console.log(data[index]._id);

                $("#cardetails").append(

                    '<div class="unit-4 d-block" style="height:auto; width:99%; background-color:black; margin-left:1%">' +
                    '<img src="http://localhost:6060/Cars/' + data[index].carimg +'" style="height:auto; width:40%;">' +
                    '<br></br>'+
                    '<p class="text-left">' + '<b>GAME NAME:  </b>' + data[index].manufacturer + '</p>' +
                    '<p class="text-left">' + '<b>DESCRIPTION:  </b>' + data[index].assembly + '</p>' +
                    '<p class="text-left">' + '<b>ESTABLISH YEAR:  </b>' + data[index].wheels + '</p>' +
                    '<p class="text-left">' + '<b>ABOUT US:  </b>' + data[index].abs + '</p>' +
                    '<p class="text-left">' + '<b>PERCENTAGE PLAYED:  </b>' + data[index].fuel + '</p>' +

                    '</div>'
                );


            });

        },
        error: function () {
            alert("Error. Try Later!!");
        }
    });
});
