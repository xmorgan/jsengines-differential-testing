assert = function(is_true){if (!(is_true)) {throw new Error("Test failed")}} 
// with-test

var a;

with(Math) a=PI;

var b = { get_member : function() { return this.member;}, member:41 };

with(b) {
var a;
  let a = get_member(); //<--- a is local for this block
  var c = a+1;
}


result = a == Math.PI && c == 42;
assert(result);
