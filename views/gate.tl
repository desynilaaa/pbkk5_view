<!DOCTYPE html>
<html>
<head>
	<title>CREATE GERBANG</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->

	<style>
		body 		{ padding-top:80px; }
	</style>
</head>
<body>
    <div class="container" >
        <div class="col-sm-6 col-sm-offset-3">
            <h1><span class="fa fa-sign-in" ></span>Create Gates</h1>
     

            <!-- LOGIN FORM -->
            <form action="gates/add" method="post" >
                <div class="form-group"> 
                    <label class="m-2">Gate's Name</label>                   
                    <input type="text" class="form-control" placeholder="Gate's Name" name="name">
                </div>
                <div class="form-group">                
                    <label for="G_OPEN" class="m-2">Time Open Gate :</label>
                    <input type="time" id="G_OPEN" name="open" min="1:00" max="24:00" required>
                </div>
                <div class="form-group">                
                    <label for="G_CLOSE" class="m-2">Time Close Gate :</label>
                    <input type="time" id="G_CLOSE" name="close" min="1:00" max="24:00" required>
                </div>
                <div class="form-group"> 
                    <label class="m-2">Role</label>
                    <input type="text" class="form-control" placeholder="Role"  name="role">
                </div>   

          
                <button type="submit" class="btn btn-warning btn-lg">Add</button>
            </form>

            <hr>
            <table style="width:100%">
                  <tr>
                    <th>Name of Gate</th>
                    <th>Time Open Gate</th>
                    <th>Time Close Gate</th>
                    <th>Action</th> 
                  </tr>
                ${d.rows2.reduce((str,row2)=> str + '  <tr> ' + '<td>' +row2.nama_gate +'</td>' + '<td>' +row2.open +'</td>' + '<td>' +row2.close +'</td>' + '<td> <a href="/gates/'+ row2.id_gate +'">info</a> </td>' +' </tr>', '')}          
            </table>
        </div>
    </div>
</body>
</html>



