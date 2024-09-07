/*const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);*/



const express = require('express')
const app = express();

const db = require('./db');

const Person = require('./model/Person');
const MenuItem = require('./model/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World')

})

app.post('/person',async(req, res) => {
  try{
    const data = req.body
    const newPerson = new Person(data);

    const response = await newPerson.save();

    console.log('Data saved ');
        res.status(200).json(response);
  }
  catch(err){
    console.log(error);
    res.status(500).json({error:'Internal error:'})

  }
})

app.post('/menu',async(req,res) => {
  try{
    const data = req.body
    constnewMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal  Server Errror'});
  }
})

app.get('/menu', async(req,res) =>
{
  try{
    const data = await MenuItem.find();
    consdole.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log('err');
    res.status(500).json({error: 'Internal server error'})
  }
})

//   newPerson.save((error,savedPerson) => {
//       if(error){
       
//       }else{
        
//       }
//   })
// })

// app.get('/chicken', (req,res)=>{
//     res.send('sure sir i serve you chicken')
// })

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.listen(3000, () => {
  console.log('listening on port 3000 ');
})


