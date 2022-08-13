import {MongoClient} from 'mongodb';

async function paragraphHandler(req, res) {

    if (req.method === 'POST'){
        const data = req.body;
    
    const client = await MongoClient.connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');

    const db = client.db();
    
    const resCollection = db.collection('ResList');
    
    await resCollection.updateOne({email: req.body.email}, {$set: {paragraph: req.body.item}});
    client.close();
    res.status(201).json({message: 'name updated!'});
    }
};

export default paragraphHandler;