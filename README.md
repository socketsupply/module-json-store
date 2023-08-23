# `JSONStore` (Socket Supply Module)

Provides simple key-val storage of JSON-compatiable values, backed by the device's filesystem (via [Socket Supply's runtime](https://github.com/socketsupply/socket) `fs` module).

This module provides an API that's compatible with the [browser `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), but automatically serializes the store's contents as a JSON string for text file storage (`./.store.json`).

## API

`getItem(name)`: retrieves the value (if any) in the store that's associated with `name` property name (*string*); returns `undefined` if not found

`setItem(name, value)`: sets a `value` value (JSON-compatible) at the `name` property in the store; returns `true` on success, or `false` otherwise

`removeItem(name)`: removes the property named `name` (if any) from the store; returns `true` on success, or `false` otherwise

`clear()`: removes all entries from the store; returns `true` on success, or `false` otherwise

## Usage

```js
import JSONStore from `@socketsupply/json-store`

JSONStore.setItem('zipcode',78739)

JSONStore.getItem('zipcode')   // 78739

JSONStore.removeItem('zipecode')

JSONStore.clear()
```

## ESM

This module is provided in ES6-compatible ESM. It exports both a default export of the `JSONStore` object, as shown above, as well as each API member (`setItem(..)`, `getItem(..)`, etc) as a named export.

## License

All code and documentation are (c) 2023 Socket Supply Co and released under the MIT License. A copy of the MIT License [is also included](LICENSE.txt).
