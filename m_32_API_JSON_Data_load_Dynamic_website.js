//32-2 Recap API Concept , Intro to JSON
const person={
    name:'toukir',
    age:22,
    address:'Dhaka',
    profession:'student',
    country:'Bangladesh',
    favSubject:['Math','English','Bangla','ICT'],
    isMarried:false,
    friends:[
        {name:'Avi',age:23},
        {name:'1229',age:24},
        {name:'Salma',age:25},
        {name:'toukir',age:26},
    ],
    hasGF:false,
    gfName:'',
    siblings:['sister','brother'],
    isSingle:true,
    isRich:false,
    isHappy:true,
    isHealthy:true,
    isActive:true,
    isStudent:true,
    isEmployed:false,
    isEntrepreneur:false,
    isTraveler:true,
    isFoodie:true,
    isGamer:false,
    isReader:true,
    isWriter:false,
    isArtist:false,
    isMusician:false,
    isDancer:false,
    isSinger:false,
    isActor:false,
    isDirector:false,
    isProducer:false,
    isPhotographer:false,
    isBlogger:true,
    isVlogger:false,
    isYoutuber:false,
    isTiktoker:false,
    isInstagrammer:true,
    isFacebooker:true,
    isTwitterer:false,
    isLinkedIn:false,
    isSnapchatter:false,
    isRedditor:false,
    isQuoran:false,
    isPinterestUser:false,
    isTumblrUser:false,
    isMediumUser:false    ,
    isSubstackUser:false,
    isPatreonUser:false,
}
// json=javascript object notation
// 1. JSON is a data format that is used to store and exchange data.
// 2. JSON is a lightweight data format.
// 3. JSON is easy to read and write.
// 4. JSON is language independent.
// 5. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

// JSON Data Types
// 1. String
// 2. Number
// 3. Object
// 4. Array
// 5. Boolean
// 6. Null

// Converting Object to JSON and JSON to Object
// 1. JSON.stringify() - Converts Object to JSON
// 2. JSON.parse() - Converts JSON to Object

// Example: 



console.log(person,'\n\ntyepeof person:',typeof person);
const personJSON=JSON.stringify(person);//Object converted in to String
console.log(personJSON,'\n\ntypeof personJSON:',typeof personJSON);// string
const personParsed=JSON.parse(personJSON);//String converted in to Object
console.log(personParsed,'\n\ntypeof personParsed:',typeof personParsed); // object


//32-3 Load Json Data using Fetch Function




const loadData=()=>{
     const res=fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())//converting fetched data to json string
.then(json=>console.log(json));    //printing json string data
}