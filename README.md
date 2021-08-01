# Pizza maker :pizza:

## Development

### Stack

- [Vite](https://vitejs.dev/)
- [Vue 3](https://v3.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- and a parrot <img src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" width="20" title="hover text">

### Requirements

- Node.js version >=12.0.0

### Getting started

```bash
# Project setup
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Locally preview production build
npm run serve
```

## Task

Implement a UI so that the user can make a pizza with

- variable diameter size with reasonable boundary (e.g. min: 10 inch, max: 18 inch)
- different crust (e.g. regular, cheese-crust)
- different toppings (e.g. tomatos, onions, fried aubergine)
- and optionally any other factors you'd like to add into the mix.

Have a look at some random examples from the Internet first:

- https://codepen.io/saas/pen/BgKvmL
- https://www.smartmouthfoods.com/pizza-builder/
- https://codepen.io/brianjly/pen/YwjmKx
- https://codepen.io/GeorgePark/pen/xeGmmP

As the user goes through the experience of choosing pizza ingredients, it should be possible to see the current price of the pizza somewhere on the screen.

### Product Requirements

- Price of each ingredient is listed separately
- Pizza total price is calculated as the sum of ingredients price
- Adding toppings on different sizes should cost more or less in relation to a standard 12" size (e.g. 50 cents more or less per diameter inch)
- Use different elements for making the pizza:
  - Size should be chosable using a slider element
  - Crust should be chosable using a dropdown element
  - Pizza toppings can be chosen with whatever element you see better fit
- Make it possible to reset to the initial state and start over
- [optional] Rendering a rough representation of the pizza on the screen would be nice but not required.
- [optional] Adding premade pizzas (e.g. margherita, fungi, etc.) where the user could click on a pizza name & have the ingredients and price listed instantly

### Technical Requirements

- Use Vue.js to develop the UI components
- Use SUIT CSS to style them
- Use any CSS framework you like
- Feel free to use any materials from the provided samples or anywhere else; think UX but you don't need to "design" anything
- Version your code using Git in digestable commits as go forward with the task; just as you would for a real project

Have fun :pizza:
