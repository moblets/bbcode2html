var environment = 'LOCAL';

var mysql      = require('mysql');
var localConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'remote',
  password : 'helio',
  database : 'portal'
});

var codes = [27, 33];
// var codes = [2823897, 2823907, 2823911, 2823937, 2823955, 2824003, 2824025, 2824047, 2824051, 2824095, 2824109, 2824119, 2824129, 2824161, 2824163, 2824195, 2824227, 2824231, 2824239, 2824243, 2824265, 2824301, 2824371, 2824471, 2824493, 2824527, 2824577, 2824603, 2824621, 2824641, 2824677, 2824787, 2824797, 2824819, 2824827, 2824891, 2824901, 2824919, 2824939, 2825049, 2825135, 2825159, 2825177, 2825197, 2825201, 2825351, 2825415, 2825425, 2825445, 2825463, 2825555, 2825589, 2825597, 2825615, 2825627, 2825645, 2825681, 2825691, 2825735, 2825821, 2825841, 2825853, 2825855, 2825873, 2825877, 2825931, 2825937, 2825939, 2825941, 2825981, 2826003, 2826143, 2826161, 2826187, 2826301, 2826309, 2826323, 2826325, 2826363, 2826365, 2826379, 2826419, 2826471, 2826475, 2826479, 2826481, 2826483, 2826499, 2826517, 2826559, 2826629, 2826631, 2826645, 2826685, 2826729, 2826741, 2826755, 2826765, 2826771, 2826785, 2826793, 2826865, 2826933, 2826937, 2827039, 2827103, 2827143, 2827151, 2827165, 2827183, 2827185, 2827199, 2827217, 2827219, 2827231, 2827243, 2827245, 2827263, 2827267, 2827275, 2827285, 2827301, 2827327, 2827365, 2827395, 2827425, 2827509, 2827571, 2827689, 2827691, 2827701, 2827719, 2827737, 2827751, 2827759, 2827765, 2827769, 2827803, 2827833, 2827867, 2827895, 2827915, 2827917, 2827931, 2827937, 2827939, 2827963, 2827997, 2828021, 2828049, 2828073, 2828083, 2828097, 2828155, 2828157, 2828215, 2828235, 2828247, 2828303, 2828305, 2828307, 2828361, 2828397, 2828405, 2828427, 2828447, 2828455, 2828513, 2828529, 2828543, 2828553, 2828603, 2828611, 2828613, 2828633, 2828645, 2828689, 2828737, 2828783, 2828785, 2828855, 2828899, 2828903, 2828917, 2828927, 2828935, 2828939, 2828941, 2828957, 2828973, 2828979, 2828985, 2829019, 2829027, 2829045, 2829071, 2829079, 2829101, 2829115, 2829123, 2829125, 2829135, 2829159, 2829177, 2829179, 2829235, 2829273, 2829275, 2829281, 2829299, 2829309, 2829323, 2829347, 2829393, 2829413, 2829415, 2829429, 2829435, 2829447, 2829461, 2829475, 2829525, 2829625, 2829627, 2829637, 2829711, 2829713, 2829723, 2829771, 2829795, 2830031, 2830035, 2830055, 2830111, 2830211, 2830247, 2830271, 2830287, 2830315, 2830349, 2830363, 2830367, 2830373, 2830415, 2830423, 2830557, 2830573, 2830585, 2830597, 2830623, 2830689, 2830717, 2830759, 2830767, 2830769, 2830773, 2830797, 2830863, 2830867, 2830873, 2830875, 2830891, 2830911, 2830953, 2830989, 2831005, 2831009, 2831077, 2831091, 2831277, 2831293, 2831415, 2831427, 2831433, 2831463, 2831493, 2831537, 2831543, 2831555, 2831595, 2831623, 2831663, 2831721, 2831725, 2831743, 2831755, 2831865, 2831899, 2831909, 2831931, 2831939, 2831989, 2832019, 2832037, 2832101, 2832125, 2832139, 2832183, 2832203, 2832213, 2832225, 2832231, 2832259, 2832285, 2832293, 2832369, 2832491, 2832547, 2832551, 2832569, 2832591, 2832593, 2832599, 2832665, 2832719, 2832723, 2832783, 2832789, 2832791, 2832793, 2832807, 2832897, 2832919, 2832945, 2832953, 2832963, 2832977, 2832987, 2833075, 2833079, 2833083, 2833125, 2833165, 2833173, 2833175, 2833225, 2833241, 2833247, 2833273, 2833305, 2833311, 2833335, 2833357, 2833387, 2833431, 2833497, 2833503, 2833593, 2833597, 2833619, 2833673, 2833695, 2833719, 2833739, 2833745, 2833757, 2833759, 2833767, 2833771, 2833775, 2833777, 2833779, 2833781, 2833803, 2833831, 2833849, 2833881, 2833925, 2833927, 2833929, 2833935, 2833949, 2834023, 2834069, 2834117, 2834145, 2834315, 2834343, 2834349, 2834369, 2834459, 2834537, 2834635, 2834715, 2834725, 2834809, 2834823, 2835055, 2835083, 2835101, 2835123, 2835179, 2835259, 2835269, 2835295, 2835371, 2835375, 2835419, 2835487, 2835541, 2835553, 2835605, 2835643, 2835667, 2835719, 2835887, 2835905, 2835913, 2835935, 2835987, 2836069, 2836225, 2836265, 2836267, 2836283, 2836305, 2836571, 2836583, 2836636, 2836706, 2836712, 2836801, 2836803, 2836805, 2836807, 2836809, 2836811, 2836813, 2836931, 2836949, 2837046, 2837054, 2837111, 2837185, 2837201, 2837219, 2837221, 2837239, 2837301, 2837311, 2837363, 2837389, 2837529, 2837571, 2837647, 2837767, 2837775, 2837937, 2837939, 2837941, 2837969, 2837991, 2838065, 2838067, 2838069, 2838071, 2838075, 2838077, 2838079, 2838081, 2838083, 2838223, 2838225, 2838283, 2838341, 2838413, 2838455, 2838497, 2838539, 2838581, 2838711, 2838739, 2838922, 2839004, 2839010];


