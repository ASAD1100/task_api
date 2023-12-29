

const database={
    admin:[
        { id:'123',
         username:'admin',
         password:'admin123'
         }
     ],
    users:[
        {
            id:'01',
            username:'ankur007',
            password:'ankur123',
            joined:new Date()
        },
        {
            id:'02',
            username:'ankit',
            password:'ankit121',
            joined:new Date()
        }
    ]
}

module.exports=database;//exporting the database object