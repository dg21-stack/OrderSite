import {MongoClient} from 'mongodb';

async function getResHandler(req, res) {

    if (req.method === 'GET'){
        const data = req.body;
        console.log(req.query.pageIndex);
    const page = req.query.pageIndex ? parseInt(req.query.pageIndex) : 1;
    const limit = req.query.pageSize ? parseInt(req.query.pageSize) : 2;
    const skip = (page - 1) * limit;
    const client = await MongoClient.connect(
        'mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority'  );
      const db = client.db();
    const meetupsCollection = db.collection('ResList');
    const result = await meetupsCollection.aggregate([
        {
            $sort: {
                stars: -1
            }
        },
        {
        $facet: {
            totalRecords: [{$count: 'description'}],
            data : [{$skip: skip},{$limit: limit}]
        }
        }
        
    ]).toArray();
    console.log(result);
    const ressy = [{
        totalRecords: result[0].totalRecords,
        data: result[0].data.map(meetup => ({
            address: meetup.address,
            description: meetup.description,
            image: meetup.image,
            id: meetup._id.toString(),
            menu: meetup.menu,
            name: meetup.name
        }))
    }]
    client.close();
    res.send(ressy);
    
    }

};

export default getResHandler;