
exports = async function(arg){

  var collection = context.services
    .get("mongodb-atlas").db("Workshop").collection("restaurants");
  
  console.log ("IN GETRESTAURANTSBYNAME FUNCTION");
  
  //Return a single document to matching the arg/restaurant name.
  var doc = await collection.findOne({name: arg});
  if (typeof doc === "undefined") {
    return `No restaurants named ${arg} were found.`;
  } 
  
  console.log(`FOUND A MATCHING RESTAURANT: ${arg}.`);
  
  return doc;
}
