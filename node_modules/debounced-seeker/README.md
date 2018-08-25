# debounced-seeker

small utility function to move a cursor back and forward
and trigger a callback after some time of inactivity.

### Usage
```javascript
var seeker = require('debounced-seeker');

var seek = seeker(function(offset) {
  // after 100ms of inactivity (seek-function
  // not getting called) this callback gets
  // triggered. The Cursor gets resetted to 0
  // afterwards.

  console.log(offset); // 2
}, 100);

// cursor is 0 initialy

seek(1); // cursor: 1
seek(1); // cursor: 2
seek(1); // cursor: 3
seek(-1); // cursor: 2
```

### Installation

`npm install debounced-seeker`

## License
MIT
