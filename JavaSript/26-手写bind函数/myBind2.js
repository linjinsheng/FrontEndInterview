  //  https://www.bilibili.com/video/BV1dB4y1W7gS/?spm_id_from=333.337.search-card.all.click&vd_source=7f0b239b468644acab41441987770602
  
  var name = 'window';

  function person(){
    console.log(this.name);
    console.log(arguments);
  }

  var teacher = {
    name:"hello"
  }

  // Function.prototype.myBind = function(obj, ...args1){
  //   return (...args2)=>{
  //     this.apply(obj, args1.concat(args2));
  //   }
  // }

  Function.prototype.myBind = function(obj, ...args1){
    return (...args2)=>{
      this.apply(obj, [...args1, ...args2]);
    }
  }

  var fn = person.myBind(teacher, 1, 2);
  fn(3, 4);