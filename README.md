# ed-notes

📝 Un module Node.js permettant de communiquer facilement à l'API Notes d'EcoleDirecte.

Utilise simplement axios.

# Installation

```zsh
> npm install ed-notes
```

# Usage

edNotes fonction

```js
import edNotes from "ed-notes";

console.log(await edNotes("vrai-utilisateur", "vrai-motdepasse"));
// Output expecté: {code: 200, token: "vrai-token", host: "HTTP66", data: {...}}
```

login fonction

```js
import { login } from "ed-notes";

console.log(await login("vrai-utilisateur", "vrai-motdepasse"));
// Output expecté: {code: 200, host: "HTTP66", data: {...}}
```

notes fonction

```js
import { notes } from "ed-notes";

console.log(await notes("vrai-token", "vrai-accountId"));
// Output expecté: {code: 200, token: "vrai-token", host: "HTTP66", data: {...}}
```
