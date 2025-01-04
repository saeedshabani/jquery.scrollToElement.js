Sure, I've added the JSFiddle link to the README as a demo link for the jQuery plugin. Here’s the updated `README.md` content in markdown format:

```markdown
# jQuery Scroll to Element Plugin

This jQuery plugin provides a simple method to scroll to specific elements within a scrollable container. The plugin can be easily integrated into any project and customized as needed.

## Getting Started

To use the plugin, follow the steps below:

1. Download or clone this repository.
2. Include the jQuery library and the plugin file in your HTML.

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery.scrollToElement.js"></script>
```

3. Initialize the plugin on the scrollable container element.

```javascript
$(document).ready(function() {
    var $scrollContainer = $('.scroll-container').scrollToElement();
    // Example usage: Scroll to the element with a specific selector
    $('#scrollToElement1').on('click', function() {
        $scrollContainer.scrollToElement({
            elementSelector: '[data-element-id="1"]',
            scrollDuration: 800,
            onElementNotFound: function() {
                alert('Element not found.');
            }
        });
    });
});
```

## Plugin Options

The plugin provides the following options:

- `elementSelector` (required): The selector for the element to scroll to.
- `scrollDuration` (default: 600): The duration of the scroll animation in milliseconds.
- `onElementNotFound` (default: function() { console.warn('Element not found.'); }): A callback function that is called when the specified element is not found.

## Example

The provided example includes 15 elements with different content types and heights:

- Text elements
- Image elements
- Mixed content elements (text and image)

You can test the scroll functionality by clicking the buttons to scroll to different elements (1, 5, 10, and 15).

## Demo

Check out the [JSFiddle demo](https://jsfiddle.net/saeedshabani/ktusfxdh/) to see the plugin in action.

## License

This project is licensed under the MIT License.
