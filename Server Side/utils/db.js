import mysql from 'mysql'


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "employeems"
})


con.connect(function(err) {
    if(err) {
        console.log(err.message)
    } else {
        console.log("Connected")
    }
})

export default con;



