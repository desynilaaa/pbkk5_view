<!doctype html>
<html>
<head>
	<title>GERBANG</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
	<style>
		body 		{ padding-top:80px; word-wrap:break-word; }
	</style>
</head>
<body>
<div class="container">

	<div class="page-header text-center">
		<h1><span class="fa fa-anchor"></span>Info Gate Page</h1>

	</div>

		<div class="row">

		<!-- LOCAL INFORMATION -->
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="well">
				<h3><span class="fa fa-user"></span>GATE</h3>
					<p>
		${d.rows2.reduce((str,row2)=> str 
		+ '<strong>'+ 'ID : ' + row2.id_gate +'</strong> <br>'
		+ '<strong>'+ 'GATENAME : ' + row2.nama_gate +'</strong> <br>'
		+ '<strong>'+ 'OPEN : ' + row2.open +'</strong> <br>'
		+ '<strong>'+ 'CLOSE : ' + row2.close +'</strong> <br>'
	, '')}						 
				 	</p>

			</div>
			<!-- href="/users/'+ row.ID +'" -->
			${d.rows2.reduce((str,row2)=>str+ '<form action="delete/'+ row2.id_gate +'?_method=DELETE" method="POST"><button type="submit">delete</button></form>' , '')}
		</div>

	</div>
</body>
</html>
