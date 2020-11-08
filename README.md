# UFO Sightings

[Live Site](https://ufo-sightings.vercel.app/)

![Project Image](https://github.com/stormcloud266/ufo-sightings/blob/main/screenshot.gif)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This website displays instances of UFO sightings as pins on a map. Results are filtered by state.

#### Technologies

- NextJS
- Styled Components
- Vercel

## How To Use

### Installation

1. **Clone repo**

   `git clone git@github.com:stormcloud266/ufo-sightings.git`

2. **Move into project**

   `cd ufo-sightings`

3. **Install packages**

   `npm i`

4. **Get your access token** from [Mapbox](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)

5. **Add your access token** to the project

    In the root of your project, add a file called `next.config.js`. Inside this file, add the following code, replacing YOUR_ACCESS_TOKEN with the Mapbox token your created in step 4.

    ```javascript
    module.exports = {
      env: {
        NEXT_PUBLIC_MAP_API: "YOUR_ACCESS_TOKEN",
      },
    }
    ```

6. **Start development server**
  `npm run dev`

### API Reference

This project uses NUFORC data collected on [Kaggle](https://www.kaggle.com/NUFORC/ufo-sightings). The CSV data was converted into JSON, and [NextJS api routes](https://nextjs.org/docs/api-routes/introduction) are used to query it.

```javascript
axios
  .get(`/api/az`)
  .then((res) => {
    console.log(res.data.sightings)
  })
```

## References
- [react-map-gl](https://github.com/visgl/react-map-gl)
- [mapbox](https://docs.mapbox.com/)
- [styled components](https://styled-components.com/)

## License

This project is licensed under the MIT License and is free to use both personally and commercially. For more info [view license](https://github.com/stormcloud266/ufo-sightings/blob/main/LICENSE)

## Author Info

[Twitter](https://twitter.com/stormcloud266)

[Website](https://tawneeallport.com)

<a href="https://www.buymeacoffee.com/tawnee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="35" width="150"></a>

---

[Back To The Top](#ufo-sightings)
