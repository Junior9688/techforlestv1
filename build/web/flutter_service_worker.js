'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "78e96d85786ea7faf20624004fe4e06d",
"assets/AssetManifest.bin.json": "0fed5e0cfb909e753465e6baff98858c",
"assets/AssetManifest.json": "bf7c5f76808d823bfd0ba650a1345abb",
"assets/assets/fonts/NimbusSans/NimbusSanL-Reg.otf": "bc07f55513c47048cea8327a9cf2459b",
"assets/assets/img/add-image-placeholder.png": "6dc83dff51f8b11b65c97fc532a1f495",
"assets/assets/img/address.png": "68f2bd5401a5f41444d68017a99540d3",
"assets/assets/img/add_image.png": "6a12c9813b2c41582357005e60f16df4",
"assets/assets/img/bag.png": "d48de8562d8f94a7b7c7868864a94b6b",
"assets/assets/img/burger1.png": "5a664f35a07fff73f4d3d6937ee994d3",
"assets/assets/img/burger2.png": "927750892c0d6539da9c79d1d058ebc8",
"assets/assets/img/delivery.png": "e80316d006e91ff02f3b49e61a0051c0",
"assets/assets/img/delivery2.png": "43ccf7192fd3111a4291877fa3722d73",
"assets/assets/img/empresa.json": "8013af8a3f428865a7029aa9ae9cf96e",
"assets/assets/img/google_maps.png": "b0a3821414a51edd7ddec4e7d4133cba",
"assets/assets/img/hamburguesa.png": "06a6c062b40c8cc7b12628f0129bebce",
"assets/assets/img/home.png": "ac8e7474fc058e7163aa94f344605e84",
"assets/assets/img/logo_app.png": "23e19188e1724a928ae755d30c155a97",
"assets/assets/img/menu.png": "321ece63bc12f488fa318049f3d52353",
"assets/assets/img/my_location.png": "68f2bd5401a5f41444d68017a99540d3",
"assets/assets/img/no-image.jpg": "335ceba57475f3c45f0d82f04b987bfa",
"assets/assets/img/no-image.png": "5975d96b60a6337d4319ca9900f2bc2f",
"assets/assets/img/no_items.png": "4a7779da96faa2ab18f0550d5d581ed7",
"assets/assets/img/pizza.png": "68a81e262bbe2212e743a7052cd782df",
"assets/assets/img/pizza2.png": "3e35608bd5bbbe03e268acf2d26ab8bb",
"assets/assets/img/products/relojes/H6.png": "d56f5ef0041d5650854a06f4ce114190",
"assets/assets/img/products/relojes/reloj.png": "dc924f66d7042fd3ff09b6313ce5dc7a",
"assets/assets/img/products/relojes/relojH9.png": "70911e6a6ec635a4e8d8975442850b87",
"assets/assets/img/profile.jpg": "569132ee1f3a3b0f0805855c80caac71",
"assets/assets/img/taxi_icon.png": "6e364ca218f6677f6a46b14b54f5e85e",
"assets/assets/img/user_profile.png": "8ca8bb8907de3ebe1b2d0f8a6464c780",
"assets/assets/img/user_profile_2.png": "43908028e58b259f95f47d4bef770b51",
"assets/assets/img/waze.png": "0585ff0faa0384d967478c5446fba558",
"assets/assets/json/delivery.json": "0638cab7486e4012a2c5c9ca81dfe654",
"assets/assets/json/logo.json": "2cb92357968e1d81967f17c61906dd45",
"assets/assets/json/logo_simple.json": "3daeb1b328169357efd6190c427d313b",
"assets/FontManifest.json": "8fc70baff74036f27516391ab88312cb",
"assets/fonts/MaterialIcons-Regular.otf": "0e6a5b64848961df11276360f160dfd9",
"assets/NOTICES": "d40a88e91b129b73afd5ec9891629a87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "fac76906ea2223a52b2d4cd7d08d6530",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbaf2c3a991aec04e5ca163762ebd8bf",
"/": "fbaf2c3a991aec04e5ca163762ebd8bf",
"main.dart.js": "6a5b73b01e0cbd5fe32e4746a083e633",
"manifest.json": "ac2ec4b24bd163d2402406eff8798c24",
"version.json": "ebb208ba5ba403e7a0ec11f45370e7ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
