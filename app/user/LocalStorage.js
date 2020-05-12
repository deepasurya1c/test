import AsyncStorage from '@react-native-community/async-storage'

export const currentUserStorageKey = 'currentUserStorageKey'

export default class LocalStorage {


    static async setItemWithKeyAndValue(currentUserStorageKey, value) {    // key : 'user_data'
        // console.log("set store" ,currentUserStorageKey, value)
        try {
            await AsyncStorage.setItem(currentUserStorageKey, JSON.stringify(value));
            return true;
        } catch (error) {
            return false;
        }
    }

    static async getItemWithKey(action) {
        //console.log("get store" ,action)
        try {
            const data = await AsyncStorage.getItem(action);
            const parsedData = JSON.parse(data);
            // console.log("get store" ,parsedData)
            return parsedData//action(parsedData);
        } catch (error) {
            action(null);
        }
    }

    static async resetUser(action) {
        //console.log("get store" ,action)
        try {
            await AsyncStorage.removeItem(action);
        } catch (error) {
            action(null);
        }
    }

}
