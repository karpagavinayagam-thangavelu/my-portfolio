// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/my-portfolio/assets/',
          '/my-portfolio/assets/images/rui.svg',
          '/my-portfolio/assets/images/figma.svg',
          '/my-portfolio/assets/images/react.svg',
          '/my-portfolio/assets/images/redux.svg',
          '/my-portfolio/assets/images/ocjp.png',
          '/my-portfolio/assets/images/rwd.png',
          '/my-portfolio/assets/images/js-ds.png',
          '/my-portfolio/assets/images/gadgets.png',
          '/my-portfolio/assets/images/angular.png',
          '/my-portfolio/assets/images/nx.png',
          '/my-portfolio/assets/images/stenciljs.png',
          '/my-portfolio/assets/images/materialui.png',
          '/my-portfolio/assets/images/bootstrap.png',
          '/my-portfolio/assets/images/developer-icon.png',
        ]);
      })
    );
  });
  
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/my-portfolio/assets/images/developer-icon.png',);
        });
      }
    }));
  });