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
var urlApi = 'http://quizprojectapi.apphb.com/api/Animal'
    $.ajax({
        url: urlApi,
        type:'POST',
        contentType: "application/json;chartset=utf-8",
        data: JSON.stringify(animal),
        success:function () {
            GetAll();
            ClearForm();
            alert("You save a new animal");
        }
    });
}


function GetAll(){
    var urlApi = 'http://quizprojectapi.apphb.com/api/Animal';
    var item = "";
    $.ajax({
        url: urlApi,
        type:'GET',
        success:function (data) {
            $.each(data,function (key,value) {
                item +='<tr>'
                        +'<td>'+value.Nombre+'</td>'
                    +'<td>'+value.Tipo+'</td>'
                    +'<td>'+value.Descripcion+'</td>'
                    +'</tr>';
            });
            $('#AnimalList').append(item);
        }
    })
}

function ClearForm(){
    $('#txtName').val("");
    $('#txtType').val("");
    $('#txtDescripcion').val("");
}