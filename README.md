# Anagram from a wordlist

## Installation

- Node.js/Express server
- Port 3000 configurable in .env

```
# Install dependencies
yarn

# Build server
yarn build

# Start server
yarn start

# Start server in dev mode with nodemon
yarn dev

# Debug server
yarn debug:map
yarn debug

# Test
yarn test

# Lint
yarn lint
```

## Running the application from a browser, postman or curl

- One word
```
http://localhost:3000/crepitus

{"crepitus":["cuprites","pictures","piecrust"]}
```

- Two words
```
http://localhost:3000/crepitus,pates

{"crepitus":["cuprites","pictures","piecrust"],"pates":["paste","peats","septa","spate","tapes","tepas"]}
```

- One unknown word
```
http://localhost:3000/sdfwehrtgegfg

{"sdfwehrtgegfg":[]}
```

- Three words, one being unknown
```
http://localhost:3000/sdfwehrtgegfg,crepitus,pates

{"sdfwehrtgegfg":[],"crepitus":["cuprites","pictures","piecrust"],"pates":["paste","peats","septa","spate","tapes","tepas"]}```

