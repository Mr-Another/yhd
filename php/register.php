<?php
    header("Content-type:text/html;charset=utf-8");


    $name=$_REQUEST["username"];
    $pass=$_REQUEST["userpass"];
    $phone=$_REQUEST["userphone"];

    $con=mysql_connect("localhost","root","root");
    if(!$con){
        echo "连接失败";
    }else{
        mysql_select_db("yhd",$con);
        //添加
        $sqlstr="insert into userinfo (username,userpass,userphone) values ('$name','$pass','$phone')";
        $result=mysql_query($sqlstr,$con);
        if($result){
            echo "1";//成功
        }else{
            echo "0";//注册失败
        }
    }
?>