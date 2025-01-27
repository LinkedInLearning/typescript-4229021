let friend = { name: "abc", email: "def" };

function saveContactDetails(details: typeof friend) {
    console.log(details);
}

saveContactDetails(friend) 
