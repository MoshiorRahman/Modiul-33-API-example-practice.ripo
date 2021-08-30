const loadFriends = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayFriends(data))
}

const displayFriends = data => {
    const friends = data.results;
    const friendsContainer = document.getElementById('friends')
    for (const friend of friends) {
        console.log(friend.name)
        const p = document.createElement('p')
        p.innerText = `name: ${friend.name.title} ${friend.name.first} ${friend.name.last}
                        email: ${friend.email}
        `;
        friendsContainer.appendChild(p)


    }
}
