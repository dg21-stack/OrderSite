import {MongoClient} from 'mongodb';

async function checkoutHandler(req, res) {

    if (req.method === 'POST'){
        const data = req.body;
    
    const client = await MongoClient.connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');

    const db = client.db();
    
    const resCollection = db.collection('checkoutList');
    
    await resCollection.insertOne(data);
    client.close();
    res.status(201).json({message: 'Checkout Complete!'});
    }

};

export default checkoutHandler;