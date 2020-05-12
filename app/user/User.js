import LocalStorage from './LocalStorage'

export default class User {
    
    static id = ''    
    static email = ''
    
    static async getUserFromStore() {
      const user =  await LocalStorage.getItemWithKey("user_data")
            console.log("user_data",user)
            if(user) {
                // console.log('get user data token', user)                
                User.setUser(user)
            } else {
                User.resetUser()
            }
    }

    static getUser() {
        return {
            id: User.id,
            email : User.email,
            }
    }

    static setUser(user) {
        User.id = user.id        
        User.email = user.email
        
    }

    static async storeUser(userData = null) {
        // console.log('stored user data token', userData)                
        if (userData) {
            const user = { 
                email: userData.email,
                id: userData.id,
               }
           
            User.setUser(user)
            LocalStorage.setItemWithKeyAndValue("user_data", user).then((response) => {
                return response
            });
            return true;
        }
        
    }


    static async updateUser(userData) {
        // console.log('update user data', userData)                
        if (userData) {
            const user = {  
                id : userData.id,
                email: userData.email,
                }
            User.setUser(user)
            LocalStorage.setItemWithKeyAndValue("user_data", user).then((response) => {
                return response
            });
            return true;
        }
        
    }

    static resetUser() {
        LocalStorage.resetUser("user_data")        
       }

    static async deleteUser() {
        LocalStorage.setItemWithKeyAndValue("user_data", null).then((response) => {
            User.resetUser()
        });
    }
}



