
      export default (req, res) => {
        res.statusCode = 200
        res.json({
          "status": "OK",
          "sightings": [
    {"datetime":"10/10/1949 20:30","city":"san marcos","state":"tx","country":"us","shape":"cylinder","seconds":"2700","duration":"45 minutes","comments":"This event took place in early fall around 1949-50. It occurred after a Boy Scout meeting in the Baptist Church. The Baptist Church sit","date posted":"4/27/2004","latitude":"29.8830556","longitude":"-97.9411111"},{"datetime":"10/10/1949 21:00","city":"lackland afb","state":"tx","country":"","shape":"light","seconds":"7200","duration":"1-2 hrs","comments":"1949 Lackland AFB&#44 TX.  Lights racing across the sky &amp; making 90 degree turns on a dime.","date posted":"12/16/2005","latitude":"29.38421","longitude":"-98.581082"},{"datetime":"10/10/1956 21:00","city":"edna","state":"tx","country":"us","shape":"circle","seconds":"20","duration":"1/2 hour","comments":"My older brother and twin sister were leaving the only Edna theater at about 9 PM&#44...we had our bikes and I took a different route home","date posted":"1/17/2004","latitude":"28.9783333","longitude":"-96.6458333"}
            ]
          })
        }
      