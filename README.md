# 2023.05.04 component state management

## SampleA State Hook

- a.1) React updates state asynchronously, not immediately; batches updates and applied after event handler finishes execution

`is-visible false`
`is-visible true `

- a.2) State is stored outside component in mem; all local variables are scoped internally to component/ functions; local variables are disposed of when component is no longer visible on the screen.

- a.3) Can only use HOOKS at the TOP level of a component

## SampleB State Structure

- b.1) no need to use a State Hook unecessarily for calculated/computed fields
- b.2) normalize data , combine x+y since related into an OBJECT
- b.3) try not to nest struct too deep; keep as flat as possible; can get complicated updating

## SampleC Pure Functions

- c.1) Pure func(): given the same function, always returns the same result; thus React will not need to re-render => app runs faster

## SampleD Strict Mode

- d.1) <React.StrictMode> to catch potential problems; renders 2x

## SampleE Updating an Object via SPREAD OPERATOR

- e.1) Javascript SPREAD OPERATOR uses SHALLOW COPY

## SampleF Updating COMPLEX Objects via SPREAD OPERATOR

- f.1) Prefer a flatter OBJECT structure than deeply nested

## SampleG Updating Arrays

- g.1) Same concept applies to arrays; do not change; create new instance

## SampleH Updating Array of Objects

- h.1) No need to update every object in an array, simply the object with the property we are changing

## SampleI Simplifying Update Logic with Immer Library

`$> npm i immer@9.0.19`

- i.1) If prefer using mutable syntax user IMMER

## Sharing State between Components

- Lift state up to closest parent up the component tree
- Once it is in parent, then we can share it downward with children using Props

- j.1)

## Excercises

- k) update property value within nested object

```
{
    id: 1,
    player: {
      name: "Niko",
    },
  }
```

- l) add element to array in object

```
{
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  }
```

- m) update array object property of nested object

```
{
    discount: 0.1,
    items: [
      { id: 1, title: "Product-1", quantity: 10 },
      { id: 2, title: "Product-2", quantity: 12 },
      { id: 3, title: "Product-3", quantity: 13 },
    ],
  }
```
- n) Expandable Text

