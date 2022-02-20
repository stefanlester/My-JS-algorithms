const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);
