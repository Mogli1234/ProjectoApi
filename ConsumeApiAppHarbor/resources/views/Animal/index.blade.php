<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta name="_token" content="{!! csrf_token() !!}" />
    <title>Laravel using api on AppHarbor</title>
    <!-- Load Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
        <h2>Animal CRUD</h2>
        <div>
            <!-- Table-to-load-the-data Part -->
            <table class="table">
                <thead>
                <tr>
                    <th>Animal Name</th>
                    <th>Type of Animal</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody id="AnimalList"></tbody>
            </table>
            <!-- End of Table-to-load-the-data Part -->
            <!-- Modal (Pop up when detail button clicked) -->
        </div>
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">#</span>
        <input type="text" placeholder="Name" id="txtName" class="form-control">
    </div>

    <div class="input-group">
        <span class="input-group-addon" id="basic-addon2">$</span>
        <input type="text" placeholder="Type" id="txtType" class="form-control">
    </div>
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon3">&</span>
        <textarea class="form-control" placeholder="Description of animal" id="txtDescripcion"></textarea>
    </div>
    <button type="button" class="btn btn-default" id="btnCreateAnimal">Create</button>

</div>
<script src="/Scripts/jquery.js"></script>
<script src="Scripts/animal.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>
</html>
