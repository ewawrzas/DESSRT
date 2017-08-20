```
{
    reviews : {
        byId : {
            1 : {
                id : 1,
                author_id : 1,
                dessert_id : 1,
                body : "......",
                rating: 3,
            },
            2 : {
                id : 2
                author_id : 1,
                dessert : 2,
                body : "......",
                rating: 4,    
            }
        }
        allIds : [1, 2] //used to filter selected reviews
    },
    desserts : {
        byId : {
            1 : {
                id : 1,
                description : ".....",
                review_id : 1,
                name : "...",
                category : "..."
            },
            2 : {
                id : 2  ,
                description : ".....",
                review_id : 2,
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
