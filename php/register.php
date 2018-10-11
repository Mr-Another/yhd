<?php
    header("Content-type:text/html;charset=utf-8");

    $name=$_POST["username"];
    $pass=$_POST["userpass"];
    $phone=$_POST["userphone"];

    $con=mysql_connect("localhost","root","root");
    if(!$con){
        echo "连接失败";
    }else{
        mysql_select_db("yhd",$con);
        // 查询
        $sqlstr="select * from userinfo where username='$name'";
        $result=mysql_query($sqlstr,$con);
        $row=mysql_num_rows($result);
        if($rows<=0){
            //添加
            $sqrstr="insert into userinfo values ('$name','$pass','$phone')";
            $result=mysql_query($sqlstr,$con);
            if($result==1){
                echo "1";//成功
            }else{
                echo "0";//注册失败
            }
        }else{
            echo "-1";//用户名已存在
        }
    }
?>