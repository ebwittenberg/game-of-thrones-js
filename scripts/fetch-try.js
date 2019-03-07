// create object with character name and allegiance
function characterAllegiance(arr) {
    let characterAllegiance = {};
    arr.forEach(person => {
        let allegianceArray = person.allegiances;
        allegianceArray.forEach(allegiance => {
            fetch(allegiance)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    let result = myJson;
                    if (characterAllegiance[result.name]) {
                        characterAllegiance[result.name] += 1;
                    } else {
                        characterAllegiance[result.name] = 1;
                    }
                })
        })
    })
    return characterAllegiance;
}
// console.log(characterAllegiance(characters));


