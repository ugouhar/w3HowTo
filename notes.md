# Learnings

# ICONS BAR

## Horizontal Icon Bar

- Add margin and padding to 0 for the body
- To work with icons, don't add style in the **i** tag
- Wrap **i** in **a** and add style to **a**
- To arrange icons from left to right use `float:left`
- To arrange icons from right to left use `float:right`
- To add transition between icons, add it in the parent, here **a** and in the parent of parent.
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

- Add `translate` to change the position of element while rotating such that it is rotated from the end.
- To toggle class name use `elem.classList.toggle('class_name')` syntax
