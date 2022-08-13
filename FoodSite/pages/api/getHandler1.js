import {MongoClient} from 'mongodb';

async function getHandler1(req, res) {

    if (req.method === 'GET'){
        const data = req.body;
        console.log(req.query.pageIndex);
    const page = req.query.pageIndex ? parseInt(req.query.pageIndex) : 1;
    const limit = req.query.pageSize ? parseInt(req.query.pageSize) : 2;
    const currURLLimiter = req.query.restaurantURL
    const skip = (page - 1) * limit;
    console.log(currURLLimiter);
    const client = await MongoClient.connect(
        'mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority'  );
      const db = client.db();
    const meetupsCollection = db.collection('reviewList');
    const result = await meetupsCollection.aggregate([
        {
            $sort: {
                date: -1
            }
        },
        {
        $facet: {
            totalRecords: [{$match: {restaurant: currURLLimiter}},{$count: 'body'}],
            data : [{$match: {restaurant: currURLLimiter}}, {$skip: skip},{$limit: limit}]
        }
        }
        
    ]).toArray();
    client.close();
    res.send(result);
  
    }

};

export default getHandler1;