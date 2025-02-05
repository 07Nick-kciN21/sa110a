const M = {}
var d = new Date();
M.seed = function(s) {
  return function() {
      s = Math.sin(s) * 10000+d.getTime();
      return s - Math.floor(s);
  };
};

// usage:
var random1 = M.seed(42);
var random2 = M.seed(random1());
M.random = M.seed(random2());

export default M;
