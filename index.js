var bboxed = require('bboxed');
var fs = require('fs');

var telTag = {
  open: function(token, options) {
    var phone = token.arguments.tag === undefined ?
                token.interior :
                token.arguments.tag

    return '<a href="tel:' + phone + '">';
},
  close: '</a>'
};

var emailTag = {
  open: function(token, options) {
    var email = token.arguments.tag === undefined ?
                token.interior :
                token.arguments.tag

    return '<a href="mailto:' + email + '">';
},
  close: '</a>'
};

var pTag = {
  open: function(token, options) {
    var alignment = token.arguments.tag ?
                    ' style="text-align:' + token.arguments.tag + '"':
                    '';

    return '<p' + alignment + '>';
},
  close: '</p>'
};

var h1Tag = {
  open: function(token, options) {
    var alignment = token.arguments.tag ?
                    ' style="text-align:' + token.arguments.tag + '"':
                    '';

    return '<h1' + alignment + '>';
},
  close: '</h1>'
};

var h2Tag = {
  open: function(token, options) {
    var alignment = token.arguments.tag ?
                    ' style="text-align:' + token.arguments.tag + '"':
                    '';

    return '<h2' + alignment + '>';
},
  close: '</h2>'
};

var uTag = {
  open: '<u>',
  close: '</u>'
}

var brTag = {
  open: '<br />'
}
// Read function
fs.readFile('bbcode.txt', 'utf8', function(err, data) {
  if (err) {
    console.log('ERROR', err, data);
  } else {

    // #########################################################################
    // Conversion

    bboxed.addTag('tel', telTag);
    bboxed.addTag('email', emailTag);
    bboxed.addTag('h1', h1Tag);
    bboxed.addTag('h2', h2Tag);
    bboxed.addTag('p', pTag);
    bboxed.addTag('br', brTag);
    bboxed.addTag('u', uTag);

    var html = bboxed(data);

    // #########################################################################
    // Write function after conversion
    fs.writeFile('html.txt', html, 'utf8', function(err) {
      if (err) {
        console.log('ERROR', err);
      } else {
        console.log('It\'s saved!');
      }
    });
  }
})
