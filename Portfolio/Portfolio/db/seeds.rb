# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create([
  {name: "Battlechat", img: "/images/Battlechat.png", tech: "Ruby On Rails 5, ActionCable, Redis, Postgresql", description: "Battlechat is built in the new Ruby on Rails 5 and uses the new feature of ActionCable. It is a real-time chatroom and multiplayer game with matchmaking, login/logout/signup, and user profiles. The chatroom messages are also saved to a database, so it is persistent across sessions. The game also has sound, animations, and a text box to describe attacks and effects

NOTE: Will not start the game unless there are 2 players!", link: "http://104.131.48.188/"},
  {name: "Commuter Assistance Program", img: "/images/CAP.png", tech: "Ruby On Rails, Bootstrap, Google Maps API, Twilio API, cookies, Postgresql", description: "CAP is a group project working with a Product manager. Built in Ruby on Rails with Bootstrap. APIs used include Google Maps, Google Distance Matrix, and Twilio. Project features signup/login with password (encrypted in database) and cookies, add/save/edit locations to database, ability to text your ETA.
    
NOTE: Current live version calculates all distances as originating from General Assembly NYC.", link: "http://eta-tracker-ga-project-3.herokuapp.com/"},
  {name: "Blue Skies Forum", img: "/images/BlueSkiesForum.png", tech: "Sinatra, Bcrypt, Gravatar, Skeleton, Postgresql", description: "A forum with login, Bcrypted passwords. Listed top topics, upvotes, thread/comment structure.  Gravatar is supported, ability to edit/create posts/topics requires login, as well as upvote. Timestamped posts as well. Skeleton used for responsiveness.", link: "http://ga-project2-forum-jchan.herokuapp.com/"},
  {name: "Missile Command", img: "/images/MissileCommand.png", tech: "JQuery, JS, HTML, CSS ", description: "A web version of the classic game Missile Command. Features: background music, sound effects, local storage of high scores, extensive use of css transitions and jQuery, multiple game modes, etc.", link: "http://chimerus.github.io/"}
  ]) 
# for adding more in the future
# {name: "", img: "", tech: "", description: "", link: ""},