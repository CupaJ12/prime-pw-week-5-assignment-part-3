console.log('***** Music Collection *****')

let collection = []

function AddToCollection(title, artist, yearPublished) {
    record = {title, artist, yearPublished};
    this.title = collection.title;
    this.artist = collection.artist;
    this.yearPublished = collection.yearPublished;
    collection.push({record});
    return record;
}
// let album = new AddToCollection('Thriller','Michael Jackson',1982);
// console.log(album);
// console.log(collection);
// let album2 = new AddToCollection('Nevermind','Nirvana',1991);
// let album3 = new AddToCollection('Rumours','Fleetwood Mac',1977);
// let album4 = new AddToCollection('Appetite for Destruction','Guns N Roses',1987);
// let album5 = new AddToCollection('Hysteria','Def Leopard',1987);



AddToCollection('Thriller','Michael Jackson','1982');
AddToCollection('Nevermind','Nirvana','1991');
AddToCollection('Rumours','Fleetwood Mac','1977');
AddToCollection('Appetite for Destruction','Guns N Roses','1987');
AddToCollection('Hysteria','Def Leopard','1987');
AddToCollection('Bobby','Michael Jackson','1983');



// console.log(album)
// console.log(album2)
// console.log(album3)
// console.log(album4)
// console.log(album5)
console.log(collection)

function showCollection(searchString){
    console.log(collection.length)
    let selectedCollection = []
    for (let index = 0; index < collection.length; index++) {
        if (collection[index].record.artist === searchString) {
            selectedCollection.push(collection[index].record);
        }
        if (collection[index].record.title === searchString) {
            selectedCollection.push(collection[index].record);
        }
        if (collection[index].record.yearPublished === searchString) {
            selectedCollection.push(collection[index].record);
        }
        
    }
    return selectedCollection
}
showCollection(collection)
console.log(showCollection('Michael Jackson'));

function findByArtist(pam1){
    let artistStuff = []
   
    for (let index = 0; index < collection.length; index++) {
        // const element = collection[index];
        if (collection[index].record.artist === pam1) {
            artistStuff.push(collection[index].record);
        }
    }
    return artistStuff;
}
console.log(findByArtist('Michael Jackson'));