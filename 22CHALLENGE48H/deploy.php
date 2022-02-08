<?php 

flush();

$commands = 'git pull';

$git = shell_exec("$commands 2>1&");

echo 'Test pull'

?>