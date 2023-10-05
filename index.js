const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/sequelizeConfig');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

sequelize.sync()
    .then(() => {
        console.log('Database Connected');
    })
    .catch(err => {
        console.error('Database synchronization failed:', err);
    });

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
