'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d3a1b20eb4b62fb1c74999bed689893f",
".git/config": "716fe6e216ceb7289ebe6d43ac6ea2cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fe5966c48b47c224f50ebac5cf08abf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e01958cb5be162bfa34f7c8dff91b43f",
".git/logs/refs/heads/main": "e01958cb5be162bfa34f7c8dff91b43f",
".git/logs/refs/remotes/origin/HEAD": "be3cc0cda813967857f33d3428160bf0",
".git/logs/refs/remotes/origin/main": "42ade06b41ef5bd50ce9bec14274b175",
".git/objects/01/45bd0a2e9d6845323d077d8400afdcfa180b41": "4ac96ee0c8efa91928c9e59b8d70eb66",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/0a0295b884189298824e47f15ec0e0cd0dead8": "aff84dee88635cedc83b6b6bd69baf7e",
".git/objects/09/6040ae32eacddc927da835e8b9a842fc2d439b": "03faef3c4cd5549c4705c3122b7959c7",
".git/objects/0f/3453d89defb9ce52a182d13a17693193202993": "fc028da5753eb1a1ae710bccb3f9990a",
".git/objects/12/c75296ab6a4569e7c50e2c16beadb0ef3e77f0": "1583261e388ced7d650a5f31e4e8b267",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1f/3f4c6a932eb0da9e7ed0d733e4f4755da11889": "653622a8c9cb1ccda379804257ecd1eb",
".git/objects/2b/c82eb99550e29a73625e7342889ede9cc3ed19": "9d663bd9a794e0acc93c4e9c432eb854",
".git/objects/2e/bd6635740f369084b660e6139a15a696578474": "5dd7fd75f1a1a91acc79cea1216dad80",
".git/objects/30/f7e918b689e5cfdbd4fd34262b201bd614936c": "cffa7c039b38303879b95d218d7572de",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/25f75b65384419809e0c6be5c5fb868ea7ff40": "8042960c57acd680282c49b3213511e4",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/2b4d1040047d179f3ea4dfb58b3e0f6b0d5a0f": "7a522d976b67848d956b356d4b51b877",
".git/objects/3f/64cbf41d2866d3e26f3ef76e54ce75c0097498": "7defb7a77573b8952535e29a5f8cf54f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/87fc20fbd6f07b016bc5236dce6d6a84a015bc": "fde9d129372e5713d6652288b70de69f",
".git/objects/4f/e3a1764c9f54b28e12f7bbb79342e068334b57": "ecdb40378d317eee85faf8b875a9e111",
".git/objects/51/38d6a3f1054bf09d54996635caefdd8a97d5f5": "8fcafc330952436a3e53650e64b96ad9",
".git/objects/54/bf75ec6c9e51b5f001c1fbd9c577596b8d9185": "3ef255bde51286ce9a70becd0773c5b0",
".git/objects/56/d63feb78b4cd578acd28dea408b0e0e29a6cf8": "3cc7f2abf43ba310c0f6bf8a7d2b8a54",
".git/objects/57/22d847c5339554c4c22110692b3580ca690278": "196ec92b1799c5de872ca37bb2632157",
".git/objects/5b/2ab003af788c113901d7502bcea8001a0a02f7": "c58ae41e88b3076e8a124ed1a51f5310",
".git/objects/6c/c8f0d700422435fde48851a688ed512efd3d0a": "2874b616d184e7108ffe898dafad5a25",
".git/objects/6e/5752ff347bd263db2220daaac5602c17524ff1": "62f7b6b6706af93c8ea100c9854818a6",
".git/objects/78/f6e845204da2e2c20ef858ceeb0bc61ace4385": "35efe7229adb032571c657c40072d2b3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/1bf38789f23f19d3c03974adbaf6a63d11e63e": "baac40700b90b3880adbaa8a844b7ee5",
".git/objects/7f/d86f8432c5ce11a9960c7b50f8212fbd8c45ef": "3df225abe25691f15fe379dd692fe457",
".git/objects/81/566d13db9deee1926264a7f24b7592e40ff403": "6f2f2f6735f6d2d25a0aae7bc9c64f12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f54f433d31d0a5a3f106da5db74cba7f5b75a6": "177139612618b450ac572cb516256cfc",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/98/f08583b3106bd3fa4cd866d1202094d230d446": "0a36e58c9076322049a6323453e24e7f",
".git/objects/99/7ec9492e8a3d3d7d7fb8ce4e81b15d7a1d8f8c": "e353dc0a98ea2a97ce29fe3f94a57f92",
".git/objects/9a/b555cd64f629ef88914ca35be1d7b376f59e70": "cb8dc0fc29cd7e36de85e9c3e91f9e09",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9d7b1e2538fcbd776a576ab5c7248ca83ad944": "ca22e5a99e15b76a9027c11fe0c6953b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/fae9807a0bc995f0b399e495cbec0bc10c72f9": "5a4205f1028a9ae282ac974b20eb2b5f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b1/55702f0877662a4ae379deee54272b697754a5": "e15ee70cfda24f76bb341cb7ce4b3fb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/be999b6af999e2e5572f50120613eb06b7af0e": "34d11a46128ac6f59cf6e2752db9b6a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/a0234ad8b36272dc3b48938bcb52a9977b89b7": "88b88b9cc8fab45817975474af323aed",
".git/objects/cc/e03d2d2915f3b74975e14397f597a011e85ae4": "2120c937f00fb3eca4daab78d054f551",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/211222ed071d05fc11caf90d25c2fb04c5dd8c": "6f1cd660df72c9dbd9265580491eb98e",
".git/objects/da/35f6ed45c9004611f432462aa567fbfc1129c7": "6f17df7cbe5852654953e0eaa7f44135",
".git/objects/dd/69f64e9d2ecb677272facf7fe0415fc7979bbc": "afdd9507529a540ceffff791b091e572",
".git/objects/e2/27dd4e928ce02183e690cc3bc4145d14ce5309": "592f67b4df81d1d73a07759bdc05116b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/6e54e5e40d288ed7fa0632abae00664cdc5a5a": "33521ad3f2d90f7d2d27561d413cffd8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/424a20397615b94db0b0bdcb54515778a569b6": "18f6d904ce86bdd0154d67af24460c62",
".git/objects/f1/d0de991670b52060ca5f9c9fa6b9173e94c050": "ef3491102fe444ae397d86d308791e1e",
".git/objects/f4/3bc99b2a91e9fa3e8e213bd7f095e433797203": "c36f97cd83a78f8eb5310be8b4c5754e",
".git/objects/f5/c6f20ee550bb9b6ef63f9ba6f1958a4c7530df": "4a8aba7a513fcd2d6660b44cb2d9471b",
".git/objects/f6/ad28df8efb93ce427cbaee25554aa95628d5e1": "938736ae516fff927cd71b355561c682",
".git/objects/f8/4ebf26734c1af343a489814ac6033bffdaff1d": "b6fb4ccba9b18c03af2313da5b67c087",
".git/objects/pack/pack-67c6bedade84965017e020f45d87f74b32b4c422.idx": "e2dcd833ef3c0517e614eaac8c08d6a4",
".git/objects/pack/pack-67c6bedade84965017e020f45d87f74b32b4c422.pack": "3cbc13a38ef539fadb6bfcd0d5a1b3cd",
".git/packed-refs": "9424be601bd4ce8bd3a01f45705395fb",
".git/refs/heads/main": "15e7311b5c6d7c2b0868e844508c9e51",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "15e7311b5c6d7c2b0868e844508c9e51",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3da180ca61efe882d82af6c584ac458e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce597aaa07df0bd5762d09b866a97500",
"/": "ce597aaa07df0bd5762d09b866a97500",
"main.dart.js": "f6a27e08cc1d39a6aa98bf68beac5966",
"manifest.json": "1515744a4734f8534410baa862ac4b73",
"version.json": "38844fb7225fd2b67ceff3c951cd9b62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
