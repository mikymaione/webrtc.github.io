'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3bfe15be6d747b43ec9c5c00ae44afbf",
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
".git/index": "8b8dd66e4cac1900e5516946d1e72f06",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d151f0e20b9fe68cedf90ab90f962b11",
".git/logs/refs/heads/main": "d151f0e20b9fe68cedf90ab90f962b11",
".git/logs/refs/remotes/origin/HEAD": "be3cc0cda813967857f33d3428160bf0",
".git/logs/refs/remotes/origin/main": "8e30190bbb58c5c5018ff583de3add71",
".git/objects/01/45bd0a2e9d6845323d077d8400afdcfa180b41": "4ac96ee0c8efa91928c9e59b8d70eb66",
".git/objects/01/9e3848b4bd2221403186b737f509c60363b082": "ae1017e199a7c0c686f7c9504beb8222",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/8e50cef798f9e076e5822de0026f1fce9cc13b": "880de05483ec6ac739c19d10d5f445a6",
".git/objects/06/d8691004560abb893aa89ead03a9f9628a41c5": "f59697e60e28455e14c824b4e43a7bfc",
".git/objects/07/efe3def5aad9ca11f9bd9b2b8dc97d9843826f": "8dc8de71f4ac803c928500571ea32113",
".git/objects/08/0a0295b884189298824e47f15ec0e0cd0dead8": "aff84dee88635cedc83b6b6bd69baf7e",
".git/objects/09/6040ae32eacddc927da835e8b9a842fc2d439b": "03faef3c4cd5549c4705c3122b7959c7",
".git/objects/0f/3453d89defb9ce52a182d13a17693193202993": "fc028da5753eb1a1ae710bccb3f9990a",
".git/objects/10/21ae568b09a78833d7d466b827a29d2bba954c": "c7172aef03d9b052f60b051a4e5500bb",
".git/objects/12/c75296ab6a4569e7c50e2c16beadb0ef3e77f0": "1583261e388ced7d650a5f31e4e8b267",
".git/objects/18/b2ccd48f7437410f0a902a3bb8e4a6aaf2122b": "5cc65ca9dafec5b0d12f59e04b26fcbd",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1f/3f4c6a932eb0da9e7ed0d733e4f4755da11889": "653622a8c9cb1ccda379804257ecd1eb",
".git/objects/22/ab8e8924a5d8e9057d56c2f4087782fb861b96": "55b964adec1e584b4b351e6d39368bf6",
".git/objects/24/cc55bce0b2f430382785c8e99056269ec4d711": "7ba4c7b7bb7089a3c59cfc82d0730c1e",
".git/objects/29/63efb669ba7b7d461932e7c79afe338f56f2e1": "106d491deb58c161dd491e92ba080dae",
".git/objects/2b/c82eb99550e29a73625e7342889ede9cc3ed19": "9d663bd9a794e0acc93c4e9c432eb854",
".git/objects/2e/7193e85c8aea1369226f15d8331ab5d7917748": "3ce9e7803afbc8d968b787b4ab7159f2",
".git/objects/2e/bd6635740f369084b660e6139a15a696578474": "5dd7fd75f1a1a91acc79cea1216dad80",
".git/objects/30/f7e918b689e5cfdbd4fd34262b201bd614936c": "cffa7c039b38303879b95d218d7572de",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/25f75b65384419809e0c6be5c5fb868ea7ff40": "8042960c57acd680282c49b3213511e4",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/2b4d1040047d179f3ea4dfb58b3e0f6b0d5a0f": "7a522d976b67848d956b356d4b51b877",
".git/objects/3f/64cbf41d2866d3e26f3ef76e54ce75c0097498": "7defb7a77573b8952535e29a5f8cf54f",
".git/objects/40/0ee426dc4804b4efdba340d26dda482bbe86b2": "fc767cda59ac25a29450b6ed57d96065",
".git/objects/41/799f81cc03f39e78d34fb21048b290b441ce24": "dae61b32703726d6567422301de60bdd",
".git/objects/42/232debf4371a652f8b76d7630ad9ef01676825": "53294f202e27c7244088c981dfba1be5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/87fc20fbd6f07b016bc5236dce6d6a84a015bc": "fde9d129372e5713d6652288b70de69f",
".git/objects/4b/726b52b91b82fc641125647a03c58fe12f2b3f": "14371c605c352a473fd961aa659d1908",
".git/objects/4c/b04e4e4c9c794f92d2dc40080e94a1d4415b16": "978c5a59be5671fe6a7453071cf53f7f",
".git/objects/4d/ee7357f2bc8805dd11eefe96324791674ac76e": "eb0bbf9d9f786bec602535da3fe196ba",
".git/objects/4f/e3a1764c9f54b28e12f7bbb79342e068334b57": "ecdb40378d317eee85faf8b875a9e111",
".git/objects/51/3430138de488f76383e960ba067d7a4c053c3b": "1afd2535b8c69fafb98bc9ad6230deec",
".git/objects/51/38d6a3f1054bf09d54996635caefdd8a97d5f5": "8fcafc330952436a3e53650e64b96ad9",
".git/objects/51/a01405f383efa91ea8707b6eb0f62f53a20ebe": "700ab6838f2182c2ba5b28af0abbfc22",
".git/objects/54/bf75ec6c9e51b5f001c1fbd9c577596b8d9185": "3ef255bde51286ce9a70becd0773c5b0",
".git/objects/56/cb3991adefc55135198d911796a48f2293686f": "bcb617fbf59cefa045b3d0886906778f",
".git/objects/56/d63feb78b4cd578acd28dea408b0e0e29a6cf8": "3cc7f2abf43ba310c0f6bf8a7d2b8a54",
".git/objects/56/ee65e0e4e02dd9be91045cbca99d1ad5885e0f": "7eac6b175477d46b1e6d8293be3756af",
".git/objects/57/22d847c5339554c4c22110692b3580ca690278": "196ec92b1799c5de872ca37bb2632157",
".git/objects/58/bdbbb3156a9ef028440719a1dba528edc43b18": "54b008a9d3e98758b30ad0dbfc30b820",
".git/objects/5b/2ab003af788c113901d7502bcea8001a0a02f7": "c58ae41e88b3076e8a124ed1a51f5310",
".git/objects/5e/b4833504a635298d6112f35f33717113bbb5c1": "ab056285562a98c1f67a63d619a01e01",
".git/objects/66/2d65cca00f210fcfef50ae0a4baf3ca7b4d214": "7c9d20827d3f0e2e5cc373a9cd96c6c4",
".git/objects/6a/5b073bee00d8fc8ee3759e50cd4d59a585c389": "7c576fe4052c014f061d5440167f9efd",
".git/objects/6a/ab25f8fe13c341b5803df17143d340e3cfc2e3": "c3ea924bc9d035997677d3eabcb104f5",
".git/objects/6c/c8f0d700422435fde48851a688ed512efd3d0a": "2874b616d184e7108ffe898dafad5a25",
".git/objects/6d/a8e1b3924deafe1ad7637fece6e15858d083ad": "4f47271e722ae81c7f1d3d6e62d089b8",
".git/objects/6e/5752ff347bd263db2220daaac5602c17524ff1": "62f7b6b6706af93c8ea100c9854818a6",
".git/objects/72/377a30cbc6cb8f8ce1736313b3c3a6aebc4212": "6c2497fecc7f477c2a2a8caaf183720e",
".git/objects/75/6a07b70badfed8f3eb0c4539278df77d08c299": "b60ce1ba14409b824f541d2f2c4a5b24",
".git/objects/77/9eb66c651fa1df5426523e1bdc279fc82d629b": "3fe8d08b7fa1f0bfb18a2a76d02521dd",
".git/objects/78/f6e845204da2e2c20ef858ceeb0bc61ace4385": "35efe7229adb032571c657c40072d2b3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/1bf38789f23f19d3c03974adbaf6a63d11e63e": "baac40700b90b3880adbaa8a844b7ee5",
".git/objects/7f/d86f8432c5ce11a9960c7b50f8212fbd8c45ef": "3df225abe25691f15fe379dd692fe457",
".git/objects/81/566d13db9deee1926264a7f24b7592e40ff403": "6f2f2f6735f6d2d25a0aae7bc9c64f12",
".git/objects/82/e0b4a473431d74f46ba696e016be58ba769fba": "479dbe62eae3a73995928f69d7ae3b8f",
".git/objects/86/cc4601145f1b0dcb5ca9dc66bf12e6421c7e44": "57293e693676a0f2c158efa12096a040",
".git/objects/87/54f0e9b4eb275ee89017a8087ce1304a6c89c9": "530530a204b58b3748b636e3eb92f614",
".git/objects/88/6cfc9614a4860be57236cd0830c3920616f8b5": "ba512a9cbf32fa7b3c2ac39f70c1a776",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fdc0b4a2f32ca9d71e22969a82b3f0921fb3f8": "a07005041cced8f7f6b71cc25951532f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f54f433d31d0a5a3f106da5db74cba7f5b75a6": "177139612618b450ac572cb516256cfc",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/98/f08583b3106bd3fa4cd866d1202094d230d446": "0a36e58c9076322049a6323453e24e7f",
".git/objects/99/7ec9492e8a3d3d7d7fb8ce4e81b15d7a1d8f8c": "e353dc0a98ea2a97ce29fe3f94a57f92",
".git/objects/9a/b555cd64f629ef88914ca35be1d7b376f59e70": "cb8dc0fc29cd7e36de85e9c3e91f9e09",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9d7b1e2538fcbd776a576ab5c7248ca83ad944": "ca22e5a99e15b76a9027c11fe0c6953b",
".git/objects/a2/c857df7555418ac4908ec44a3ed31d08f0d163": "31ab32050dd1a7269c1a566f5ef36225",
".git/objects/a3/232bcc1433689fd56b61e6b5dd4a73f8cc305a": "7917c31f150cc89e1555944cf259dd34",
".git/objects/a3/a69a73bed89322ec1eeeaa774a9d76a828dde5": "004d38d886844fa2d330262946049d55",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/fae9807a0bc995f0b399e495cbec0bc10c72f9": "5a4205f1028a9ae282ac974b20eb2b5f",
".git/objects/a9/32d388d5a60fe6703845e3374a8d02d1b760b7": "115e7b61f23949fcdbb161d77e2a152e",
".git/objects/a9/5fd40d8d770baf1b843557fbb8226c6bc024b5": "b4f2c9bf8eb478c131272c1d4042ab43",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/5cbe5b19395f05ff5112e487175594b3dc5278": "55b66ef3e11519bbc6495ab84ead3367",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/e5c2a7317a4bda2ed5eaaf4e09144c0cf236fd": "db1896011ac85cdf9af805745ed119e5",
".git/objects/af/54917734e765c9e9038b46f7572aa6bf59d102": "a4637f6a213525eaa37e3f8f62bf8b18",
".git/objects/b1/55702f0877662a4ae379deee54272b697754a5": "e15ee70cfda24f76bb341cb7ce4b3fb8",
".git/objects/b2/ad6485cc3946aa330414f08e58b977da2cd84e": "df3af9cf14ec6ebf1710f58655c01563",
".git/objects/b5/c83910f729edc58bb15c8305b19ec9bac22502": "756f290f98ebcc704f5cc78174f3fcc3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17e8c4ca71ad83f389ca0f10931a31396d858a": "bd4762ca1cc94b5a70422743c162ed5b",
".git/objects/b8/be999b6af999e2e5572f50120613eb06b7af0e": "34d11a46128ac6f59cf6e2752db9b6a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/f80c6425115395cca60aff1c218fd51fe08001": "c3786a3b5b4b1bcdb76c03b183940658",
".git/objects/c0/a0234ad8b36272dc3b48938bcb52a9977b89b7": "88b88b9cc8fab45817975474af323aed",
".git/objects/cc/058a7d8a3e6e6728a27717597ab4ceef0ae3ac": "92e378c2cbe98e620303dfb0b482e079",
".git/objects/cc/e03d2d2915f3b74975e14397f597a011e85ae4": "2120c937f00fb3eca4daab78d054f551",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/05f9653c79210d90ebed4fb71469442c0723c4": "42e4651a44683edba1e21b7a62f46c7e",
".git/objects/d8/211222ed071d05fc11caf90d25c2fb04c5dd8c": "6f1cd660df72c9dbd9265580491eb98e",
".git/objects/da/35f6ed45c9004611f432462aa567fbfc1129c7": "6f17df7cbe5852654953e0eaa7f44135",
".git/objects/db/37862ad80bc6e11d23b5cdeb66ffd1930f0ee6": "07645c0d3c210f9352ee89b50a9dc70f",
".git/objects/dd/69f64e9d2ecb677272facf7fe0415fc7979bbc": "afdd9507529a540ceffff791b091e572",
".git/objects/e2/27dd4e928ce02183e690cc3bc4145d14ce5309": "592f67b4df81d1d73a07759bdc05116b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/90791f14ae41f4c88ca5cc4d94bec5af6daf28": "5e95cdb734f847eaa09b6a60dac87441",
".git/objects/e7/6e54e5e40d288ed7fa0632abae00664cdc5a5a": "33521ad3f2d90f7d2d27561d413cffd8",
".git/objects/eb/6c38a64b79f9c15e31c7b39ac44dc09fd2121e": "725b57d192237355c027ea42472556ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8bc40741a42d748a7aef559f8b2262d05e4525": "98667a4244601be414802c5581175c88",
".git/objects/ef/f63168f5ac387dba36943b7a46c352d15fd0e1": "f80b80c40e07e1c1cb4a0542135fae6c",
".git/objects/f0/23d983420fec936101b0914f1b1156c844ba4b": "1e3dbb5497160db74b4c676979c4def7",
".git/objects/f1/424a20397615b94db0b0bdcb54515778a569b6": "18f6d904ce86bdd0154d67af24460c62",
".git/objects/f1/d0de991670b52060ca5f9c9fa6b9173e94c050": "ef3491102fe444ae397d86d308791e1e",
".git/objects/f4/3bc99b2a91e9fa3e8e213bd7f095e433797203": "c36f97cd83a78f8eb5310be8b4c5754e",
".git/objects/f5/c6f20ee550bb9b6ef63f9ba6f1958a4c7530df": "4a8aba7a513fcd2d6660b44cb2d9471b",
".git/objects/f6/ad28df8efb93ce427cbaee25554aa95628d5e1": "938736ae516fff927cd71b355561c682",
".git/objects/f8/4ebf26734c1af343a489814ac6033bffdaff1d": "b6fb4ccba9b18c03af2313da5b67c087",
".git/objects/fd/15bfa25bfe5c59d8d2fb7f1413be5268c3063a": "c3c308549b167c1141ed58108936aa72",
".git/objects/pack/pack-67c6bedade84965017e020f45d87f74b32b4c422.idx": "e2dcd833ef3c0517e614eaac8c08d6a4",
".git/objects/pack/pack-67c6bedade84965017e020f45d87f74b32b4c422.pack": "3cbc13a38ef539fadb6bfcd0d5a1b3cd",
".git/packed-refs": "9424be601bd4ce8bd3a01f45705395fb",
".git/refs/heads/main": "cd315328d08409ffb64e33774d487561",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "cd315328d08409ffb64e33774d487561",
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
"index.html": "99df97f809b7bb6649bcfd6c7672238e",
"/": "99df97f809b7bb6649bcfd6c7672238e",
"main.dart.js": "e61ee2abfe8cb551486da9fa83418262",
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
