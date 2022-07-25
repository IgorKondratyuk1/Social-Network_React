let initState = {
    friends: [
        {id: 1, friendId: 11, name: 'Vitia', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'},
        {id: 2, friendId: 22, name: 'Lida', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'},
        {id: 3, friendId: 33,name: 'Patric', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/640px-Dwayne_Johnson_2%2C_2013.jpg'}
    ]
};

const sidebarReducer = (state = initState, action) => {
    return state;
}

export default sidebarReducer;