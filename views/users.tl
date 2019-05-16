<!doctype html>
<html>
<head>
	<title>GERBANG</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
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
	<div>

	<table style="width:100%">
		  <tr>
		    <th>NRP</th>
		    <th>Username</th>
		    <th>keterangan</th> 
		  </tr>

		${d.rows2.reduce((str,row2)=> str + '  <tr> ' + '<td>' +row2.nrp +'</td>' + '<td>' +row2.nama +'</td>' + '<td> <a href="/users/'+ row2.id_user +'">info</a> </td>' +' </tr>', '')}		  
		
		</table>
	</div>

</div>

</div>
</body>
</html>
