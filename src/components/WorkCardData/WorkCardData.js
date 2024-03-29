// import  addFriend from "../../images/icons/add-friend.svg"
// import  deleteFriend from "../../images/icons/delete-friend.svg"
// import  email from "../../images/icons/email-icon.svg"
// import  exit from "../../images/icons/exit-btn.svg"
// import  friends from "../../images/icons/friends_1.svg"
// import  GH from "../../images/icons/GH.svg"
// import  hamburger from "../../images/icons/hamburger.svg"
// import  home from "../../images/icons/home-icon.svg"
// import  home2 from "../../images/icons/home-icon2.svg"
// import  LIG from "../../images/icons/LI-G_1.svg"
// import  LIG2 from "../../images/icons/LI-G.svg"
// import  LI from "../../images/icons/LI.svg"
// import  logout from "../../images/icons/logout-icon.svg"
// import  phone from "../../images/icons/phone-icon.svg"
// import  user from "../../images/icons/user-icon.svg"
// import  addFriend from "../../images/iconsPng/add-friend.png"
// "cc-bold-mint.png"
// "cc-favicon-128_1.png"
// "cc-favicon-mint.png"
// "cc-favicon-pink-bold.png"
// "cc-favicon-pink.png"
// "cc-favicon-white.png"
// "cc-lg-logo-8.png"
// "cc-logo-8.png"
// "cc-logo.png"
// "cc-white-logo-bold.png"
// "dd-lg.png"
// "delete-friend.png"
// "email-icon.png"
// "exit-btn.png"
// "favicon-lg-pink.png"
// "fntsh-lg.png"
// "fntshd-lg.png"
// "friends_1.png"
// "GH-8.png"
// "hamburger.png"
// "home-icon.png"
// "home-icon2.png"
// "IG-8.png"
// "IG-G-8.png"
// "LI-8.png"
// "LI-G_1-8.png"
// "LI-G-8.png"
// "logout-icon.png"
// "nymin-logo.png"
// "phone-icon.png"
// "skull-small.png"
// "user-icon.png"

const ProjectCardData = [
  {
    imgsrc: "https://media.giphy.com/media/y4iIyVWg0sGgamV6zk/giphy.gif",
    title: "Concert Crew",
    text: "This application helps groups of friends connect over upcoming concerts. It was created with both a front-end and back-end team of Turing students utilizing React, Ruby on Rails, and GraphQL implementing consumption of REST API with upcoming show data. A user is able to log in at the home view. The user will be redirected with React Router to view up upcoming shows. The user is able to select an upcoming show and view show details with map location/navigation. The user is able to navigate to and view upcoming friend's shows and choose to attend each show. The user is able to search for upcoming shows and choose to attend.",
    view: "https://concert-crew.vercel.app/",
    source: "https://github.com/concert-crew/client",
  },
  {
    imgsrc: "https://media.giphy.com/media/xBCLovu3spMFYilkwB/giphy.gif",
    title: "Angular Distance",
    text: "An app that guides users to a luxury space flight reservation experience. This application was built with JavaScript in the React framework. Implemented REST API consumption with planet data and tested with Cypress. The user will visit the landing page and navigate through a journey of user stories displayed with a carousel. The user is able to navigate to a reservations page with React-Router and view planet-shaped buttons to select a planet destination. The user is also able to select a moon that corresponds to the planet. Once, the user has selected a date and destination the user is then re-directed to a page to view a list of their reservations.",
    view: "https://goecha-angular-distance.vercel.app/",
    source: "https://github.com/GOECHA/angular-distance",
  },
  {
    imgsrc: "https://media.giphy.com/media/PQoQebukk8YXsL93q0/giphy.gif",
    title: "Rancid Tomatillos",
    text: "A JavaScript App built in React that consumes a REST API with movie data. The landing page allows a user to view a random featured movie and smaller movie cards organized into accessible carousels. The user is able to select a movie and navigate with React Router to a single movie view. The single movie view displays details and a movie trailer. If there is more than one movie trailer, the user is able to swipe through multiple trailers with their mouse or keyboard.",
    view: "https://rancid-tomatillos-seven.vercel.app/",
    source: "https://github.com/GOECHA/goecha-rancid-tomatillos",
  },
  {
    imgsrc:
      "https://user-images.githubusercontent.com/102189342/200185236-8147fe0a-1246-4017-a214-aed90dfe4cdf.gif",
    title: "NY | Min",
    text: "A JavaScript application built in React-Native and consumption of a REST API of Compliments and Mantras built with Express. This is an application that allows a user to view a random mantra and choose to save the mantra to a list within the application for a daily dose of positive vibes. Icons designed with Adobe Illustrator.",
    view: "https://nymin.vercel.app/",
    source: "https://github.com/GOECHA/nymin",
  },
  {
    imgsrc: "https://media.giphy.com/media/LyAnK9juVlQ0XNHBSX/giphy.gif",
    title: "Ancient Alien Roshambo",
    text: "A game of alien themed rock, paper, scissors in vanilla JavaScript",
    view: "https://goecha.github.io/roshambo/",
    source: "https://github.com/GOECHA/roshambo",
  },
//   {
//       imgsrc: "https://user-images.githubusercontent.com/102189342/191309896-1a19bfc9-3af9-42c6-b562-7bcdc6cce7b6.png",
//       title: "Habitual",
//       text: "A JavaScript application built in React-Native and consumption of a REST API of Compliments and Mantras built with Express. This is an application that allows a user to view a random mantra and choose to save the mantra to a list within the application for a daily dose of positive vibes. Icons designed with Adobe Illustrator.",
//       view: "https://github.com/GOECHA/habitual",
//       source: "https://github.com/GOECHA/habitual"
//   }
];

// const icons = [
//     {
//     iconic: "https://user-images.githubusercontent.com/102189342/200910202-05184daa-52f4-402e-9041-cf1a22ec5ce7.png"
// }
// {
//     icon: {deleteFriend}
// },
//  {
//     icon: {email}
// },
//   {
//     icon: {exit}
// },
//  {
//     icon: {friends}
// },
//  {
//     icon: {GH}
// },
//  {
//     icon: {hamburger}
// },
//  {
//     icon: {home}
// },
//  {
//     icon: {home2}
// },
//  {
//     icon: {LIG}
// },
// {
//     icon: {LIG2}
// },
// {
//     icon: {LI}
// },
// {
//     icon: {logout}
// },
// {
//     icon: {phone}
// },
// {
//     icon: {user}
// }
// ]

export default ProjectCardData;
