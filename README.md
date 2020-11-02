## Dependencies

To build the project on your local machine, you will need:

- `npm` & `NodeJS`

if you don't have these, you can find installation instructions here: https://nodejs.org/en/download/

- Note: `NodeJS` comes pre-installed with `npm`


## To build the project

In the project directory:

1) run `npm install` to build install project dependencies

2) run `npm start`

    - This will run the app on your local machine
    - Open a browser if `npm` hasn't already, and navigate to [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Run `npm run build` if you wish to use a minified production build.

## About the project

This web app pulls card information from the [Elder Scrolls Legends API](https://elderscrollslegends.io/). The cards are displayed in a grid format and provide some card information such as:

- Card Name
- Set Name
- Rarity
- Type
- Text

You are able to search for cards by Name, and further features could be added to the toolbar such as filtering and more advanced search facets (not currently implemented).

The web app continuously loads the next page of results as long as there are more pages to display. One thing that could be added to this project is lazyloading the images, but performace doesn't seem to be impacted too much so far.

## Technologies

This project was built with `React`, and it uses `React Context` to handle passing input from the toolbar to the card display component.