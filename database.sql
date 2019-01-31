mysql> CREATE DATABASE homework;
Query OK, 1 row affected (0.04 sec)

mysql> USE homework;
Database changed
mysql> CREATE TABLE tasks (userId int, Username varchar (255), TaskId int, Description varchar (255), Completed varchar (255));
 CREATE TABLE tasks (userId int, Username varchar (255), TaskId int, Description varchar (255), Completed varchar (255));

 INSERT INTO tasks (UserId, Username, TaskId, Description, Completed)
  VALUES (1, Geoff, 2, "learn JavaScript", "no");
