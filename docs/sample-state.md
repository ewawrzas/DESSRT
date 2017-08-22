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
                checkin_ids : [],
                name : "...",
                category : "..."
            },
            2 : {
                id : 2  ,
                description : ".....",
                checkin_ids : [],
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

    },
    forms: {
      signUp: {errors: []},
      logIn: {errors: []}
    },
    user: {
      byId : {
        2: {
          username : "user2",
          email: "....",
          checkIns: [],
        }
      }
    }
}
```
