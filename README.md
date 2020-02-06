**Study Spots** 📍 📝
===================

A full stack React.js, Redux and Ruby on Rails web app aimed to provide
a convenient way of searching for places to study.

Built with 💖 and ✨ by [[Vannida
Lim]{.underline}](https://github.com/vannida-lim)

**Goals**
---------

Users will be able to view a list of cafe locations.

Users will be able to filter locations by "has wifi" and/or "open late".

Users will be able to signup and login to view and add locations to
their favorites.

Users will be able to update or delete their location favorites.

Users will be able to drag through the map to view location markers;
they will be able to click the marker and view the location's
information.

Users will be able to search for locations by name.

**Features**
------------

StudySpots is an app that aims to provide users a convenient way to
search for studying environments. Users can search for locations
according to how late a place is open, and if it has wifi. Users will be
able to save locations to their favorites and easily access them when
signing in.

**Tech Stack**
--------------

This web app makes use of the following:

Backend

-   [[Ruby \[2.6.1\]]{.underline}](https://www.ruby-lang.org/en/)

-   [[Ruby on Rails \[\~\>
    > 5.2.3\]]{.underline}](https://rubyonrails.org/) - MVC web
    > framework used as an API

-   [[PostgreSQL \[\>= 0.18, \<
    > 2.0\]]{.underline}](https://www.postgresql.org/) - Database

-   [[bcrypt \[\~\>
    > 3.1.7\]]{.underline}](https://github.com/codahale/bcrypt-ruby) -
    > Rails gem for encryption and securing user passwords

-   [[Figaro]{.underline}](https://github.com/laserlemon/figaro) - Rails
    > gem for securing API Keys

-   [[Active Model
    > Serializers]{.underline}](https://github.com/rails-api/active_model_serializers) -
    > Serializing API routes to JSON

-   [[Yelp-Fusion]{.underline}](https://github.com/erikgrueter1/yelp-fusion)-
    > Rails gem for utilizing the Yelp Fusion API

-   [[Heroku]{.underline}](https://www.heroku.com/) - App deployment

Front End

-   [[React.js]{.underline}](https://reactjs.org/) - Javascript library

-   [[react-router]{.underline}](https://github.com/ReactTraining/react-router#readme) -
    > NPM used for declarative routing

-   [[react-redux]{.underline}](https://react-redux.js.org/) -
    > React-Redux library

-   [[styled-components]{.underline}](https://www.styled-components.com/) -
    > CSS library

-   [[google-maps-react]{.underline}](https://github.com/fullstackreact/google-maps-react) -
    > NPM for utilizing the Google Maps API

**Prerequisites**
-----------------

Before you begin, ensure you have installed the latest version of:

-   [Ruby](https://www.ruby-lang.org/en/)

-   [Rails](https://rubyonrails.org/)

-   [PostgreSQL](https://www.postgresql.org/)

-   [Node.js and npm](https://nodejs.org/en/)

This web app uses the following API keys from:

-   [[Google Maps Platform
    > API]{.underline}](https://developers.google.com/maps/documentation)

-   [[Yelp Fusion API]{.underline}](https://www.yelp.com/fusion)

**Installing**
--------------

*For information on Backend Installation please click here: [[Study
Spots
Backend]{.underline}](https://github.com/vannida-lim/studyspots-backend)*

Frontend Installation:

-   Clone this repo to your local machine git clone
    > git\@github.com:vannida-lim/studyspots-frontend2.git

-   cd to frontend directory

-   Ensure your Backend API is running at http://localhost:3000/

-   run npm install to install all dependencies

-   run npm start to start server

-   When prompted, ensure Frontend is running at http://localhost:3001

 

 **Models and Component Tree**
-----------------------------------------------
![](media/image2.png){width="6.5in" height="3.111111111111111in"}

![](media/image5.png){width="6.5in" height="1.7361111111111112in"}
