# `JSONStore` (Socket Supply Module)

Provides simple key-val storage of JSON-compatiable values, backed by the device's filesystem (via [Socket Supply's runtime](https://github.com/socketsupply/socket) `fs` module).

This module provides an API that's similar to the [browser `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), except that it operates asynchronously (because of the underlying file system operation asynchrony). Other than the use of promises (`await`, etc), it should be familiar if you've worked with `localStorage` before.

## JSON Serialization/Deserialization

One additional important difference between `JSONStore` and `localStorage`: non-primitive (object) values are automatically JSON serialized/de-serialized; the whole data store is serialized to a JSON string, written to a text file (`./.store.json`).

As such, `JSONStore.setItem('customer', { id: 123, name: '..' })` works without needing to first serialize the object value with `JSON.stringify(..)`. Likewise, `JSONStore.getItem('customer')` will return the already deserialized object, without needing to use `JSON.parse(..)`.

## API

`getItem(name)`: returns a promise for the value (if any) in the store that's associated with `name` property name (*string*); resolves to `undefined` if not found

`setItem(name, value)`: sets a `value` value (JSON-compatible) at the `name` property in the store; returns a promise, with `true` on success or `false` otherwise

`removeItem(name)`: removes the property named `name` (if any) from the store; returns a promise, with `true` on success or `false` otherwise

`clear()`: removes all entries from the store; returns a promise, with `true` on success or `false` otherwise

## Usage

```js
import JSONStore from `@socketsupply/json-store`

JSONStore.setItem('zipcode', 78739)     // Promise<true>

JSONStore.getItem('zipcode')   // Promise<78739>

JSONStore.removeItem('zipecode')    // Promise<true>

JSONStore.getItem('zipcode')    // Promise<undefined>

JSONStore.setItem('customer', { id: 123, name: 'Kyle' })    // Promise<true>

JSONStore.getItem('customer')   // Promise<{ id: 123, name: 'Kyle' }>

JSONStore.clear()   // Promise<true>
```

## ESM

This module is provided in ES6-compatible ESM. It exports both a default export of the `JSONStore` object, as shown above, as well as each API member (`setItem(..)`, `getItem(..)`, etc) as a named export.

## License

All code and documentation are (c) 2023 Socket Supply Co and released under the MIT License. A copy of the MIT License [is also included](LICENSE.txt).
