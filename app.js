const data = [
    {
        name       : 'John Deo',
        age        : 32,
        gender     : 'male',
        lookingfor : 'female',
        location   : 'Boston MA',
        image      :'https://randomuser.me/api/portraits/men/82.jpg',
    },
    {
        name       : 'Jen smith',
        age        : 26,
        gender     : 'female',
        lookingfor : 'male',
        location   : 'Miami FL',
        image      :'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
        name       : 'William smith',
        age        : 38,
        gender     : 'male',
        lookingfor : 'female',
        location   : 'Denmask',
        image      :'https://randomuser.me/api/portraits/men/83.jpg',
    }

];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click',nextProfile);

//Next profile display

function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Name: ${currentProfile.age}</li>
        <li class="list-group-item">Name: ${currentProfile.location}</li>
        <li class="list-group-item">Name: ${currentProfile.gender} looking for ${currentProfile.lookingfor}
        </li>
        
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} else {
    //No more profile
    window.location.reload();
 }
}

//Profile iterator
function profileIterator(profiles){
    let nextIndex = 0;
    
    return {
        next : function(){
            return nextIndex < profiles.length ? 
            {value: profiles [nextIndex++], done: false } :
            {done : true}
        }

    };

}
