<?php
    header("Content-type:text/html;charset=utf-8");

    $name=$_REQUEST['username'];

    $con=mysql_connect("localhost","root","root");
    if(!$con){
        echo "连接数据库失败";
    }else{
        mysql_select_db("yhd",$con);
        $sqlstr="select * from userinfo where username='$name'";
        $result=mysql_query($sqlstr,$con);
        mysql_close($con);
        $rows=mysql_num_rows($result);
        if($rows==0){
            echo "1";
        }else{
            echo "0";
        }
    }
?>