var request = require('request');
var http = require('http');
var fs = require('fs');

var apiUrl = function(code) {
  if (environment === 'LOCAL') {
    return 'http://proxy.universo2.local/moblets/' + code + '.json';
  } else if (environment === 'DEV') {
    return 'http://proxy.dev.universo.mobi/moblets/' + code + '.json'
  } else {
    return 'http://proxy.universo.mobi/moblets/' + code + '.json';
  }
}

var getData = function(url, callback){
  var response = '';

  http.get(url, function(res) {
    res
      .on("data", function(chunk) {
        response += chunk;
      })
      .on('end', function() {
        console.log(
          '[http-helper.getData]',
          'success reaching url'
        );
        callback(false, response);
      })
      .on('error', function(e) {
        /*
         * TODO: deal with this error
         */
        console.error(
          '[http-helper.getData]',
          'error reaching url',
          e.message
        );
        callback(
          true,
          e
        );
      });
  });
};

var fillItems = function(items, responseItems, start, end) {
  for (var i = start; i < end; i++) {
    items[i] = {
      id: responseItems[i].item.id,
      title: responseItems[i].item.title,
      description: responseItems[i].item.description_html
    }
  }
}

var getCodeDataPages = function (code, page, items, callback) {
  items = items === null ? [] : items;

  var pg = '?page=' + page;
  page++;

  var url = apiUrl(code) + pg;

  getData(url, function(err, response) {
    response = JSON.parse(response);

    if (err) {
      console.log(err, response);
      callback(true, response)
    } else {
      // console.log(response);
      var responseItems = response.items === undefined ? [] : response.items;
      var start = items.length;
      var end = items.length + responseItems.length;
      fillItems(items, responseItems, start, end);

      // If the code has more pages, fill the items object and call itself
      if (response.isLastPage === false) {
        getCodeDataPages(code, page, items, callback);
      } else {
        var normaEntry = {
          code: code,
          mobletId: 'm-simple-list',
          listStyle: "layout-1",
          itemStyle: "layout-1",
          instanceData: {
            items: items
          }
        }
        callback(false, normaEntry)
      }
    }
  })
}
var getList = function(codes, i) {
  var code = codes[i];
  i++;

  getCodeDataPages(code, 1, null, function(err, normaEntry) {
    if (err) {
      console.log(err);
    } else {
      // normaEntry is the result
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(normaEntry.instanceData);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log('------');

      if (i < codes.length) {
        getList(codes, i);
      }
    }
  });
}

getList(codes, 0);
// getCodeDataPages(33, 1, null, function(err, normaEntry) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(normaEntry.instanceData);
//   }
// })

// var getList = function (codes, i, page) {
//   page = page === undefined ? 1 : page;
//   var pg = '?page=' + page;
//   page++;
//
//   var code = codes[i];
//   var url = apiUrl(code) + pg;
//
//   getData(url, function(err, response) {
//     if (err) {
//       console.log(err, response);
//     } else {
//       if (response.isLastPage === false) {
//         getList(codes, i, page);
//       } else {
//         i++;
//
//         var responseItems = response.items;
//         var items = [];
//         for (var i = 0; i < responseItems.length; i++) {
//           items[i] = {
//             id: responseItems.id,
//             title: responseItems.title,
//             description: responseItems.description_html
//           }
//         }
//
//         var normaEntry = {
//           code: code,
//           mobletId: 'm-simple-list',
//           listStyle: "layout-1",
//           itemStyle: "layout-1",
//           instanceData: {
//             items: items
//           }
//         }
//         console.log(normaEntry);
//
//         if (i < codes.length) {
//           getList(codes, i);
//         }
//       }
//     }
//   })
// };
