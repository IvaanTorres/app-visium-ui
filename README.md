# App Visium UI 

## Installation
### Development environment
```bash
npm run docker:run:dev
```
### Staging environment
```bash
npm run docker:run:staging
```

### Production environment
```bash
npm run docker:run:prod
```

## Things that can be improved
- Make the form workflow more flexible in order to be able to comunicate between them more easily since the fields are based using their on internal state. However, this way offers several benefits in terms of readability, testing, comprehension, separation of concerms...
- To be able to share the node_modules folder with the development docker container in order to improve the speed of development and flexibility. In the case of staging and production environments, that's not neccessary since it's not for development purposes as well as making focus on security (expose the container may create security leaks)
- The sidebar has been done manually. Whenever there are more list items or it becomes dynamic, it would be a good choice to create a config file where all the list items are set.
- Make the sidebar items to change their style while they're active or not
- Load the settings groups dynamically. It would be a good improvement to restructure the DB settings table so we can fetch the groups individually and display them separetaly.
- Add info messages using snacks, etc.
- Instead of using just 1 JWT, use 2 (Access token and refresh token):
    - The refresh token is stored in db and has the ability to let generate access tokens. It can be revoked manually (during logouts, for example). It is stored in the client side part as a httpOnly secure lax/strict cookie so we can check it on server side automatically and don't put it in danger.
    - The access token is stored if possible in memory so everytime we refresh the page, a new acces token will be requested. This is a short life time token (15 min for example unlike the refresh one, which can be much longer).
- Add a CSRF token with double token system:
    - While we store the refresh token securely in a httponly cookie, there can be problems regarding the CSRF attacks. Using a random string token as CSRF token, we attach it to the header of the request and the server will validate if it corresponds with the one which is stored in a httponly cookie as is sent automatically (Double token system).