import {MongoClient} from 'mongodb';

async function handler2(req, res) {

    if (req.method === 'POST'){
        const data = req.body;
    
    const client = await MongoClient.connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');

    const db = client.db();
    
    const resCollection = db.collection('ResList');
    
    await resCollection.updateOne({email: req.body.email}, {$pull : {menu: {name: req.body.item}}});
    client.close();
    res.status(201).json({message: 'menu item deleted!'});
    }
};

export default handler2;