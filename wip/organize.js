const fs = require('fs');

const ABANDONED = 'abandoned';
const ALWAY_LISTEN = 'alwaysListen';
const SOMETIMES_LISTEN = 'sometimesListen';
const STARTED_LISTENING = 'startedListening';
const TO_CHECKOUT = 'toCheckout';
const USE_TO_LISTEN = 'useToListen';

function readContents(filepath) {
  return fs.readFileSync(filepath).toString().split(/\n/);
}

function createEntries(path, category) {
  return readContents(path).map((str) => {
    const data = parseLine(str);

    return { ...data, category }
  });
}

function parseLine(line) {
  const matches = line.match(/<a href="(.*)">(.*)<\/a>/);
  const [_, url, name] = matches;

  return { name, url };
}

function run() {
  const abandonedHtml = createEntries('./wip/abandoned.html', ABANDONED);
  const always = createEntries('./wip/always.html', ALWAY_LISTEN);
  const checkout = createEntries('./wip/checkout.html', TO_CHECKOUT);
  const sometimes = createEntries('./wip/sometime.html', SOMETIMES_LISTEN);
  const started = createEntries('./wip/started.html', STARTED_LISTENING);
  const useTo = createEntries('./wip/useTo.html', USE_TO_LISTEN);

  const collection = [...abandonedHtml, ...always, ...checkout, ...sometimes, ...started, ...useTo];

  console.log(collection.length)

  fs.writeFileSync('./wip/output.js', `${JSON.stringify(collection)}`);
}

run();
