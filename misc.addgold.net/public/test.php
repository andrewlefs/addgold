<html>
    <meta charset="utf-8">
    <head>
        <title>403 Forbidden</title>
        <script type="text/javascript">
            function TProtocol(){
                var pro = document.getElementById("protocol").value;                
                window.top.location = pro;
                alert(pro);
            }
        </script>
    </head>
    <body style="">    
        <div style="margin: 5px">            
            <ul style="list-style-type: none">
                <li><a href="doden888:">doden888:</a></li>
                <li><a href="doden888://">doden888://</a></li>
                <li>-</li>
                <li><input type="text" name="protocol" id="protocol" /></li>
                <li>-</li>
                <li><input type="button" name="submit" id="submit" value="Test" onclick="TProtocol();" /></li>
            </ul>            
        </div>
    </body>
</html>