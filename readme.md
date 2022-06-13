# Win32 Admin Check

`is-win32-admin` is an NPM package to check if node is running on an admin elevated win32 platform (Windows).

## Installation

NPM:

```sh
npm i is-win32-admin
```

yarn:

```sh
yarn add is-win32-admin
```

## Usage

This returns `Promise<boolean>` which is true if the process is running as an admin and throws an error if the device is not running on windows

```ts
import isAdmin from "is-win32-admin";

isAdmin()
  .then((admin) => {
    if (admin) {
      //... do admin stuff
    }
  })
  .catch((err) => {
    // errors out when not running on win32
  });
```

## Contributing

Feel free to make a pull request

## License

[MIT](LICENSE)
