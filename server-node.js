const express = require("express");

const app = express();
app.get("/", function (request, response) {

    response.send("<h1>Главная страница</h1>");
});
app.get("/about", function (request, response) {

    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function (request, response) {

    response.send("<h1>Контакты</h1>");
});
app.listen(3000);

const mysql = require("mysql");
const syncMysql = require("sync-mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    database: "gps_tracker_db",
    // password: "пароль_от_сервера"
});

const start = () => {
    connection.connect();

    let query = 'SELECT * FROM location';

    connection.query(query, (error, result) => {

        if (error) throw error;
        // console.log(result)
        // result.forEach(item => console.log(item.data_time))
        console.log(result[0])
    })
    connection.end()

};

start();



// const start2 = () => {
//     const connection = new syncMysql({
//         host: "127.0.0.1",
//         port: "3306",
//         user: "root",
//         database: "gps_tracker_db",
//         // password: "пароль_от_сервера"
//     });

//     let query = 'SELECT * FROM location';

//     const result = connection.query(query)

//     console.log(result)
// }


// start2()




// ORM server //


const Sequelize = require('sequelize');
