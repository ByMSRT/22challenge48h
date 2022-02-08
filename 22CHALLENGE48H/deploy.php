<?php 

flush();

$commands = 'git pull';

$git = shell_exec("$commands");

echo 'Test pull2'

?>