# Learnings

# ICONS BAR

## Horizontal Icon Bar

- Add margin and padding to 0 for the body
- To work with icons, don't add style in the **i** tag
- Wrap **i** in **a** and add style to **a**
- To arrange icons from left to right use `float:left`
- To arrange icons from right to left use `float:right`
- To add transition between icons, add it in the parent, here **a** and not in the parent of parent.
- To make it like navbar stretched horizontally, add 100% width to the container and 100/numberOfChilds width to each child.

## Vertical Icon Bar

- Transition, colors, font-size, text-align are common with horizontal icon-bar
- Here width is fixed to 90px, display is block and padding is same for all sides.

## Main difference between Horizontal and Vertical IconBars

| Horizontal  | Vertical      |
| ----------- | ------------- |
| float: left | display:block |
| width: 100% | width: 90px   |

# MENU BAR

- Add `translate` to change the position of element while rotating such that it looks like it is rotated from the end.
- To toggle class name use `elem.classList.toggle('class_name')` syntax

# ACCORDIAN

- To hide content when height is set to 0, use `overflow:hidden`
- To animate height, such that content take as much height as required when expaned, `height:auto` **won't work.**
- To do so animate `max-height`, set `max-height` a large number and it will take maximum only that height and automatically resizes to the height if contents are less.
- To add content before or after using css like '+' or '-' symbols, use `::before `, `::after` properties

# TABS

## Horizontal Tabs

- To add tabs in a tab container, you can use `button` instead of `div`.
- To make the tab container height, same as that of tabs, use `overflow:hidden` in tab. This will not only increase the height but also moves the next `div` to the next line.
- To make the tab background same as tab container, use `background: inherit` in tab instead of setting same background in both. This also helps in changing background color at only one place.
- To apply fading effect, use `animation`.

  ```
  .content {
    animation: fadeEffect 1s;
  }
  @keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ```

- To position close button at topright of current container, use `float: right` on that button instead of `position` property.
- To select parent element use `.parentElement` like `document.getElementById('main-tab').parentElement`.

## Vertical Tabs

- For vertically aligning the tabs instead of adding `<br/>`after the tab, use `display: block` in tab.
- To horizontally place two divs, here **tab** and **content**, use `float:left` in the parent div
- For width we can use `%` but for height we have to set fix values like `px`.

## Search/Filter Menu

- To check whether a string is a subtring of another you can use `myString.substring(query)` or `myString.indexOf(query) > -1`.
- To resize individual flex items width, use properties like this `flex: 35%` in individual flex items. Make sure to add percentage values in all the flex items to have the desired look. It will not automatically adjust.

# Fixed Sidebar

- `sidenav` is better classname than `left-side-bar`.
- It's not always necessary to use list for navigation. Instead you can directly use anchor tags for each element.
- While making element fixed, also add z-index to it
- To have larger container for a links use padding instead of margin and also this makes sense in case box-sizing as border box i.e, by adding padding actually makes the overall element bigger.
- In this case we don't need flex container as side nav is fixed and main content will be at the same level vertically w.r.t sidenav.
- To make an element shift (here main content) towards right use margin instead of padding. As margin will actually move the element from left, while padding will shift the content towards left but the overall size of container will become bigger.
- By adding font-size in `p` only, we were increasing the font of `p` texts only, but by adding font-size in `main` we are also increasing the font-size of `h1` as `h1` has default font-size of 2em which means it will be 2 times the font-size of parent.
- Add a media query for change in height. Decrease in height will decrease the padding and font-size of side nav.

# Side Navigation

## Animated

- `transition: 300ms ease-out` is enough for transition.
- Use same unit for `top`, `right` etc and not like `top` in px and `right` in %.
- To add animation add `transition` property in the element only. What properties to animate will be added in a separate class which you can toggle through JS.
