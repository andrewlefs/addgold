<?php

function fbml_init($appId) {
    $output = <<<EOF
    <script type="text/javascript" src="http://connect.facebook.net/en_US/all.js"></script>
     <script type="text/javascript">
       FB.init({
         appId  : '{$appId}',
         status : true, // check login status
         cookie : true, // enable cookies to allow the server to access the session
         xfbml  : true,  // parse XFBML
         oauth: true
       });
       
     </script>   
EOF;
    echo $output;
}

    
function fbml_stream_publish_init() {
    $output = <<<EOF
     <script type="text/javascript">
            function streamPublish(name, description, caption, hrefLink, picture){        
                FB.ui({ method : 'feed', 
                        name: name,
                        link   :  hrefLink,
                        caption:  caption,
                        description: description,
                        picture: picture
               });
            }
     </script>   
EOF;
    echo $output;
}

function fbml_create_stream_publish($funcName = 'publishStream', $link = '', $picture = '', $name = '', $caption = '', $description = '') {
    $output = <<<EOF
     <script type="text/javascript">
            function {$funcName}(){
                streamPublish("{$name}", '{$description}', '{$caption}','{$link}', "{$picture}");
            }
     </script>   
EOF;
    echo $output;
}

function fbml_create_invate_friend($funcName = 'newInvite', $message = '', $url = '') {
    $message = addcslashes($message, '\'');
    $output = <<<EOF
        <script type="text/javascript">
            function {$funcName}(){
                 var receiverUserIds = FB.ui({ 
                        method : 'apprequests',
                        message: '{$message}',
                       
                 },
                 function(result) {                    
                             $.ajax({
                                 url: '{$url}',
                                 type: 'post',
                                 data: result,
                                 success: function(response) {
                                     console.log(response)
                                 }
                             });
                   });
            }
        </script>  
EOF;
    echo $output;
}

?>
