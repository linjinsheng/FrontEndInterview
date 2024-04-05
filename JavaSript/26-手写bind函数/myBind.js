  var name = 'window';

  function person(){
    console.log(this.name);
    console.log(arguments);
  }

  var teacher = {
    name:"hello"
  }

  Function.prototype.myBind = function(obj){
    var self = this;
    var args1 = Array.prototype.slice.call(arguments, 1);
    var fn = function(){
      var args2 = Array.prototype.slice.call(arguments);
      self.apply(this instanceof fn ? this : obj, args1.concat(args2));
    }
    return fn;
  }

  var fn = person.myBind(teacher, 1, 2);
  fn(3, 4);