var id = 1 //global id for each cat

//first make a cat constructor function
function Cat(name, picture){
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Bite-y"];
    this.petCount = 0;

    id++  //updates the id of the cats from var id =1
}

var catLady = {  //make the lady with an object so we can put the cats in there
    cats: []
}
//here are the cats
var cat1 = new Cat('Mr. Snibbly', "http://cutecatsinhats.com/wp-content/uploads/2016/01/monocle-top-hat-cat.jpg")
var cat2 = new Cat("Snuffles", "https://pbs.twimg.com/profile_images/764160114093850624/1Lrto5jt.jpg")
var cat3 = new Cat("Snuffles", "https://pbs.twimg.com/profile_images/1740427202/fancy_cat.jpg")

//here is how we push the cats into the cats array under the cat lady object
catLady.cats.push(cat1, cat2, cat3)

//console.log(catLady) to check if the object has been made
//never use a for loop outside of a function
//no free floating "verb" actions
//all code should be reusable

//variables should be the only thing outside of a function

function draw(cats){  //draw all my cats to the screen in a given html format - cats is just a random name
    //document.getElementById('cats').innerText=catLady.cats[0].name   This line was just to make sure it was sending info to the screen
    var template = '' //goal is that it is every single cat
    for (var i = 0; i < cats.length; i++) {  //write for and go down one
        var cat = cats[i];//variable set up to the results of the loop
        //check number of pets, to determine status
        var statusIndex = 0;//starts off happy and then change to bitey
        if(cat.petCount > 5){
            statusIndex = 1 //bitey status
        }
        template += `
            <div class="cat">
                <img src="${cat.picture}" alt="">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Number of Pets: ${cat.petCount}</p>
                <button type="button" onclick="pet(${cat.id})">Pet Me</button>
                <button type="button" onclick="catnip(${cat.id}")>Catnip</button>
            </div>
            `
        
    }

    document.getElementById("cats").innerHTML = template  //references the div named cats in the html
}
draw(catLady.cats)

function pet(catId){
    //find by ID
    var catToPet = findCatById(catLady.cats, catId) //catLday.cats is for the first param in the findcatbyid function
    //increment pet count
    catToPet.petCount++
    draw(catLady.cats)

}

function catnip(catId){
    var catToNip = findCatById(catLady.cats, catId)
    catToNip.petCount = 0
    draw(catLady.cats)
}

function findCatById(catArray, catId){  //catID is just a whatever parameter
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if(catId === cat.id){
            return cat
        }
        
    }
}