const
    express = require ('express'),
    app = express(),
    port = process.env.PORT || 4000;

// Route
app.get('/api/customers', (req, res) => {
    const customers = [
        {
            id: 1,
            firstName: "John",
            lastName: "Dove"
        },
        {
            id: 2,
            firstName: "Maruf",
            lastName: "Neezi"
        },
        {
            id: 3,
            firstName: "Pavel",
            lastName: "Didi"
        }
    ];
    res.json(customers);
});

//
// app.listen(port, () => console.log(`Server started on port: + ${port}`));
app.listen(
    port,
    function(){
        console.log('Server started on port:' + port);
    }
);