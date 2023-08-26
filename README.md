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
- The sidebar has been done manually. Whenever there are more list items or it becomes dynamic, it would be a good choice to create a config file where all the list items are set.
- Make the sidebar items to change their style while they're active or not
- Load the settings groups dynamically. It would be a good improvement to restructure the DB settings table so we can fetch the groups individually and display them separetaly.
- Create new variants of modals, links, etc as it's done with the buttons (info, warning, success, danger...)