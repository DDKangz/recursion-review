// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // checks

  // let result =;
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  
  if (obj === null) {
    return 'null';
  }
  
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let result = [];
    if (obj.length === 0) {
      return '[]';
    }
    for(let i = 0 ; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '['+result.toString()+']';
  }

  if (typeof obj === 'object') {
    let result = {};
    if (obj === {}) {
      return '{}';
    }
    for(let key in obj) {
      if(typeof obj[key] === 'function' || typeof obj[key] === undefined) {
         continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));   
    }
    return '{'+result.toString()+'}';
  }

  // if(typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'string') {
  //   return obj.toString();
  // }
   
  // if (typeof obj === 'string' ) {
  //   return '"' +obj + '"'
  // }
  
  // return ''+obj

  
  
 //


  
};
//we need outcome to turn obj into a string