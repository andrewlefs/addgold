

<?php

$link = mysqli_connect("203.162.80.93", "mig_tech", "rTYU!@#!#F14N", "gamedata");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* Select queries return a resultset */
if ($result = mysqli_query($link, "select * from inst_player limit 0, 10")) {
    printf("Select returned %d rows.\n", mysqli_num_rows($result));

    /* free result set */
    mysqli_free_result($result);
}

mysqli_close($link);
?>
