import {MongoClient} from 'mongodb';

async function getIDhandler(req, res) {

    if (req.method === 'GET'){
        const data = req.body;
    
    const client = await MongoClient.connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');

    const db = client.db();
    
    const resCollection = db.collection('ResList');
    
    const result = await resCollection.findOne({email: req.query.email})
    client.close();
    const ressy = {
        id: result._id.toString()
    }
    res.send(ressy);
    }
};
export default getIDhandler;