

<?php

$link = mysqli_connect("103.57.220.40", "mig_tech", "sQLc0K182GF23", "gamedata_1");
checkMYSQL($link, 'DauPha', "inst_player");

$link = mysqli_connect("103.57.220.28", "mig_tech", "sQLc0K182GF23", "cokdb_global");
checkMYSQL($link, 'COK', "userbindmapping");

function checkMYSQL($link, $name, $table){
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    /* Select queries return a resultset */
    if ($result = mysqli_query($link, "select * from $table limit 0, 10")) {
        printf("$name: Select returned %d rows.\n", mysqli_num_rows($result));

        /* free result set */
        mysqli_free_result($result);
    }

    mysqli_close($link);
}


?>
