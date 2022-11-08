console.log('***** Music Collection *****')

let collection = []

function AddToCollection(title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push(this);
    return this;
}
let album = new AddToCollection('Thriller','Michael Jackson',1982);
console.log(album);
console.log(collection);
let album2 = new AddToCollection('Nevermind','Nirvana',1991);
let album3 = new AddToCollection('Rumours','Fleetwood Mac',1977);
let album4 = new AddToCollection('Appetite for Destruction','Guns N Roses',1987);
let album5 = new AddToCollection('Hysteria','Def Leopard',1987);

console.log(album)
console.log(album2)
console.log(album3)
console.log(album4)
console.log(album5)
console.log(collection)

function showCollection(array){
    console.log(array.length)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(array[index])
    }
}
showCollection(collection)

function findByArtist(pam1){
    let artistStuff = []
   
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if pam1 = artist {
            artistStuff.push()
        }

    }
}
findByArtist('Michael Jackson')