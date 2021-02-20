const fastify = require("fastify");
const app = fastify();

const { Engine } = require("json-rules-engine");

let engine = new Engine();

engine.addRule({
    conditions: {
        every1: [
            {
                operator: "equal",
                input: {
                    arg1: 'arg1',
                    arg2:'arg2'
                }
                
            }
        ]
    },
    onSuccess() {
        console.log('on success called')
    },
    onFailure() {
        console.log('on failure called')
    },
    output: {
        type: "message",//[event,self.output.key,self.output.values,]
        params: {
            data: "hello-world!"
        }
    }
});

const facts = { temperature: 100 };

engine
    .run(facts)
    .then(results => {
        results.events.map(event => console.log('value', event.params.data));
    })
    .catch((error) => console.log('err is', error));

app.listen(3000, () => {
    console.log("Your app is running");
});