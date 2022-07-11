const express = require('express');
// const cors = require('cors');

const app = express()
app.use(express.urlencoded({ extended: true }));

app.post('/challenge', function (req, res) {
    // res.send('Hello World')
    // console.log('Hello World');
    // console.log(req.body);
    // let count = req.body.data.length;
    let num = [];
    let alpha = [];
    for (let i = 0; i < req.body.data.length; i++) {
        if (req.body.data[i] >= '0' && req.body.data[i] <= '9')
            num.push(req.body.data[i]);
        else if ((req.body.data[i] >= 'A' && req.body.data[i] <= 'Z') || (req.body.data[i] >= 'a' && req.body.data[i] <= 'z'))
            alpha.push(req.body.data[i]);
    }
    // let arr = ["A","1","3","4","R","!"];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] >= '0' && arr[i] <= '9')
    //         num.push(arr[i]);
    //     else if ((arr[i] >= 'A' && arr[i] <= 'Z') || (arr[i] >= 'a' && arr[i] <= 'z'))
    //         alpha.push(arr[i]);
    // }
    const response = {
        "is_success": true,
        "user_id": "mohit_kumar_rai_1905250",
        count: (alpha.length + num.length),
        email: "1905250@kiit.ac.in",
        roll_number: "1905250",
        numbers: num,
        alphabets: alpha
    };
    res.send(response);
})

app.listen(33845, () => {
    console.log("server started at http://localhost:33845");
})