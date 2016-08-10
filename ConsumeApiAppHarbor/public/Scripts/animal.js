/**
 * Created by Mogli on 8/8/16.
 */
$(document).ready(function () {
    ClearForm();
    GetAll();

    $('#btnCreateAnimal').click(function () {
        var animal = new Object();
        animal.Nombre = $('#txtName').val();
        animal.Tipo = $('#txtType').val();
        animal.Descripcion = $('#txtDescripcion').val();
        AddNewAnimal(animal);
    });
});

function AddNewAnimal(animal){
var ulrApi = "http://quizprojectapi.apphb.com/api/Animal";
    $.ajax({
        url: ulrApi,
        type: "POST",
        headers:{
            'Access-Control-Allow-Origin': 'http://quizprojectapi.apphb.com',
        },
        data:JSON.stringify(animal),
        crossDomian:true,
        contentType: "application/json;charset=utf8",
        statusCode: {
            201: function () {
                GetAll();
                ClearForm();
                alert("You create a new Person");
            },
            400: function () {
                ClearForm();
                alert("Error");
            }
        }
    });
}


function GetAll(){
    var urlApi = 'http://quizprojectapi.apphb.com/api/Animal';
    var item = "";
    $.ajax({
        url: urlApi,
        type:'GET',
        crossDomian:true,
        dataType:'jsonp',
        success:function (data) {
            $.each(data,function (key,value) {
                item +='<tr>'
                        +'<td>'+value.Nombre+'</td>'
                    +'<td>'+value.Tipo+'</td>'
                    +'<td>'+value.Descripcion+'</td>'
                    +'<td>'+holis+'</td>'
                    +'</tr>';
            });
            $('#AnimalList').append(item);
        }
    })
}

//Function de get a specific record
function GetAnimalById(id) {
    var url = "/api/Animal/" + id;
    $.getJSON(url).done(function(Person) {
        if (Person != null) {
            $("#txtNombre").val(Animal.Nombre);
            $("#txtTipo").val(Animal.Tipo);
            $("#txtDescripcion").val(Animal.Descripcion);
        } else {
            alert("Animal not Exist");
        }
    }).fail(function(error) {
        alert(error.toString());
    });
};
function ClearForm(){
    $('#txtName').val("");
    $('#txtType').val("");
    $('#txtDescripcion').val("");
}