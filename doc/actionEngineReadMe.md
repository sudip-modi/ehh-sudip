actionEngine is a library that executes a defined actionFlow json object, when called via a method  of actionEngine Class.

a actionFlow can have a single condition or multiple condition with operators  | and | or | not.
Unlike many other library's and framework, it's an unopinionated class of library.

task = {
    method:get
    entity:{

    }

}

Task queues vs microtasks

Promise callbacks are handled as a Microtask whereas callbacks are handled as Task queues with setTimeout().

In Lay man terms, it'a  JavaScript promise Wrapper around every execution of registered method.

it processes every requests in 2 manner.
1. Sequentially
2. Parrarely.
