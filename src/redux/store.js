import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello it's my first post", likesCount: 12},
                {id: 2, message: "Yeeeeaaaah", likesCount: 5},
                {id: 3, message: "Press F", likesCount: 4}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Tom"},
                {id: 2, name: "Jack"},
                {id: 3, name: "Liza"},
                {id: 4, name: "Andrew"},
                {id: 5, name: "Viktor"},
            ],
            messages: [
                {id: 1, message: "Hi", userId: 1},
                {id: 2, message: "Hello", userId: 2},
                {id: 3, message: "How are you?", userId: 1},
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, friendId: 11, name: 'Vitia', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'},
                {id: 2, friendId: 22, name: 'Lida', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'},
                {id: 3, friendId: 33,name: 'Patric', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'}
            ]
        }
    },
    _callSubscriber() { // Функція підписник, яка перезаписується
        console.log('State Changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;