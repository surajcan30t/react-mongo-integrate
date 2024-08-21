const express = require('express');
const connnectDB = require('./db')
const userModel = require('./Register')
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));


app.get('/', (req, res) => {
  res.json('Hello World!');
});

connnectDB();

app.post('/register', async (req, res) => {
    const { username, registrationID, password } = req.body;
    if(!username || !registrationID || !password){
        return res.status(400).json({ message: 'All fields are required' });
    }

    try{
        await userModel.create({ username, registrationID, password });
        console.log('User Registered');
        return res.status(200).json({ message: 'User Registered' });
    }catch(error){
        console.error(error);
    }
})

app.get('/allusers', async (req, res) => {
    try{
        const users = await userModel.find({});
        return res.status(200).json(users);
    }catch(error){
        console.error(error);
    }
})

app.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    try{
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({ message: 'User Deleted' });
    }catch(error){
        console.error(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});