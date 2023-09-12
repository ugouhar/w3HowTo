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
