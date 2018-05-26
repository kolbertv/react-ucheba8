let express = require('express');
let bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let blogs = [
    {
        id: 1,
        body: 'blog blog blog blog blog blog blog blog blog blog',
        author: 'Jon Blog',
        date: '25-05-2018 15:30',
        comments: [
            {
                id: 1,
                author: 'Bill Com',
                date: '25-05-2018 17:30',
                body: 'coments coments coments coments coments coments coments coments',
                subcomments: [
                    {
                        id: 1,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    },
                    {
                        id: 2,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    }
                ]

            },
            {
                id: 2,
                author: 'Bill Com',
                date: '25-05-2018 17:30',
                body: 'coments coments coments coments coments coments coments coments',
                subcomments: [
                    {
                        id: 1,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    },
                    {
                        id: 2,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    }
                ]

            }

        ]

    },
    {
        id: 2,
        body: 'blog blog blog blog blog blog blog blog blog blog',
        author: 'Jon Blog',
        date: '25-05-2018 15:30',
        comments: [
            {
                id: 1,
                author: 'Bill Com',
                date: '25-05-2018 17:30',
                body: 'coments coments coments coments coments coments coments coments',
                subcomments: [
                    {
                        id: 1,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    },
                    {
                        id: 2,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    }
                ]

            },
            {
                id: 2,
                author: 'Bill Com',
                date: '25-05-2018 17:30',
                body: 'coments coments coments coments coments coments coments coments',
                subcomments: [
                    {
                        id: 1,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    },
                    {
                        id: 2,
                        author: 'Bill Subcom',
                        date: '25-05-2018 17:30',
                        body: 'subcoments subcoments subcoments subcoments subcoments subcoments',
                    }
                ]

            }

        ]

    }
];


app.get('/', function (req, res) {
    res.send('hellk API');
});


app.get('/blog', function (req, res) {
    res.send(blogs);

});


app.get('/blog/:id', function (req, res) {
    console.log(req.params);
    let blog = blogs.find(function (blog) {
        return blog.id === Number(req.params.id);
    });
    res.send(blog);

});

app.post('/blog', function (req, res) {
    let blog = {
        id: Date.now(),
        body: 'blog blog blog blog blog blog blog blog blog blog',
        author: req.body.name,
        date: '25-05-2018 15:30',
        comments: []
    };

    blogs.push(blog);
    console.log(req.body);
    res.send(blog);
});

app.put('/blog/:id', function (req, res) {
    let blog = blogs.find(function (blog) {
        return blog.id === Number(req.params.id);
    });

    blog.author = req.body.author;
    blog.body = req.body.body;
        res.send(blog);
});


app.listen(3012, function () {
    console.log('API startes');
});

