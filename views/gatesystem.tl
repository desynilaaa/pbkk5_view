<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Welcome!</title>
  <meta charset="UTF-8">
	<title>Portfolio</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
<!-- 	<link rel="stylesheet" type="text/css" href="/css/welcome.css" /> 
 -->
<style type="text/css">
	/* Google Fonts */
@import url("https://fonts.googleapis.com/css?family=Courgette&amp;subset=latin-ext");
@import url("https://fonts.googleapis.com/css?family=Amita:400,700&amp;subset=latin-ext");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.4em;
  font-family: 'Amita', 'Arial', sans-serif;
}

body {
  background-color: #fff;
  color: #3D3D3D;
}

.wrapper {
  width: 100%;
}

/* header - logo */
.header {
  width: 100%;
  padding: 2% 0;
}

.logo {
  width: 600px;
  margin: 0 auto;
}

.logo img {
  width: 100%;
}

/* pages */
.welcomepage {
  width: 100%;
  height: 40vh;
  margin-top: -130px;
}

.aboutpage, .workpage, .contactpage {
  width: 100%;
  height: 100%;
  margin: 2% auto;
  text-align: justify;
}

.break {
  width: 100%;
  height: 5em;
  background-color: #3D3D3D;
}

/* welcome page */
.welcome h1 {
  font-size: 5em;
  text-align: center;
  padding-top: 3%;
}

/* nav */
.navigation {
  width: 100%;
  margin-top: -20px;
  padding: 1% 0;
  background-color: #3D3D3D;
  opacity: 0.8;
  text-align: center;
  box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.4);
}

.navigation.sticky {
  position: sticky;
  top: 0;
  left: 0;
}

.menu {
  list-style-type: none;
  font-size: 1.2em;
  display: flex;
}

.menu > li {
  flex: auto;
}

.menu a {
  color: #C4C4C4;
  text-decoration: none;
  display: block;
}

.menu a:hover {
  box-shadow: 0 10px 40px 10px;
}

/* about me */
.about-container {
  max-width: 80%;
  margin: 5% auto;
}

.photo {
  width: 30%;
  margin: 2% auto;
}

.photo img {
  width: 100%;
  border-radius: 50%;
  border: 2px dotted #3D3D3D;
}

.aboutpage h2 {
  font-size: 1.6em;
  line-height: 2em;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.aboutpage p {
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 2%;
}

/* my work */
.mywork {
  text-align: center;
  font-size: 3em;
  margin-top: 10%;
}

.examples {
  width: 100%;
  margin: 10% auto;
  display: flex;
}

.example {
  width: 30%;
  margin: 0 3%;
  border: 2px dotted #3D3D3D;
  flex: auto;
}

.example img {
  width: 100%;
}

.soon {
  text-align: center;
  font-size: 1.5em;
  padding-top: 3%;
}

/* contact */
.form-container {
  width: 80%;
  margin: 0 auto;
}

#contact {
  font-size: 3em;
  padding: 3%;
  text-align: center;
}

#form {
  font-size: 1.2em;
}

input, textarea, legend {
  width: 100%;
  padding: 1%;
}

.send {
  font-size: 1.1em;
  padding: 1%;
  color: #3D3D3D;
  border-radius: 10%;
}

#social-icons {
  display: flex;
  margin: 10% 0;
}

.icon {
  width: 25%;
}

.social-links {
  color: #3D3D3D;
  padding: 5%;
}

.social-links:hover {
  color: #078F00;
}

.fa {
  font-size: 2.7em;
  padding-left: 25%;
}

/* footer */
.footer {
  width: 100%;
  padding: 2%;
  background-color: #3D3D3D;
  color: #C4C4C4;
  text-align: center;
}

</style>

<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script>

</head>

<body onload="startTime()">

<!-- header -->
<div class="wrapper" id="welcomepage">
	<header class="header">
		<div class="logo">
			<br>
			<img src="https://media.istockphoto.com/photos/open-iron-gate-picture-id495958942?k=6&m=495958942&s=612x612&w=0&h=j5B-HnaO6TFVAB3n0HHBtPG2LvOuo_iNXC_vqcMmzqY=">
		</div>
	</header>
<!-- welcome page -->
	<section class="welcomepage">
		<div class="welcome">
			<h1>Welcome</h1>
      <h1 style="font-size: 2em" id="txt"></h1>
		</div>
	</section>
<!-- nav -->
	<nav class="navigation sticky">
		<ul class="menu">
			<li><a href="#welcomepage"></a></li>
			<li><a href="/login">LOGIN</a></li>
			<li><a href="/register">SIGNUP</a></li>
      <li><a href="/gates">GATES</a></li>
      <li><a href="/users">USERS</a></li>
			<li><a href="#contactpage"></a></li>
		</ul>
	</nav>
</div>

</body>

</html>
