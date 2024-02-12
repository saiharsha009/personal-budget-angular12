const express = require('express');
const app = express();
const port = 3000;
const data = require("./budget.json");

app.use('/', express.static('public'));

const budget = { 
    myBudget: [
        {
            "title": "Eat Out",
            "budget": 20
        },
        {
            "title": "Rent",
            "budget": 350
        },
        {
            "title": "Groceries",
            "budget": 90
        },
        {
            "title" : "Electronics",
            "budget": 100
        },
        {
            "title" : "Miscellaneous",
            "budget": 60
        },
        {
            "title" : "Stationary",
            "budget": 75
        },
        {
            "title" : "Furniture",
            "budget": 210
        }
    
]};

app.get('/hello',(req,res)=>{
    res.send('Hello world !');
});

app.get('/budget',(req,res)=>{
    res.json(budget);
});



app.listen(port, () =>{
    console.log('Example app listening at http://localhost:${port}');
});