exports = function(changeEvent) {
  console.log("IN EMAILHEALTHINSPECTOR FUNCTION");
  
  const AWS_SES_Service = context.services.get("AWSSES").ses("us-east-1");
  const NewRestaurant = changeEvent.fullDocument;
  
  const custom_msg = `Dear Health Inspector, <br><br> There is a new restaurant to inspect. ${NewRestaurant.name} has opened in the ${NewRestaurant.borough} borough. 
              Please inspect soon.<br><br>
              Restaurant Name: ${NewRestaurant.name}<br>
              Address: ${NewRestaurant.address.building} ${NewRestaurant.address.street} <br>
              Restaurant ID: ${NewRestaurant.restaurant_id} <br><br>
              Your friendly MongoDB Workshop`;
  
  var input = {
      Destination: {
        ToAddresses: ["superhappyclouddev@gmail.com"]
      },
      Message: {
          Body: {
            Html: {
              Charset:"UTF-8",
              Data: custom_msg  
            }
        },
        Subject: {
              Charset:"UTF-8",
              Data:   `New Restaurant Alert! - ${NewRestaurant.name}`
        }
      },
      Source: "karen.huaulme@gmail.com"
  };
  try {
      AWS_SES_Service.SendEmail(input).then(function (result){
        console.log(JSON.stringify(result));
      });
  } catch(error) {
      console.log(error);
  }

};
