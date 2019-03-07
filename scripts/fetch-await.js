// create object with character name and allegiance
function characterAllegiance(arr) {
    let characterAllegiance = {};
    arr.forEach(person => {
        let allegianceArray = person.allegiances;
        allegianceArray.forEach(allegiance => {
            const request = async () => {
                const response = await fetch(allegiance);
                const json = await response.json();
                let result = json;
                if (characterAllegiance[result.name]) {
                    characterAllegiance[result.name] += 1;
                } else {
                    characterAllegiance[result.name] = 1;
                }
            }
            request();
        })
    })
    return characterAllegiance;
}
console.log(characterAllegiance(characters));