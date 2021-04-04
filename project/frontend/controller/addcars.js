
$(document).ready(function (e) {
    var tok = localStorage.getItem('token');
    var id;
    //alert(tok)

    let imageFile = "";
    $("#Carimg").on('change', function () {
        let formData = new FormData();
        let files = $("#Carimg").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost:6060/car_img',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFile = data.filename;
                alert(imageFile);
                document.getElementById("example").setAttribute('value',imageFile);

            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });


    $('#addcar').click(function (e) {

        e.preventDefault();

        model = $("#model").val();
        Carimg = imageFile;
        manufacturer = $("#manufacturer").val();
        assembly = $("#assembly").val();       
        fuel = $("#fuel").val();
        abs = $("#abs").val();
        wheels = $("#wheels").val();
        data = {
            'model': model,
            'carimg': Carimg,
            'manufacturer': manufacturer,
            'assembly': assembly,
            'fuel': fuel,
            'abs': abs,
            'wheels': wheels,
        }
        console.log(data)
        if (model == "" || Carimg == "" || manufacturer == "" || assembly == "" || fuel == "" || abs == "" || wheels == "") {
            alert("please fill out all of the fields!");
        }
        else {
            $.ajax({
                url: 'http://localhost:6060/addcars',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function (res, textStatus, xhr) {
                    alert("Vehicle Added Successful");
                    console.log(data);
                    location.href = "dashboard.html";
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Operation');
                    console.log(xhr);
                }
            });
        }
    });
});

