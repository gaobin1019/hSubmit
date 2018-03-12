const express = require('express');
var storage = require('./storage');
var bodyParser = require('body-parser');
var _ = require('underscore');

const app = express();

// Add POST request parsing for message bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Entity functions
function isValid(entity, obj) {
  if (! _.isUndefined(obj.id) && ! _.isFinite(obj.id)) {
    console.log('Id validation failed', obj.id);
    return false;
  }

  return _.all(_.pairs(entity).map(function(item) {
    var name = item[0], validate = item[1];
    var ret = validate(obj[name]);
    if (! ret) {
      console.log('Validation failed for field %s, value: %s', name, obj[name]);
    }
    return ret;
  }));
}

function getFields(entity, obj) {
  return _.pick(obj, function(v, k) {
    return _.has(entity, k);
  });
}

// REST Endpoint: /api/list
// CRUD actions for list
var listApiRouter = express.Router();
app.use('/api/lists', listApiRouter);

// LIST_FIELDS: names of valid entity fields mapped to functions for validating
// contents of fields.
var LIST_FIELDS = {
  name: function(name) {
    return name && _.isString(name) && name.length;
  },
  pos: _.isNumber,
  cards: function(cards) {
    return ! cards || (_.isArray(cards) && _.all(cards, _.isString));
  }
};

// GET /api/lists Get all lists
listApiRouter.get('/', function(req, resp, next) {
  var result = storage.getAll();

  resp.send(result);
});

// GET /api/lists/:id Get one list
listApiRouter.get('/:id', function(req, resp, next) {
  var result = storage.getOne('list', parseInt(req.params.id));
  if (result) {
    resp.json(result);
  } else {
    resp.status(404).end();
  }
});

// POST /api/lists create new list
listApiRouter.post('/', function(req, resp, next) {
  console.log(req.body);
  var fields = getFields(LIST_FIELDS, req.body);
  fields.pos = parseInt(fields.pos);
  if (! isValid(LIST_FIELDS, fields)) {
    resp.status(400).end();
  } else {
    console.log('Create list', fields);
    resp.json(storage.upsert('list', fields));
  }
});

// POST /api/lists/:id Update existing list
listApiRouter.post('/:id', function(req, resp, next) {
  var fields = getFields(LIST_FIELDS, req.body);
  fields.pos = parseInt(fields.pos);
  if (! isValid(LIST_FIELDS, fields)) {
    resp.status(400).end();
  } else {
    console.log('Update list', fields);
    resp.json(storage.upsert('list', fields));
  }
});

app.post('/api/sync',function(req,res) {
  try {
    const clientState = req.body.clientState;
    storage.sync(clientState);

    res.send('sync with server success');
  } catch (e) {
    res.status(400).end('sync failed');
  }
});


const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Expresssss' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));