var seeker = function(cb, ms) {
  var cursor = 0;
  var timer;
  if (typeof ms === 'undefined') {
    ms = 100;
  }

  return function(num) {
    cursor += num;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      cb(cursor);
      cursor = 0;
    }, ms);
    return cursor;
  };
};

module.exports = seeker;
