// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // http://ufo-api.herokuapp.com/api/sightings/search?from=200/5/5&to=2016/8/7&shape=triangle&city=new%20york&state=ny&limit=50&skip=0
  // returns data like this

  res.statusCode = 200
  res.json({
    "status": "OK",
    "sightingsReturned": 100,
    "sightings": [
    {
    "_id": "583e43ac7250d6988d3b33c2",
    "city": "Beaverton",
    "date": "2016-09-28T19:50:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130312.html",
    "state": "OR",
    "summary": "The object was flying South, about as high as an airplane but looked different enough from a plane that it caught our eye and we contin",
    "duration": "2 minutes",
    "shape": "Disk",
    "loc": [
    -122.8037803,
    45.4871723
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.154Z"
    },
    {
    "_id": "583e43ac7250d6988d3b33c6",
    "city": "Redmond",
    "date": "2016-09-27T22:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130296.html",
    "state": "OR",
    "summary": "Dimly lit, gray, fast moving object.",
    "duration": "Seconds",
    "shape": "Unknown",
    "loc": [
    -121.1739211,
    44.2726203
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.178Z"
    },
    {
    "_id": "583e43ac7250d6988d3b33ca",
    "city": "Keizer",
    "date": "2016-09-27T21:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130277.html",
    "state": "OR",
    "summary": "Formation of 3 reddish/orange colored lights flew over my house in a triangular formation.  ((anonymous report))",
    "duration": "20 minutes",
    "shape": "Formation",
    "loc": [
    -123.0197172,
    44.9958075
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.182Z"
    },
    {
    "_id": "583e43ac7250d6988d3b33d3",
    "city": "Beaverton",
    "date": "2016-09-27T19:50:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130310.html",
    "state": "OR",
    "summary": "We were headed east on Sexton Mountain Drive and I see this unusual light/object flying in the sky. I tell my husband to pull over, gra",
    "duration": "2 minutes",
    "shape": "Disk",
    "loc": [
    -122.8037803,
    45.4871723
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.190Z"
    },
    {
    "_id": "583e43ac7250d6988d3b33f9",
    "city": "Eugene",
    "date": "2016-09-25T20:15:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130211.html",
    "state": "OR",
    "summary": "Saw triangle shaped craft with some kind of cloaking.",
    "duration": "~15 seconds",
    "shape": "Triangle",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.324Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3410",
    "city": "Tigard",
    "date": "2016-09-24T20:45:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130207.html",
    "state": "OR",
    "summary": "Two very bright, star-like objects side by side at an angle.",
    "duration": "10 seconds",
    "shape": "Light",
    "loc": [
    -122.7719338,
    45.4307473
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.372Z"
    },
    {
    "_id": "583e43ac7250d6988d3b342d",
    "city": "Portland",
    "date": "2016-09-22T20:45:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130142.html",
    "state": "OR",
    "summary": "Slow moving orb over Portland oregon",
    "duration": "15-18 minutes",
    "shape": "Sphere",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.411Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3443",
    "city": "Beaverton",
    "date": "2016-09-21T18:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130135.html",
    "state": "OR",
    "summary": "Bright blue ball of light!  ((anonymous report))",
    "duration": "5 seconds",
    "shape": "Circle",
    "loc": [
    -122.8037803,
    45.4871723
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.441Z"
    },
    {
    "_id": "583e43ac7250d6988d3b345e",
    "city": "Aumsville",
    "date": "2016-09-19T22:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/130/S130106.html",
    "state": "OR",
    "summary": "Light Object.",
    "duration": "7 minutes",
    "shape": "Cross",
    "loc": [
    -122.8709242,
    44.8409548
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.467Z"
    },
    {
    "_id": "583e43ac7250d6988d3b34a1",
    "city": "Canby",
    "date": "2016-09-15T22:05:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129976.html",
    "state": "OR",
    "summary": "2 amber lights over field outside of Canby, Oregon.",
    "duration": "2-3 minutes",
    "shape": "Light",
    "loc": [
    -122.6925982,
    45.2629088
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.539Z"
    },
    {
    "_id": "583e43ac7250d6988d3b34d6",
    "city": "Eugene",
    "date": "2016-09-13T20:40:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129913.html",
    "state": "OR",
    "summary": "What at first appeared to be a satellite shoots straight towards me at high speed, then reverses direction back to where it had been.",
    "duration": "2 minutes",
    "shape": "Circle",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.577Z"
    },
    {
    "_id": "583e43ac7250d6988d3b34d7",
    "city": "Eugene",
    "date": "2016-09-13T20:40:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129923.html",
    "state": "OR",
    "summary": "What at first appeared to be a satellite shoots straight towards me at high speed, then reverses direction back to where it had been.",
    "duration": "2 minutes",
    "shape": "Circle",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.577Z"
    },
    {
    "_id": "583e43ac7250d6988d3b350e",
    "city": "Salem",
    "date": "2016-09-09T22:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129836.html",
    "state": "OR",
    "summary": "3 yellow-ish/orange orbs that looked like oblong chunks plucked out of the sun, were seen moving across the Salem, OR, sky.",
    "duration": "3 minutes",
    "shape": "",
    "loc": [
    -123.0331209,
    44.9391565
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.605Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3516",
    "city": "Sandy",
    "date": "2016-09-09T09:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129822.html",
    "state": "OR",
    "summary": "Telephoned report:  Adult male reports witnessing a silver disc in the morning sky.",
    "duration": "10 seconds",
    "shape": "Egg",
    "loc": [
    -122.2614547,
    45.3974065
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.607Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3533",
    "city": "Adrian",
    "date": "2016-09-07T20:45:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129824.html",
    "state": "OR",
    "summary": "Red blinking lights on the skyline at dusk.",
    "duration": "5 minutes",
    "shape": "Circle",
    "loc": [
    -117.0716803,
    43.7407105
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.617Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3576",
    "city": "Forest Grove",
    "date": "2016-09-03T23:57:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129722.html",
    "state": "OR",
    "summary": "Just before midnight, my friend and I were walking home and the sky lit up behind us, we both turned to look by that time it was passin",
    "duration": "7-8 seconds",
    "shape": "Sphere",
    "loc": [
    -123.1114404,
    45.5197452
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.667Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3577",
    "city": "Portland",
    "date": "2016-09-03T23:55:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129666.html",
    "state": "OR",
    "summary": "At approx 11:55 pm, I observed in the western sky a large green fireball, with a strange oblong shape to it, traveling northward, at a",
    "duration": "3 seconds",
    "shape": "Fireball",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.667Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3591",
    "city": "Salem",
    "date": "2016-09-02T23:59:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129668.html",
    "state": "OR",
    "summary": "Quiet comet like fireball with a long trail across the skyline at a downward angle fast moving went behind the trees lost sight",
    "duration": "1 minute",
    "shape": "Fireball",
    "loc": [
    -123.0331209,
    44.9391565
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.708Z"
    },
    {
    "_id": "583e43ac7250d6988d3b3592",
    "city": "Eugene",
    "date": "2016-09-02T23:40:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129680.html",
    "state": "OR",
    "summary": "Bright triangle shape with iridescent \"panel\" type tail.",
    "duration": "10 seconds",
    "shape": "Triangle",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.708Z"
    },
    {
    "_id": "583e43ac7250d6988d3b35a2",
    "city": "McMinnville",
    "date": "2016-09-02T15:20:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129650.html",
    "state": "OR",
    "summary": "Loud buzzing/rumbling noise, nothing was seen in sky, wind was extreme during sound. ((anonymous report))",
    "duration": "~1 minute",
    "shape": "Unknown",
    "loc": [
    -123.197585,
    45.2109843
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.712Z"
    },
    {
    "_id": "583e43ac7250d6988d3b35a7",
    "city": "Hillsboro",
    "date": "2016-09-02T00:01:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129665.html",
    "state": "OR",
    "summary": "I was out my back door smoking a cig before going to bed and I witnessed a light moving very fast frome east to west I think then what",
    "duration": "5 seconds",
    "shape": "Light",
    "loc": [
    -122.9898269,
    45.5228939
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:44.713Z"
    },
    {
    "_id": "583e43af7250d6988d3b3677",
    "city": "Albany",
    "url": "http://www.nuforc.org/webreports/129/S129361.html",
    "shape": "Circle",
    "summary": "Circle aircraft, with three non-blinking lights, passed over very slowly.",
    "duration": "Ongoing",
    "state": "OR",
    "date": "2016-08-18T21:45:00.000Z",
    "loc": [
    -123.1059323,
    44.6365071
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.104Z"
    },
    {
    "_id": "583e43af7250d6988d3b36cc",
    "city": "Albany",
    "url": "http://www.nuforc.org/webreports/129/S129229.html",
    "shape": "Rectangle",
    "summary": "Large reddish orange craft moving SW at fast rate of speed. Heard roaring almost like engine. Noisy neighborhood though.",
    "duration": "20 seconds",
    "state": "OR",
    "date": "2016-08-13T00:47:00.000Z",
    "loc": [
    -123.1059323,
    44.6365071
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.118Z"
    },
    {
    "_id": "583e43af7250d6988d3b35d8",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/129/S129580.html",
    "shape": "Sphere",
    "summary": "These spheres are white like electic and appear about 8:25 pm for weeks now they stay stationary for up to 4 to 5 minutes than descend",
    "duration": "5 minutes",
    "state": "OR",
    "date": "2016-08-29T20:25:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.074Z"
    },
    {
    "_id": "583e43af7250d6988d3b3607",
    "city": "Astoria",
    "url": "http://www.nuforc.org/webreports/129/S129503.html",
    "shape": "Circle",
    "summary": "Large yellow orb crossed the sky twice heading east.",
    "duration": "3 seconds",
    "state": "OR",
    "date": "2016-08-25T23:00:00.000Z",
    "loc": [
    -123.8312562,
    46.1878845
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.082Z"
    },
    {
    "_id": "583e43af7250d6988d3b360a",
    "city": "Aloha",
    "url": "http://www.nuforc.org/webreports/129/S129507.html",
    "shape": "Circle",
    "summary": "Red round light bouncing around the sky quickly",
    "duration": "",
    "state": "OR",
    "date": "2016-08-25T21:00:00.000Z",
    "loc": [
    -122.867045,
    45.4942838
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.083Z"
    },
    {
    "_id": "583e43af7250d6988d3b3643",
    "city": "Silverton",
    "url": "http://www.nuforc.org/webreports/129/S129436.html",
    "shape": "Light",
    "summary": "Bright white light in night sky flashed, moved to the right, then faded out.",
    "duration": "2 minutes?",
    "state": "OR",
    "date": "2016-08-21T23:00:00.000Z",
    "loc": [
    -122.7832946,
    45.0049305
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.094Z"
    },
    {
    "_id": "583e43af7250d6988d3b3642",
    "city": "Silverton",
    "url": "http://www.nuforc.org/webreports/129/S129481.html",
    "shape": "Light",
    "summary": "Camping outside when a bright light in the sky flashed, moved to the right, then faded out.",
    "duration": "1-2 minutes?",
    "state": "OR",
    "date": "2016-08-21T23:00:00.000Z",
    "loc": [
    -122.7832946,
    45.0049305
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.093Z"
    },
    {
    "_id": "583e43af7250d6988d3b364b",
    "city": "Milwaukie",
    "url": "http://www.nuforc.org/webreports/129/S129416.html",
    "shape": "Oval",
    "summary": "Cant explain two red fireballs over Portland.",
    "duration": "1 minute",
    "state": "OR",
    "date": "2016-08-21T02:45:00.000Z",
    "loc": [
    -122.6392888,
    45.4453901
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.095Z"
    },
    {
    "_id": "583e43af7250d6988d3b3694",
    "city": "Beaverton",
    "url": "http://www.nuforc.org/webreports/129/S129432.html",
    "shape": "Light",
    "summary": "Bright unidentifiable flying object that faded to blend in with the sky.",
    "duration": "2 minutes",
    "state": "OR",
    "date": "2016-08-16T19:00:00.000Z",
    "loc": [
    -122.8037803,
    45.4871723
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.108Z"
    },
    {
    "_id": "583e43af7250d6988d3b3687",
    "city": "Tygh Valley",
    "url": "http://www.nuforc.org/webreports/129/S129452.html",
    "shape": "Oval",
    "summary": "Oval object fades away into blue sky.",
    "duration": "5-10 seconds",
    "state": "OR",
    "date": "2016-08-17T15:00:00.000Z",
    "loc": [
    -121.1731199,
    45.247341
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.106Z"
    },
    {
    "_id": "583e43af7250d6988d3b36be",
    "city": "Bend",
    "url": "http://www.nuforc.org/webreports/129/S129656.html",
    "shape": "Unknown",
    "summary": "White light crosses sky, turns, then appears to hover before fading out.",
    "duration": "5 minutes",
    "state": "OR",
    "date": "2016-08-13T22:00:00.000Z",
    "loc": [
    -121.3153095,
    44.0581728
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.116Z"
    },
    {
    "_id": "583e43af7250d6988d3b36d0",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/129/S129230.html",
    "shape": "Light",
    "summary": "Satellite not what it appears to be.",
    "duration": "Ongoing",
    "state": "OR",
    "date": "2016-08-12T22:30:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.119Z"
    },
    {
    "_id": "583e43af7250d6988d3b36f3",
    "city": "Eagle Point",
    "url": "http://www.nuforc.org/webreports/129/S129202.html",
    "shape": "Other",
    "summary": "Streaking blue light appeared like a crashing object near Table Rock Plateau.  ((NUFORC Note:  Possible meteor.  PD))",
    "duration": "3 seconds",
    "state": "OR",
    "date": "2016-08-11T23:00:00.000Z",
    "loc": [
    -122.8028176,
    42.4726258
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.134Z"
    },
    {
    "_id": "583e43af7250d6988d3b3729",
    "city": "Bend",
    "url": "http://www.nuforc.org/webreports/129/S129136.html",
    "shape": "Light",
    "summary": "Bright white orb.",
    "duration": "60 seconds",
    "state": "OR",
    "date": "2016-08-09T22:10:00.000Z",
    "loc": [
    -121.3153095,
    44.0581728
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.143Z"
    },
    {
    "_id": "583e43af7250d6988d3b3727",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/129/S129139.html",
    "shape": "Flash",
    "summary": "Orbiting object flares, separate flash appears, then object disappears.",
    "duration": "15 seconds",
    "state": "OR",
    "date": "2016-08-09T23:00:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.143Z"
    },
    {
    "_id": "583e43af7250d6988d3b379b",
    "city": "Milwaukie",
    "url": "http://www.nuforc.org/webreports/129/S129017.html",
    "shape": "Light",
    "summary": "We were walking past an athletic field when we looked over and noticed 3 lights in the sky that we had never seen before.Two of us",
    "duration": "6 minutes",
    "state": "OR",
    "date": "2016-08-01T21:46:00.000Z",
    "loc": [
    -122.6392888,
    45.4453901
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.160Z"
    },
    {
    "_id": "583e43af7250d6988d3b378d",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/128/S128987.html",
    "shape": "Light",
    "summary": "Sitting on my porch with my significant other and saw a light appear from the sky and come down stay for a second and then go back up t",
    "duration": "3 minutes",
    "state": "OR",
    "date": "2016-08-02T11:15:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:47.158Z"
    },
    {
    "_id": "583e43b27250d6988d3b37ac",
    "city": "Springfield",
    "date": "2016-07-31T22:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128949.html",
    "state": "OR",
    "summary": "Two blue circular glowing flying objects were flying near each other then went in to different directions.  ((anonymous report))",
    "duration": "5 minutes",
    "shape": "Circle",
    "loc": [
    -123.0220288,
    44.0462362
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.073Z"
    },
    {
    "_id": "583e43b27250d6988d3b37d4",
    "city": "Roseburg",
    "date": "2016-07-29T21:15:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128930.html",
    "state": "OR",
    "summary": "Starting at 21:15 hours a light coming from the SW heading NE about 15 thousand feet high.There were no blinking lights or strobes like",
    "duration": "15 minutes",
    "shape": "Light",
    "loc": [
    -123.341738,
    43.216505
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.080Z"
    },
    {
    "_id": "583e43b27250d6988d3b37e8",
    "city": "Clackamas",
    "date": "2016-07-28T02:50:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128902.html",
    "state": "OR",
    "summary": "Huge green low flying fireball.  ((anonymous report)) ((NUFORC Note:  Possible meteor??  PD))",
    "duration": "4-5 seconds",
    "shape": "Fireball",
    "loc": [
    -122.2305037,
    45.1608821
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.083Z"
    },
    {
    "_id": "583e43b27250d6988d3b37b2",
    "city": "Sherwood",
    "date": "2016-07-31T16:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/129/S129111.html",
    "state": "OR",
    "summary": "Disc.",
    "duration": "3 hours",
    "shape": "Disk",
    "loc": [
    -122.8403569,
    45.3570983
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.074Z"
    },
    {
    "_id": "583e43b27250d6988d3b37ab",
    "city": "Gold Hill",
    "date": "2016-07-31T23:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128953.html",
    "state": "OR",
    "summary": "I saw an orange orb and as it glided by it appeared to be a pillar with orange at each end.  ((anonymous report))",
    "duration": "2 minutes",
    "shape": "Other",
    "loc": [
    -123.0219914,
    42.4417898
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.072Z"
    },
    {
    "_id": "583e43b27250d6988d3b37bd",
    "city": "Roseburg",
    "date": "2016-07-30T22:50:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128933.html",
    "state": "OR",
    "summary": "I went outside for a smoke and when i looked up to the east i saw what appeared to be either a meteor breaking thru the atmosphere but",
    "duration": ".5 second",
    "shape": "Fireball",
    "loc": [
    -123.341738,
    43.216505
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.076Z"
    },
    {
    "_id": "583e43b27250d6988d3b37b5",
    "city": "Canby",
    "date": "2016-07-31T14:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128939.html",
    "state": "OR",
    "summary": "We saw a round shape disk that looked like a parachute. Stayed in the same sky about 1-2 hours",
    "duration": "120 minutes",
    "shape": "Disk",
    "loc": [
    -122.6925982,
    45.2629088
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.075Z"
    },
    {
    "_id": "583e43b27250d6988d3b37cb",
    "city": "Eugene",
    "date": "2016-07-30T10:53:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128932.html",
    "state": "OR",
    "summary": "Green light comes falling down.",
    "duration": "5 seconds",
    "shape": "Cone",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.078Z"
    },
    {
    "_id": "583e43b27250d6988d3b385b",
    "city": "Diamond Lake",
    "date": "2016-07-26T22:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128755.html",
    "state": "OR",
    "summary": "Two objects seen in central Oregon.",
    "duration": "2 hours",
    "shape": "Triangle",
    "loc": [
    -122.1389201,
    43.1787376
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.101Z"
    },
    {
    "_id": "583e43b27250d6988d3b37da",
    "city": "Grants Pass",
    "date": "2016-07-29T02:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128893.html",
    "state": "OR",
    "summary": "Hovering craft with lights at each end.",
    "duration": "1 hour",
    "shape": "Triangle",
    "loc": [
    -123.3272488,
    42.4393707
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.081Z"
    },
    {
    "_id": "583e43b27250d6988d3b37ea",
    "city": "Oakridge",
    "date": "2016-07-28T01:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128911.html",
    "state": "OR",
    "summary": "I seen a floating slab it was thinner than is was wider and longer.  ((anonymous report))",
    "duration": "1 minute",
    "shape": "Rectangle",
    "loc": [
    -122.4597411,
    43.7466899
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.083Z"
    },
    {
    "_id": "583e43b27250d6988d3b37ef",
    "city": "Hermiston",
    "date": "2016-07-27T23:15:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128858.html",
    "state": "OR",
    "summary": "Light flying north the suddenly changes direction in a second.  ((anonymous report))",
    "duration": "5 minutes",
    "shape": "Light",
    "loc": [
    -119.2894604,
    45.8404101
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.084Z"
    },
    {
    "_id": "583e43b27250d6988d3b3900",
    "city": "Eugene",
    "date": "2016-07-16T20:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128548.html",
    "state": "OR",
    "summary": "Fireball seen soaring across the sky.  Aircraft seen chasing it.",
    "duration": "3 seconds",
    "shape": "Fireball",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.128Z"
    },
    {
    "_id": "583e43b27250d6988d3b3850",
    "city": "Florence",
    "date": "2016-07-27T04:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128774.html",
    "state": "OR",
    "summary": "At first glance I didn't noticeanythingother than a starrynight. Until a distantlight slowly whith no sound made its way across the sky",
    "duration": "15 minutes",
    "shape": "Light",
    "loc": [
    -124.0998384,
    43.982672
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.100Z"
    },
    {
    "_id": "583e43b27250d6988d3b387f",
    "city": "Portland",
    "date": "2016-07-24T15:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128738.html",
    "state": "OR",
    "summary": "Dark grey box floating in the air near PDX airport.",
    "duration": "1 hour",
    "shape": "Other",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.108Z"
    },
    {
    "_id": "583e43b27250d6988d3b389d",
    "city": "Eugene",
    "date": "2016-07-23T14:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128667.html",
    "state": "OR",
    "summary": "Translucent object observed flying in the clear, blue afternoon sky.",
    "duration": "3-4 minutes",
    "shape": "Cigar",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.114Z"
    },
    {
    "_id": "583e43b27250d6988d3b38d0",
    "city": "Lincoln City",
    "date": "2016-07-19T16:39:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128601.html",
    "state": "OR",
    "summary": "Unknown circular object caught on photo.  Unknown what it is.",
    "duration": "",
    "shape": "Circle",
    "loc": [
    -124.0179955,
    44.9578902
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.122Z"
    },
    {
    "_id": "583e43b27250d6988d3b38be",
    "city": "The Dalles",
    "date": "2016-07-21T15:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128665.html",
    "state": "OR",
    "summary": "Bright shimmering object, not too high above ground level.  Looking and moving like flying saucer right out of science fiction.",
    "duration": "30 seconds",
    "shape": "Other",
    "loc": [
    -121.1786822,
    45.5945645
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.119Z"
    },
    {
    "_id": "583e43b27250d6988d3b391b",
    "city": "Portland",
    "date": "2016-07-14T21:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128512.html",
    "state": "OR",
    "summary": "Fireball.",
    "duration": "4 seconds",
    "shape": "Teardrop",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.132Z"
    },
    {
    "_id": "583e43b27250d6988d3b392a",
    "city": "Springfield",
    "date": "2016-07-12T22:45:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128577.html",
    "state": "OR",
    "summary": "A formation of 5 soundless star bright red objects moving across the sky, from NE to SE.",
    "duration": "15 minutes",
    "shape": "Formation",
    "loc": [
    -123.0220288,
    44.0462362
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.133Z"
    },
    {
    "_id": "583e43b27250d6988d3b399e",
    "city": "Vancouver & Portland",
    "date": "2016-07-04T23:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128318.html",
    "state": "OR",
    "summary": "Red lights seen twice on same night.",
    "duration": "30 seconds",
    "shape": "Sphere",
    "loc": [
    -122.6783623,
    45.6030456
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.163Z"
    },
    {
    "_id": "583e43b27250d6988d3b393d",
    "city": "Brightwood",
    "date": "2016-07-10T23:25:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128436.html",
    "state": "OR",
    "summary": "Shimmering orange fireball seen near Brightwood, Oregon.",
    "duration": "5 minutes",
    "shape": "Fireball",
    "loc": [
    -122.0167481,
    45.3762302
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.136Z"
    },
    {
    "_id": "583e43b27250d6988d3b39a1",
    "city": "Yachats",
    "date": "2016-07-04T22:45:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128279.html",
    "state": "OR",
    "summary": "Bright purple craft hovered above eastward mountains",
    "duration": "2 minutes",
    "shape": "Circle",
    "loc": [
    -124.1049988,
    44.3127563
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.164Z"
    },
    {
    "_id": "583e43b27250d6988d3b3a1c",
    "city": "Northwest Medford",
    "date": "2016-07-01T22:15:00.000Z",
    "url": "http://www.nuforc.org/webreports/128/S128207.html",
    "state": "OR",
    "summary": "Strange moving object in Nortwest Medford, Oregon sky",
    "duration": "5 minutes",
    "shape": "Rectangle",
    "loc": [
    -122.8718604,
    42.3264181
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:50.184Z"
    },
    {
    "_id": "583e43b57250d6988d3b3a48",
    "city": "Tigard",
    "url": "http://www.nuforc.org/webreports/128/S128151.html",
    "shape": "Fireball",
    "summary": "Glowing Orange Fireball over Tigard Oregon",
    "duration": "20 minutes",
    "state": "OR",
    "date": "2016-06-29T11:40:00.000Z",
    "loc": [
    -122.7719338,
    45.4307473
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.075Z"
    },
    {
    "_id": "583e43b57250d6988d3b3a69",
    "city": "Eugene",
    "url": "http://www.nuforc.org/webreports/128/S128089.html",
    "shape": "Fireball",
    "summary": "((HOAX??))  Out of the corner of my eye I seen a massive fireball falling.  ((anonymous report))",
    "duration": "5-10 seconds",
    "state": "OR",
    "date": "2016-06-27T00:05:00.000Z",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.080Z"
    },
    {
    "_id": "583e43b57250d6988d3b3a87",
    "city": "Oakridge",
    "url": "http://www.nuforc.org/webreports/128/S128088.html",
    "shape": "Formation",
    "summary": "Facing west, I looked out my windshield and saw a large, blue orb shaped object shoot across the sky.",
    "duration": "<10 seconds",
    "state": "OR",
    "date": "2016-06-25T01:15:00.000Z",
    "loc": [
    -122.4597411,
    43.7466899
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.084Z"
    },
    {
    "_id": "583e43b57250d6988d3b3acf",
    "city": "Eugene",
    "url": "http://www.nuforc.org/webreports/127/S127974.html",
    "shape": "Oval",
    "summary": "Multiple Bright orange object above Santa Clara/Eugene",
    "duration": "10-15 minutes",
    "state": "OR",
    "date": "2016-06-18T20:45:00.000Z",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.106Z"
    },
    {
    "_id": "583e43b57250d6988d3b3ad6",
    "city": "Gold Beach",
    "url": "http://www.nuforc.org/webreports/127/S127947.html",
    "shape": "Circle",
    "summary": "Round craft, bright in center, no sound, slowly moving west to east, hovered twice.",
    "duration": "3 minutes",
    "state": "OR",
    "date": "2016-06-18T13:00:00.000Z",
    "loc": [
    -124.4217739,
    42.4073334
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.107Z"
    },
    {
    "_id": "583e43b57250d6988d3b3b5b",
    "city": "Fall Creek",
    "url": "http://www.nuforc.org/webreports/127/S127771.html",
    "shape": "Sphere",
    "summary": "Mysterious lightning above woods up Fall Creek Oregon",
    "duration": "2+ hours",
    "state": "OR",
    "date": "2016-06-07T23:15:00.000Z",
    "loc": [
    -121.734119,
    44.0507048
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.126Z"
    },
    {
    "_id": "583e43b57250d6988d3b3ba7",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/127/S127671.html",
    "shape": "Triangle",
    "summary": "3 bright dots and 3 bright lines nearly connecting them-outlining a perfect triangle floating still and bright, high in the S sky.",
    "duration": "1 minute",
    "state": "OR",
    "date": "2016-06-02T22:45:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.136Z"
    },
    {
    "_id": "583e43b57250d6988d3b3b90",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/127/S127693.html",
    "shape": "Circle",
    "summary": "((HOAX??  DATE IS FLAWED))  Faster then anything I've ever seen  ((anonymous report))",
    "duration": "1 minute",
    "state": "OR",
    "date": "2016-06-03T23:50:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:53.134Z"
    },
    {
    "_id": "583e43b87250d6988d3b3c7e",
    "city": "Portland",
    "date": "2016-05-15T22:53:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127320.html",
    "state": "OR",
    "summary": "Huge oval object with flashing colored lights and buzzing noise appeared outside my house.",
    "duration": "3 minutes",
    "shape": "Oval",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.123Z"
    },
    {
    "_id": "583e43b87250d6988d3b3c55",
    "city": "McMinnville",
    "date": "2016-05-20T00:05:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127424.html",
    "state": "OR",
    "summary": "Was walking to my car approximately midnight and saw a bright red object near the vicinity of Jupiter (due West, approx. 15 degrees abo",
    "duration": "10-15 minutes",
    "shape": "Disk",
    "loc": [
    -123.197585,
    45.2109843
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.113Z"
    },
    {
    "_id": "583e43b87250d6988d3b3cab",
    "city": "Gresham",
    "date": "2016-05-12T22:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127363.html",
    "state": "OR",
    "summary": "Bright orange fireball.",
    "duration": "15 seconds",
    "shape": "Fireball",
    "loc": [
    -122.4367057,
    45.5067406
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.131Z"
    },
    {
    "_id": "583e43b87250d6988d3b3ce2",
    "city": "Portland",
    "date": "2016-05-07T10:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127261.html",
    "state": "OR",
    "summary": "((HOAX??)) Crafts flying over Portland.  Orange light from bottom.  Seemed to be two, one higher than the other. ((anonymous report))",
    "duration": "15 minutes",
    "shape": "Oval",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.142Z"
    },
    {
    "_id": "583e43b87250d6988d3b3c9b",
    "city": "Portland",
    "date": "2016-05-14T00:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127356.html",
    "state": "OR",
    "summary": "Large flashes of light in N.E, Portland.",
    "duration": "30 minutes",
    "shape": "Flash",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.128Z"
    },
    {
    "_id": "583e43b87250d6988d3b3cb7",
    "city": "Medford",
    "date": "2016-05-11T05:14:00.000Z",
    "url": "http://www.nuforc.org/webreports/127/S127407.html",
    "state": "OR",
    "summary": "U-shaped craft over the Rogue Valley.",
    "duration": "2:00",
    "shape": "Triangle",
    "loc": [
    -122.8718604,
    42.3264181
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:56.133Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3dc2",
    "city": "Lincoln City",
    "url": "http://www.nuforc.org/webreports/126/S126901.html",
    "shape": "Triangle",
    "summary": "3 orbs in triangle formation along Oregon coastline.",
    "duration": "45 seconds",
    "state": "OR",
    "date": "2016-04-17T21:30:00.000Z",
    "loc": [
    -124.0179955,
    44.9578902
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.117Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3dcc",
    "city": "Seaside",
    "url": "http://www.nuforc.org/webreports/126/S126882.html",
    "shape": "Fireball",
    "summary": "Fast moving flame balls, heading SxSW at a clip faster than helicopters.",
    "duration": "3 minutes",
    "state": "OR",
    "date": "2016-04-16T21:43:00.000Z",
    "loc": [
    -123.9202129,
    45.993246
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.119Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e30",
    "city": "Grants Pass",
    "url": "http://www.nuforc.org/webreports/126/S126783.html",
    "shape": "Disk",
    "summary": "Round, black object, no sound moving very fast thru morning sky.",
    "duration": "1-2 minutes",
    "state": "OR",
    "date": "2016-04-09T11:45:00.000Z",
    "loc": [
    -123.3272488,
    42.4393707
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.135Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e35",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/126/S126785.html",
    "shape": "Circle",
    "summary": "Slow moving orange lights.",
    "duration": "10 minutes",
    "state": "OR",
    "date": "2016-04-08T21:45:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.136Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3dc3",
    "city": "Seaside",
    "url": "http://www.nuforc.org/webreports/126/S126881.html",
    "shape": "Light",
    "summary": "Two golden orange flashing lights hovering silently, moving slowly around.  ((anonymous))",
    "duration": "10 minutes",
    "state": "OR",
    "date": "2016-04-17T21:20:00.000Z",
    "loc": [
    -123.9202129,
    45.993246
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.117Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e53",
    "city": "Salem",
    "url": "http://www.nuforc.org/webreports/126/S126789.html",
    "shape": "Other",
    "summary": "As me and my fianse were sitting outside smoking we saw multiple amber and white colored lights appear and then dim out w/n 2-5sec in t",
    "duration": "90 minutes",
    "state": "OR",
    "date": "2016-04-05T02:30:00.000Z",
    "loc": [
    -123.0331209,
    44.9391565
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.142Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3dc6",
    "city": "Eagle Point",
    "url": "http://www.nuforc.org/webreports/126/S126895.html",
    "shape": "Disk",
    "summary": "While running, I saw five craft fly east-to-west, constantly changing formation.",
    "duration": "1 minute",
    "state": "OR",
    "date": "2016-04-17T14:00:00.000Z",
    "loc": [
    -122.8028176,
    42.4726258
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.117Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e71",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/126/S126699.html",
    "shape": "Unknown",
    "summary": "Glowing orange object (like a burning plane) disappears/fades away, doesn't fall to earth.",
    "duration": "1 minute",
    "state": "OR",
    "date": "2016-04-02T22:19:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.148Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e10",
    "city": "Summer Lake",
    "url": "http://www.nuforc.org/webreports/126/S126864.html",
    "shape": "Light",
    "summary": "Southeast Oregon Orange Orbs with one lasting 45 minutes on the night of April 11th, 2016.",
    "duration": "45 minutes",
    "state": "OR",
    "date": "2016-04-11T22:30:00.000Z",
    "loc": [
    -120.7774823,
    42.9729249
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.130Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e23",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/127/S127074.html",
    "shape": "Sphere",
    "summary": "6-10 slow moving, orange orbs or spheres",
    "duration": "6 minutes",
    "state": "OR",
    "date": "2016-04-09T22:30:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.133Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e28",
    "city": "Salem",
    "url": "http://www.nuforc.org/webreports/126/S126794.html",
    "shape": "Flash",
    "summary": "While observing the moon tonight at about 9:20 pm PST my daughter said, \"Look, I saw a flash in the sky over there three times.\"",
    "duration": "6 minutes",
    "state": "OR",
    "date": "2016-04-09T21:20:00.000Z",
    "loc": [
    -123.0331209,
    44.9391565
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.134Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e3d",
    "city": "Brookings",
    "url": "http://www.nuforc.org/webreports/126/S126754.html",
    "shape": "Flash",
    "summary": "Two flashing lights in the night sky moving very slowly.",
    "duration": "10-12 minutes",
    "state": "OR",
    "date": "2016-04-07T22:30:00.000Z",
    "loc": [
    -124.315577141173,
    42.0741015
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.138Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e82",
    "city": "Troutdale",
    "url": "http://www.nuforc.org/webreports/126/S126664.html",
    "shape": "Sphere",
    "summary": "Two bright lights hover over East Vancover, Washington.",
    "duration": "now",
    "state": "OR",
    "date": "2016-04-01T21:30:00.000Z",
    "loc": [
    -122.3911549,
    45.5317928
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.151Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e87",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/126/S126673.html",
    "shape": "Light",
    "summary": "Multiple sightings of bright white orbs that sometimes flashed brightly.",
    "duration": "30 minutes",
    "state": "OR",
    "date": "2016-04-01T20:55:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.152Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e8f",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/126/S126697.html",
    "shape": "Formation",
    "summary": "I was standing in my backyard when I saw 3 dark objects in a triangle shape heading in a southerly direction.",
    "duration": "2 minutes",
    "state": "OR",
    "date": "2016-04-01T19:58:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.154Z"
    },
    {
    "_id": "583e43bb7250d6988d3b3e8e",
    "city": "Portland",
    "url": "http://www.nuforc.org/webreports/126/S126663.html",
    "shape": "Formation",
    "summary": "I saw what look like 3 objects at a very high  altitude flying in a southeasterly direction. There was no sound and no lights. They mov",
    "duration": "00:02",
    "state": "OR",
    "date": "2016-04-01T19:58:00.000Z",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:12:59.153Z"
    },
    {
    "_id": "583e43be7250d6988d3b3e9a",
    "city": "St. Helens",
    "date": "2016-03-31T23:30:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126647.html",
    "state": "OR",
    "summary": "They looked like stars but 13 where in a row then they dispersed threw the sky. They had bright flashing lights like cop cars! could se",
    "duration": "2 hours",
    "shape": "Formation",
    "loc": [
    -122.8064921,
    45.8640034
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.069Z"
    },
    {
    "_id": "583e43be7250d6988d3b3ea3",
    "city": "Redmond",
    "date": "2016-03-31T00:21:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126677.html",
    "state": "OR",
    "summary": "Hovering flashing light over Sister's Mountains.",
    "duration": "15 minutes",
    "shape": "Light",
    "loc": [
    -121.1739211,
    44.2726203
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.071Z"
    },
    {
    "_id": "583e43be7250d6988d3b3f20",
    "city": "Albany",
    "date": "2016-03-19T20:13:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126484.html",
    "state": "OR",
    "summary": "Oregon UFO spotted near I-5 North towards Salem.",
    "duration": "20 minutes",
    "shape": "Triangle",
    "loc": [
    -123.1059323,
    44.6365071
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.111Z"
    },
    {
    "_id": "583e43be7250d6988d3b3ea1",
    "city": "Portland",
    "date": "2016-03-31T02:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126637.html",
    "state": "OR",
    "summary": "Went on a bike ride with my headphones in, was almost home i looked left casually and looked in the sky. I saw a VERY WHITE bright ligh",
    "duration": "3-5 seconds",
    "shape": "Light",
    "loc": [
    -122.6741948,
    45.5202471
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.070Z"
    },
    {
    "_id": "583e43be7250d6988d3b3f39",
    "city": "Glide",
    "date": "2016-03-18T00:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126425.html",
    "state": "OR",
    "summary": "Lights in sky appeared to be blinking/flashing; got binocs, noticed 1 light was red, green, blue,and gold.  ((NUFORC Note:  Star?  PD))",
    "duration": ">15 minutes",
    "shape": "Light",
    "loc": [
    -123.1011753,
    43.3015069
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.122Z"
    },
    {
    "_id": "583e43be7250d6988d3b3eec",
    "city": "Milwaukie",
    "date": "2016-03-25T20:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126537.html",
    "state": "OR",
    "summary": "I saw one red and two orange flying object in the sky.",
    "duration": "3 minutes",
    "shape": "Triangle",
    "loc": [
    -122.6392888,
    45.4453901
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.087Z"
    },
    {
    "_id": "583e43be7250d6988d3b3efe",
    "city": "Eugene",
    "date": "2016-03-23T21:00:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126520.html",
    "state": "OR",
    "summary": "I went to smoke outside, when I noticed a triangle in sky.  I would say it was three separate orbs but in a perfect triangle.",
    "duration": "2 minutes",
    "shape": "Triangle",
    "loc": [
    -123.152383713818,
    44.10118085
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.090Z"
    },
    {
    "_id": "583e43be7250d6988d3b3f29",
    "city": "Grants Pass",
    "date": "2016-03-18T21:35:00.000Z",
    "url": "http://www.nuforc.org/webreports/126/S126447.html",
    "state": "OR",
    "summary": "Slow moving flames that interacted with a green light.",
    "duration": "3-4 minutes",
    "shape": "Sphere",
    "loc": [
    -123.3272488,
    42.4393707
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:13:02.118Z"
    }
    ]
    })
}
