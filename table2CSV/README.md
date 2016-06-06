table2CSV
=========

#### Copied from original website [http://www.kunalbabre.com/projects/table2CSV.php](http://www.kunalbabre.com/projects/table2CSV.php)

<pre>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">



<head>

<meta content="text/html; charset=utf-8" http-equiv="Content-Type" >

<title>Jquery Table to CSV Plugin</title>

<script type="text/javascript" src="jquery-1.3.2.js" ></script>

<script type="text/javascript" src="table2CSV.js" ></script>

<script type="text/javascript" >

function show(num)

{

hideAll();

var obj='#o'+num;

$(obj).show( "slow" );



}



$(document).ready(function () {

   $('#o0,#o1,#o2,#o3,#o4,#o5,#o6').hide();

});



function hideAll()

{

$('#o0,#o1,#o2,#o3,#o4,#o5,#o6').hide();

}



</script>

</head>



<body>

<div style="float:left;width:550px">

<h2>HTML Table to CSV</h2>

<p align="justify">

This is small JQuery utility which allows you to export any HTML table as CSV file. Its very handy tool to use specially during 

development of reporting projects. It is also useful when you have some 3rd party 

JQuery table search plugin attached to your table.

</p>



<h3>Example </h3>

<table id="example1" border="1"  style="background-color:#FFFFCC" width="0%" cellpadding="3" cellspacing="3">

	<tr>

		<th>Title</th>

		<th>Name</th>

		<th>Phone</th>

	</tr>

	<tr>

		<td>Mr.</td>

		<td>John</td>

		<td>07868785831</td>

	</tr>

	<tr>

		<td>Miss</td>

		<td><i>Linda</i></td>

		<td>0141-2244-5566</td>

	</tr>

	<tr>

		<td>Master</td>

		<td>Jack</td>

		<td>0142-1212-1234</td>

	</tr>

	<tr>

		<td>Mr.</td>

		<td>Bush</td>

		<td>911-911-911</td>

	</tr>

</table>

<br>



<h4>

<a href="javascript: return false;" onclick="show(1); return false;">Option 1</a>&nbsp;

<a href="javascript: return false;" onclick="show(2);return false;">Option 2</a>&nbsp;

<a href="javascript: return false;" onclick="show(3);return false;">Option 3</a>&nbsp;

<a href="javascript: return false;" onclick="show(6);return false;">Option 3.1</a>&nbsp;

<a href="javascript: return false;" onclick="show(4);return false;">Option 4</a>&nbsp;



<a href="javascript: return false;" onclick="show(0);return false;">Download </a>&nbsp;



<a href="javascript: return false;" onclick="show(5);return false;">Comments</a>

<a href="http://www.kunalbabre.com/about_me/about_me.htm" >About </a>



</h4>



<div id="o0">

<code>

&lt;script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.1.min.js" &gt; &lt;/script&gt;

<br>

&lt;script type="text/javascript" src="http://www.kunalbabre.com/projects/table2CSV.js" &gt; &lt;/script&gt;

<br>

<br>





</code>

<a href="table2CSV.js">Download Plugin </a> &nbsp; &nbsp;

</div>



<div id="o1" >

<h4>Option 1</h4>



<pre>$('#example1').table2CSV();</pre>

<br>

<input value="Export as CSV 1" type="button" onclick="$('#example1').table2CSV()">

<br><br>

</div>

<div id="o2">

<h4>Option 2</h4>

This can be used when you need custom header<br>

<pre>

$('#example1').table2CSV({

	header:['prefix','Employee Name','Contact']

});

</pre>

<br>

<input value="Export as CSV 2" type="button" onclick="$('#example1').table2CSV({header:['prefix','Employee Name','Contact']})">

<br><br>



</div>



<div id="o3">
<h4>Option 3 </h4>

This can be used when you need to get output as string <br>

<pre>

alert(

$('#example1').table2CSV({

delivery:'value',

header:['prefix','Employee Name','Contact']

}));

</pre>

<br>



<input value="Export as CSV 3" type="button" onclick="alert($('#example1').table2CSV({delivery:'value',header:['prefix','Employee Name','Contact']}))">

<br> <br >
</div>

<div id="o6">

<h4>Option 3.1 - Generate CSV File  </h4>

This can be done by posting the csv value obtained above to PHP or any similar server side script.

<h5>Step 1: Html File</h5>
<pre>
&lt;form action="getCSV.php" method ="post" &gt; 
&lt;input type=&quot;hidden&quot; name=&quot;csv_text&quot; id=&quot;csv_text&quot;&gt;
&lt;input type=&quot;submit&quot; value=&quot;Get CSV File&quot; 
       onclick=&quot;getCSVData()&quot;
&lt;/form&gt;

&lt;script&gt;
function getCSVData(){
 var csv_value=$('#example1').table2CSV({delivery:'value'});
 $(&quot;#csv_text&quot;).val(csv_value);	
}
&lt;/script&gt;

</pre>

<h5>Step 2: PHP File ( getCSV.php )</h5>
<pre>
&lt;?php
header(&quot;Content-type: application/octet-stream&quot;);
header(&quot;Content-Disposition: attachment; filename=\&quot;my-data.csv\&quot;&quot;);
$data=stripcslashes($_REQUEST[&#39;csv_text&#39;]);
echo $data; 
?&gt;</pre>

<form action="getCSV.php" method ="get" > 
<input type="hidden" name="csv_text" id="csv_text">
<input type="submit" value="Get CSV File" 
       onclick="getCSVData()"
</form>

<script>
function getCSVData(){
 var csv_value=$('#example1').table2CSV({delivery:'value'});
 $("#csv_text").val(csv_value);
}
</script>

	<br><br>

</div>



<div id="o4">

<h4>Option 4</h4>

This can be used when you need different separator <br>

<pre>

alert(

$('#example1').table2CSV({

separator : ';',

delivery:'value',

header:['prefix','Employee Name','Contact']

}));

</pre>

<br>

<input value="Export as CSV 4" type="button" onclick="alert($('#example1').table2CSV({separator : ';',delivery:'value',header:['prefix','Employee Name','Contact']}))">



</div>

<div id="o5">

<form method="post" action="table2CSV.php">

<h4>Comments</h4>

Name:<br><input type="text" name="name"><br>
Email:<br><input type="text" name="email"><br>
Comments:<br><textarea name="comments" cols="30" rows="5"></textarea><br>

What is sum of 81 +  122:<br><input name="sum" type="text" /><br><br>
<input type="submit" value="Submit" />

</form>



<br />
<b>Fatal error</b>:  Out of memory (allocated 262144) (tried to allocate 79209512 bytes) in <b>/homepages/30/d447419538/htdocs/wsb7162780401/projects/table2CSV.php</b> on line <b>479</b><br />

</pre>
