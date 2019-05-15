<!DOCTYPE html>
<html>
<head>
    <title>GERBANG</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
<!--     <link rel="stylesheet" type="text/css" href="/css/style.css" /> 
 -->    <style type="text/css">
        body
        {
            background-size: cover;
            padding: 0;
            margin: 0;
            padding-top:80px;
        }

        p , h1{
            color:black;
        }

        form{
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="container" >
        <div class="col-sm-6 col-sm-offset-3">
            <h1><span class="fa fa-sign-in" ></span>Pintu Utama (login)</h1>
           <!-- <div class="alert alert-danger"><%= message %></div> -->
<!--             ${ d.message.length > 0? '<div class="alert alert-danger">' + d.message + '</div>': ''} -->

            <!-- LOGIN FORM -->
            <form action="/login/auth" method="post" >
                <div class="form-group">
                    <input type="text" name="username" placeholder="Username" required>
                </div>
                <div class="form-group">
                    <input type="password" name="password" placeholder="Password" required>
                </div>
<!--                  <div class="form-group">
                    <label class="m-2">GERBANG</label>
                    <select id="status" class="form-control" name="role" required>
                        <option value="" disabled selected>Silahkan memilih GERBANG</option>
        ${d.rows.reduce((str,row)=> str + '<option value= "'+ row.G_ID +'">'+ row.G_GATENAME +'</option>', '')}


                    </select>
                </div> --> 
                
                <button type="submit" class="btn btn-warning btn-lg">Login</button>
            </form>

            <hr>
        </div>
    </div>
</body>
</html>



