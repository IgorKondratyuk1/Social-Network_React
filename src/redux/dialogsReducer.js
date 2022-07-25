const SEND_MESSAGE = "SEND-MESSAGE";

let initState = {
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
    ]
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let newMessage = {
                id: 3, 
                message: action.text, 
                userId: 1
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (text) => ({type: SEND_MESSAGE, text});
export default dialogsReducer;