const express = require('express');
const router = express.Router();

const users = [
    {
        "_id": "5eadf3666debd302d9e29c4d",
        "index": 0,
        "guid": "38453634-5462-4521-afbd-464e7d497471",
        "isActive": true,
        "balance": "$2,194.81",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "blue",
        "name": "Singleton Mayer",
        "gender": "male",
        "company": "VIAGRAND",
        "email": "singletonmayer@viagrand.com",
        "phone": "+1 (821) 406-2153",
        "address": "908 Dahill Road, Brogan, American Samoa, 8617",
        "about": "Cillum do proident dolor aute duis ipsum. Proident consequat exercitation dolor aliquip cillum reprehenderit elit quis Lorem eu eiusmod pariatur elit minim. Consequat eiusmod dolor et in incididunt velit aliqua exercitation. Consectetur esse tempor officia labore eu et est irure mollit.\r\n",
        "registered": "2014-01-17T01:40:43 -02:00",
        "latitude": -18.187206,
        "longitude": -73.017791,
        "tags": [
            "laborum",
            "veniam",
            "quis",
            "reprehenderit",
            "do",
            "ea",
            "veniam"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Blanche Battle"
            },
            {
                "id": 1,
                "name": "Black Wheeler"
            },
            {
                "id": 2,
                "name": "Dena Martin"
            }
        ],
        "greeting": "Hello, Singleton Mayer! You have 10 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5eadf366340428ba3fb01f83",
        "index": 1,
        "guid": "f0cb677b-1413-44ce-948c-1022ba446517",
        "isActive": false,
        "balance": "$1,814.82",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Rosalie Ashley",
        "gender": "female",
        "company": "IMAGINART",
        "email": "rosalieashley@imaginart.com",
        "phone": "+1 (968) 560-3965",
        "address": "660 Colonial Road, Harrison, Missouri, 8466",
        "about": "Sit Lorem dolore nulla eu eiusmod laboris sunt aute in incididunt consequat laboris ad. Non cillum consequat reprehenderit occaecat do nostrud ad commodo commodo. Veniam in aliqua amet ut est irure Lorem. Anim aliquip cillum adipisicing excepteur laboris. Incididunt deserunt cupidatat pariatur nostrud irure tempor laboris enim ea. Commodo pariatur aliquip irure magna id occaecat nisi nostrud Lorem ullamco sunt.\r\n",
        "registered": "2018-12-23T11:00:33 -02:00",
        "latitude": -58.881934,
        "longitude": 29.450974,
        "tags": [
            "Lorem",
            "pariatur",
            "cupidatat",
            "aliqua",
            "ad",
            "tempor",
            "elit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mindy Burnett"
            },
            {
                "id": 1,
                "name": "Eaton Shields"
            },
            {
                "id": 2,
                "name": "Kerr Benton"
            }
        ],
        "greeting": "Hello, Rosalie Ashley! You have 4 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5eadf3666b50bd2c470f14bf",
        "index": 2,
        "guid": "030b5cd5-e10c-46cf-b6ea-03d049f4355e",
        "isActive": false,
        "balance": "$1,996.45",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Beatrice Riggs",
        "gender": "female",
        "company": "JAMNATION",
        "email": "beatriceriggs@jamnation.com",
        "phone": "+1 (886) 586-2853",
        "address": "271 Dewey Place, Bowmansville, Federated States Of Micronesia, 5715",
        "about": "Ex nostrud dolore nulla id proident magna consequat laborum minim minim pariatur culpa duis. Consequat sint exercitation dolor proident officia adipisicing sint. Ad et amet quis laboris qui amet Lorem labore anim cupidatat.\r\n",
        "registered": "2015-06-24T06:06:58 -03:00",
        "latitude": -12.648968,
        "longitude": -142.77775,
        "tags": [
            "id",
            "reprehenderit",
            "eiusmod",
            "nulla",
            "nostrud",
            "incididunt",
            "ad"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Alice Padilla"
            },
            {
                "id": 1,
                "name": "Rhea Douglas"
            },
            {
                "id": 2,
                "name": "Pace Cotton"
            }
        ],
        "greeting": "Hello, Beatrice Riggs! You have 8 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5eadf3661b3d929dc885cf74",
        "index": 3,
        "guid": "b054270e-2b1f-438b-94b8-4bfe50f01004",
        "isActive": true,
        "balance": "$3,603.22",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "green",
        "name": "Maura Franklin",
        "gender": "female",
        "company": "ZAPHIRE",
        "email": "maurafranklin@zaphire.com",
        "phone": "+1 (840) 475-3655",
        "address": "908 Bancroft Place, Yettem, Kansas, 9435",
        "about": "Labore dolor culpa officia pariatur ea commodo ut ea. Culpa nisi occaecat reprehenderit dolore. Laboris in nulla reprehenderit irure reprehenderit aliqua enim id anim mollit occaecat sunt commodo do. Lorem dolore commodo cillum elit incididunt quis. Eiusmod eu occaecat irure aliquip ut. Elit nulla esse irure amet quis.\r\n",
        "registered": "2019-11-04T08:10:06 -02:00",
        "latitude": -8.114878,
        "longitude": 101.482872,
        "tags": [
            "ea",
            "esse",
            "fugiat",
            "elit",
            "ut",
            "ex",
            "in"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Serrano Daugherty"
            },
            {
                "id": 1,
                "name": "Flowers Kemp"
            },
            {
                "id": 2,
                "name": "Holly Leach"
            }
        ],
        "greeting": "Hello, Maura Franklin! You have 6 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5eadf366d610ba8d441b2c89",
        "index": 4,
        "guid": "66dc2e9c-ad24-4980-b3c6-149b70d50a6f",
        "isActive": true,
        "balance": "$3,214.77",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "brown",
        "name": "Ochoa Stephens",
        "gender": "male",
        "company": "ANIMALIA",
        "email": "ochoastephens@animalia.com",
        "phone": "+1 (968) 429-3602",
        "address": "912 Ash Street, Gilgo, Delaware, 2343",
        "about": "Nulla pariatur quis id proident id. In commodo ea ipsum culpa sint qui exercitation duis. Laborum culpa occaecat irure adipisicing. Id deserunt nulla eu non sunt sint in incididunt. Dolore ipsum anim ullamco non ipsum nostrud reprehenderit. Elit in elit magna ipsum aute duis dolor nostrud eu.\r\n",
        "registered": "2016-01-20T06:16:01 -02:00",
        "latitude": -1.234819,
        "longitude": 37.178237,
        "tags": [
            "amet",
            "et",
            "Lorem",
            "consectetur",
            "cupidatat",
            "deserunt",
            "consectetur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Montgomery Ellison"
            },
            {
                "id": 1,
                "name": "Pat Underwood"
            },
            {
                "id": 2,
                "name": "Burke Hobbs"
            }
        ],
        "greeting": "Hello, Ochoa Stephens! You have 6 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5eadf366e96a0e0b8a4af64c",
        "index": 5,
        "guid": "0ab35b44-793d-43bb-97fa-dc5270893d59",
        "isActive": false,
        "balance": "$1,100.76",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "blue",
        "name": "Castillo Browning",
        "gender": "male",
        "company": "EXTRAGENE",
        "email": "castillobrowning@extragene.com",
        "phone": "+1 (833) 500-2833",
        "address": "232 Ide Court, Walland, Florida, 1685",
        "about": "Nulla tempor quis qui veniam dolor ad enim occaecat sunt duis ipsum dolore laborum. Irure ad ipsum minim irure ipsum ex ad. Sunt tempor ipsum laborum ex consequat ipsum fugiat voluptate elit. Ullamco sint sunt officia proident. Esse laborum officia elit officia consectetur irure Lorem sint. Aute ea ea magna enim qui veniam irure eiusmod eiusmod in proident dolore fugiat.\r\n",
        "registered": "2016-03-08T10:37:18 -02:00",
        "latitude": 36.294892,
        "longitude": -11.176247,
        "tags": [
            "labore",
            "Lorem",
            "id",
            "irure",
            "ex",
            "consequat",
            "mollit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bullock Gilliam"
            },
            {
                "id": 1,
                "name": "Barlow Hoover"
            },
            {
                "id": 2,
                "name": "Robbie Hart"
            }
        ],
        "greeting": "Hello, Castillo Browning! You have 2 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5eadf366181c0ff057de9430",
        "index": 6,
        "guid": "54174646-b7c3-4003-aa4d-9966c2d1d1fc",
        "isActive": true,
        "balance": "$3,105.01",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "blue",
        "name": "Tracy Woods",
        "gender": "female",
        "company": "POSHOME",
        "email": "tracywoods@poshome.com",
        "phone": "+1 (872) 576-3736",
        "address": "873 Bragg Court, Bentonville, Texas, 5311",
        "about": "Officia ut duis ea voluptate consectetur occaecat pariatur deserunt laboris. Sit minim culpa tempor consequat Lorem eiusmod ad labore aliquip fugiat enim. Pariatur ut proident irure quis exercitation anim occaecat commodo ipsum tempor cupidatat laborum dolore. Ea magna in enim irure commodo aliqua eu eiusmod dolor duis. Esse est sint magna cupidatat enim cupidatat et qui culpa. Cupidatat amet excepteur sit laborum. Magna anim consequat sunt duis ut ipsum est deserunt aliqua nulla excepteur do.\r\n",
        "registered": "2016-02-13T08:00:52 -02:00",
        "latitude": -5.653923,
        "longitude": -121.825547,
        "tags": [
            "consequat",
            "irure",
            "labore",
            "laboris",
            "consequat",
            "nostrud",
            "qui"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ashlee Daniel"
            },
            {
                "id": 1,
                "name": "Natalia Rivas"
            },
            {
                "id": 2,
                "name": "Kitty Dodson"
            }
        ],
        "greeting": "Hello, Tracy Woods! You have 3 unread messages.",
        "favoriteFruit": "banana"
    }
];

// /users
router.get('/', (req, res) => {
    console.log(req.query.name)
    res.status(200).send(users);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u._id === id);
    if (!user){
        return  res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
});

// POST /users
router.post('/', (req, res) => {
    console.log(req.body);
    const newUser = {
        ...req.body,
        _id: String(Math.random())
    };
    users.push(newUser);
    res.status(200).send(`User with id ${Object.entries(newUser)} has been successfully created `);
});

module.exports = router;