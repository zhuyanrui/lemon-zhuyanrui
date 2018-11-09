var mysql = require('mysql');
var config = {
    user: 'root',
    password: '123456',
    database: 'lemon',
    connectionlimit: 100
}
var pool = mysql.createPool(config);
module.exports = function(sql, query, fn) {
    function getcallback(err, con) {
        if (err) {
            fn(err);
        } else {
            con.query(sql, query, function(err, result) {
                con.release();
                getresult(err, result);
            })
        }
    }
    //获取数据
    function getresult(err, result) {
        if (err) {
            fn(err);
        } else {
            fn(null, result);
        }
    }
    //从中获取对象
    pool.getConnection(getcallback);
}