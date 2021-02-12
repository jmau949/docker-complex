// location /api {
//     rewrite /api/(.*) /$1 break;
//     proxy_pass http://api;
// }
// (.*) = regex. $1 = placeholder, break = dont try to rewrite anything 
// pass to server 