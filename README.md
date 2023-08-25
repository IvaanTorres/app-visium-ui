# App Visium UI 

## Installation
### Development environment
```bash
npm run docker:local:dev
```
### Staging environment
```bash
npm run docker:local:staging
```

## Things that can be improved
- Make the form workflow more flexible in order to be able to comunicate between them more easily since the fields are based using their on internal state. However, this way offers several benefits in terms of readability, testing, comprehension, separation of concerms...
- Use environment variables for docker containers to improve in terms of security and flexibility.
- To be able to share the node_modules folder with the development docker container in order to improve the speed of development and flexibility. In the case of staging and production environments, that's not neccessary since it's not for development purposes as well as making focus on security (expose the container may create security leaks)