# ed-notes

📝 Un module Node.js permettant de communiquer facilement à l'API Notes d'EcoleDirecte.

Utilise simplement axios.

# Installation

```zsh
> npm install ed-notes
```

# Usage

```js
import edNotes from "ed-notes";

console.log(await edNotes("vrai-utilisateur", "vrai-motdepasse"));
// Output expecté: {code: 200, token: "vrai-token", host: "HTTP66", data: {...}}
```
