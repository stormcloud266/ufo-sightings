// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // http://ufo-api.herokuapp.com/api/sightings/search?from=200/5/5&to=2016/8/7&shape=triangle&city=new%20york&state=ny&limit=50&skip=0
  // returns data like this

  res.statusCode = 200
  res.json({
    "status": "OK",
    "sightingsReturned": 3,
    "sightings": [
    {
    "_id": "583e44787250d6988d3bcbef",
    "city": "New York",
    "date": "2011-01-16T22:10:00.000Z",
    "url": "http://www.nuforc.org/webreports/079/S79706.html",
    "state": "NY",
    "summary": "4 bright orange blur lights moving in the sky like 4 flars with no smoke try to take pictures but  any they disapeared",
    "duration": "manhattan",
    "shape": "Triangle",
    "loc": [
    -73.9865811,
    40.7305991
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:16:08.097Z"
    },
    {
    "_id": "583e44a67250d6988d3be49c",
    "city": "New York",
    "url": "http://www.nuforc.org/webreports/106/S106257.html",
    "shape": "Triangle",
    "summary": "Boomerang or Triangular 5 Blueish White Lights.",
    "duration": "10 seconds",
    "state": "NY",
    "date": "1995-06-10T23:00:00.000Z",
    "loc": [
    -73.9865811,
    40.7305991
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:16:54.719Z"
    },
    {
    "_id": "583e45c87250d6988d3c8a3c",
    "city": "New York",
    "date": "2001-09-11T09:05:00.000Z",
    "url": "http://www.nuforc.org/webreports/054/S54792.html",
    "state": "NY",
    "summary": "This is related to UFO activity or it's technology     PLEASE TAKE THE TIME TO LOOK IT UP    THANK YOU",
    "duration": "seconds",
    "shape": "Triangle",
    "loc": [
    -73.9865811,
    40.7305991
    ],
    "__v": 0,
    "dateAdded": "2016-11-30T03:21:44.140Z"
    }
    ]
    })
}
