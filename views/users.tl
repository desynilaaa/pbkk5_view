<!doctype html>
<html>
<head>
	<title>USERS</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->

	<style>
		body 		{ padding-top:80px; }
	</style>
</head>
<body>
<div class="container">

<div class="col-sm-6 col-sm-offset-3">

	<h1><span class="fa fa-sign-in"></span>USERS</h1>

	<!-- show any messages that come back with authentication -->
	<!-- <% if (message.length > 0) { %>
		<div class="alert alert-danger"><%= message %></div>
	<% } %> -->

	<br>
<!--
	<hr>

	<p>Already have an account? <a href="/login">Login</a></p>
	<p>Or go <a href="/">home</a>.</p>
 -->
	<div class="table-wrapper">
		<div>
			<table class="table table-striped table-hover" >
			<thead style="font-size:17px;">
			  <tr class="thead-dark">
			    <th scope="col-sm-6">NRP</th>
			    <th scope="col-sm-6">Username</th>
			    <th scope="col-sm-6">Keterangan</th>
			  </tr>
	 		</thead>
	 		  <tbody style="font-size:15px;">
			${d.rows2.reduce((str,row2)=> str + '  <tr> ' + '<td>' +row2.nrp +'</td>' + '<td>' +row2.nama +'</td>' + '<td> <a href="/users/'+ row2.id_user +'">info</a> </td>' +' </tr>', '')}		  
			 </tbody>
			</table>
			<!-- <div class="clearfix"> -->
           <!--      <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div> -->
                <!-- <ul class="pagination"> -->
                    <!-- <li class="page-item disabled"><a href="#">Previous</a></li> -->
                    <!-- <li class="page-item  active"><a href="#" class="page-link">1</a></li> -->
       <!--              <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li> -->
                    <!-- <li class="page-item"><a href="#" class="page-link">Next</a></li> -->
                <!-- </ul> -->
            <!-- </div> -->
		</div>
	</div>


</div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
