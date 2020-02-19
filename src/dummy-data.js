const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'data:image/png;base64,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',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just delicious coffees to offer at our shops!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    }
];

export default dummyData;
