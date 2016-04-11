http://blog.fguy.com/2011/06/28/jquery-export-table-to-csv-file/

Google Chrome doesn't support download data uri with correct file extension. So I made this.

Usage:
```
<script type="text/javascript" src="http://download-data-uri.appspot.com/js/download-data-uri.js"></script>
<script type="text/javascript">
downloadDataURI({
	filename: "check.png", 
	data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC"
});
</script>
```