// window.getGliaContext = function() {
//   // const queryString = window.location.search;
//   // const urlParams = new URLSearchParams(queryString);
//   // const externalSessionId = urlParams.get('external_session_id');
//   const externalSessionId = 'my-unique-token-123'
//   return {
//     sessionId: externalSessionId
//   };
// };

// window.getGliaContext = function() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve({sessionId: 'some-token-async'})
//     }, 3000);
//   })
// }

// if (window.location.href.includes('netlify')) {
//   document.querySelector('body').style.background = 'black'
// }