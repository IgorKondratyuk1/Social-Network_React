import profileReducer, { addPost, deletePost } from "../profileReducer";

let state = {
    posts: [
        {id: 1, message: "Hello it's my first post", likesCount: 12},
        {id: 2, message: "Yeeeeaaaah", likesCount: 5},
        {id: 3, message: "Press F", likesCount: 4}
    ],
    profile: null,
    status: ""
};

it('new post should be added', () => {
    // 1. Prepare test DATA
    let action = addPost("My post for testing");
    
    // 2. Make some ACTION
    let newState = profileReducer(state, action);

    // 3. Result EXPECTATION
    expect(newState.posts.length).toBe(4);
});

it('new post should be correct', () => {
    // 1. Prepare test DATA
    let action = addPost("My post for testing");
    
    // 2. Make some ACTION
    let newState = profileReducer(state, action);

    // 3. Result EXPECTATION
    expect(newState.posts[ newState.posts.length - 1 ].message).toBe("My post for testing");
});

it('post should be deleted', () => {
    // 1. Prepare test DATA
    let action = deletePost(1);
    
    // 2. Make some ACTION
    let newState = profileReducer(state, action);

    // 3. Result EXPECTATION
    expect(newState.posts.length).toBe(2);
});