<p align="center">
<img src="https://github.com/jerpowel321/TruckTracker-FE/blob/master/public/TruckTrackerLogo.png" width="250">
</p>
=====================================================================================

Our third project for our full-stack coding bootcamp, TruckTracker is a Food Truck locator application that provides users with the location and business information of Food Trucks near them. Food Trucks can also create an account and submit a business application. Once approved by an administrator, the Food Truck can log-in to the application and update their current location with a press of a button. Users will be able to view the truck's real-time location using google maps API. 

#### Landing Page
![website](/public/TruckTrackerSignIn.png "TruckTracker")

###### For our application, we have used firebase authentication and allow users the option to sign in with their google or facebook account.

#### Business Application Page
![Food Truck Application](/public/TTApplication.png "Food Truck Application")

###### Once the Food Truck Owner has made an account, the first thing they want to do is fill out an application. This information will be reviewed by an Admin and the owner will be contacted if we have any questions. The information we receive is stored on mySql and once that application is approved by an admin, the business owner will be able to update their live location on their dashboard/home page. 

#### Business Owner Dashboard
![Food Truck Owner Dashboard](/public/TTHomePage.png "Food Truck Owner Dashboard")

###### With a simple click of a button, the Food Truck may update their current location and leave the button active until they move locations or close out for the day. We use firebase to store the Food Truck's current location.

#### Business Owner Account Page
![Account](/public/TTAccount.png "Food Truck Owner Account")

###### If for whatever reason, the business owner wishes to change their account password, we allow them two methods to do so on their account page.


#### Forget Password
![Forget Password](/public/TTForgetPassword.png "Forget Password")

###### If you forget your password, click on the "Forget Password" Link on the landing page and you will be directed to our Forget Password Page. Submit you email address and follow the prompts in the email you will receive. 

#### Sign Up 
![Sign Up](/public/TTSignUp.png "Sign Up")

###### Food Truck Owners can click on the "Sign Up" Link located on the Landing Page and will be directed to the Sign Up page displayed above. 





## Decoupled Application

This is a decoupled application. We have an SQL server that only serves to create, update, and render JSON Data deployed on Heroku found [here](https://api-food-truck.herokuapp.com/). 

Our react app is hosted on an entirely different server found [here](https://trucktrackerdemo.herokuapp.com/). We built to make it easier for us in the future to build the front end later using react native or another method.


## 🔑 How to Use the App:

The application is intuitive and requires little to no prior knowledge before being ready to use.

Follow the steps below if you are a Food Truck Business:

1. Sign Up using your name, email address and password. 

2. Sign In, trucker data is stored in firebase database using high order context a secure sign-up/sign-in strategy.
   
3. Navigate to the application dashboard and submit the Food Truck business information in its entirety. 
   
4. Once the application has been approved by an administrator, navigate to your dashboard and click on the _Enable Geolocation_ button to update the Food Truck's location. 
   
Follow the stups below if you are an Individual looking for Food Trucks near you.

1. On the landing page, click on the _Yes! Take me There_ button to be directed to the user dashboard page where Food Trucks near you are listed on a google map. 

2. Note that in order to view the Food Trucks you do not need to make an account. 

## 📁 Deployment Instructions

This app has been deployed to Heroku, and the link can be found [here](https://deployedwtt.herokuapp.com/ "live link").

## 🔧 Technologies Used  

+ **HTML5** and **CSS3** for page content and styling.

+ **React** for templating and generating HTML content, served up through our routes from our server.

+ **Bootstrap** as a CSS framework for applying styles and using components.

+ **Google Fonts** for unique font application.

+ **Font Awesome** for Icons.

+ **JavaScript** for the app's logic.
  
+ **Node.JS** for the app's server environment.

+ **NPM** for installation of the packages required by the app:
  + **axios**
  + **react-chart.js-2**
  + **express**
  + **firebase** 
  + **google-map-react**
  + **hover.css**
  + **mysql2**
  + **react-router-dom**
  + **react-scrips**
  + **recompose**
  + **sequelize**

  
+ **MySQL** for database creation and storing persistent data.
+ **Firebase** for database creation and storing real-time data.
  
+ **Heroku** for live deployment and hosting.
  
+ **Chart.js** used to visualy display the number of registered Food Trucks in our Sql database by cusine type.
  
+ The app follows the **MVC (Model, View, Controller)** architecture paradigm:
  
![mvc pic](/public/mvc1.png "MVC architecture") ![mvc pic](/public/mvc2.png "MVC architecture")


## 🌟 Acknowledgements

We would like to thank our instructor Jerome and our awesome TA's Sajeel, Jacob, and Jimmy for their guidance and support. 
    
## 🔗 Authors 

+ Melanie Marsollier—https://github.com/Mel-Marsollier
+ Jennifer Powell—https://github.com/jerpowel321
+ Noah Glasser—https://github.com/NBGlasser
+ Cyrus Ghadiri—https://github.com/ctghadiri


