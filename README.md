# Respondots

Easy to integrate canvas based interactive background. More info and demo on [jderail.github.io/respondots](https://jderail.github.io/respondots/)


## Getting started

Download the [latest release](https://github.com/jderail/respondots/releases) and include respondots.min.js.

```html
<script src="{your js directory}/respondots.min.js" />
```

Initialize a new Respondots object with the root element

```js
new Respondots(document.getElementById('root'));
```

Note : Canvas will fit the nearest positioned ancestor.

## Options

Options can be used as second parameter of Respondots constructor as an object containing any of following properties.

| Name            | Default value | Description  |
| --------------- |:--------------| ------|
| gridSize        | 50            | Spacing between dots |
| dotSize         | 5             | Radius of dots |
| backgroundColor | #333          | Background color of canvas |
| dotColor        | #e0e0e0       | Color of dots |
| range           | 100           | Range at which dots start moving |
| zIndex          | 0            | Value of z-index CSS property of appended canvas element |