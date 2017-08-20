```
{
    checkins : {
        byId : {
            1 : {
                id : 1,
                user_id : 1,
                dessert_id : 1,
                comment : "......",
                rating: 3,
            },
            2 : {
                id : 2
                user_id : 1,
                dessert : 2,
                comment : "......",
                rating: 4,    
            }
        }
        allIds : [1, 2] //used to filter selected checkins
    },
    desserts : {
        byId : {
            1 : {
                id : 1,
                description : ".....",
                checkin_id : 1,
                name : "...",
                category : "..."
            },
            2 : {
                id : 2  ,
                description : ".....",
                checkin_id : 2,
                name : "...",
                category : "..."
            }            
        },
    },
    currentUser : {
        byId : {
            1: {
                username : "user1",
            }  
        }

    }
}
```
