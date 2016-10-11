
var ParseAdapter = function(){};

ParseAdapter.prototype.build = function(Model, attributes){
  return new Model(attributes);
};

ParseAdapter.prototype.get = function(doc, attr, Model){
  return doc.get(attr);
};

ParseAdapter.prototype.set = function(props, doc, Model){
  return doc.set(props);
};

ParseAdapter.prototype.save = function(doc, Model, callback){

  doc.save()
  .then(function(){
    callback();
  })
  .catch(function(err){
    callback(err);
  });
};

ParseAdapter.prototype.destroy = function(doc, Model, callback){
  doc.destroy()
  .then(function(){
    callback();
  })
  .catch(function(err){
    callback(err);
  });

};

exports.ParseAdapter = new ParseAdapter();
