# JetBrains Task: CSS Investigation Report

### Project Source
_This report is based on the build process implemented in this repository. See [README.md](https://github.com/Tarcisio2code/jetbrains-css-build-task/blob/master/README.md) for setup instructions._

### Selected Element

```html
<div class="card active"></div>
```
This element was selected because its final computed styles result from interactions between:

* base component styles `(.card)`   
* state-based overrides `(.card.active)`    
* CSS custom properties defined in `:root`    
* conditional rules using `@supports`    
* inherited styles from parent containers

### Property Analysis

| Property | Computed Value | Rule Source (Styles Panel) | Generated Location | Source Map Trace |
| :--- | :--- | :--- | :--- | :--- |
| **background-color** | `rgb(36, 36, 36)` | `.card` | `style.css:95` | Traces to `var(--color-bg-card)` in `src/css/style.css`. |
| **border-color** | `rgb(0, 123, 255)` | `.card.active` | `style.css:110` | Traces to `var(--color-primary)` in `src/css/style.css`. |
| **display** | `flex` | `.card` | `style.css:95` | Traces to `display: flex` within the `.card` class in source. |
| **border-radius** | `8px` | `.card` | `style.css:95` | Traces to `var(--radius-md)` in the authored CSS. |
| **box-sizing** | `border-box` | `*, *::before, *::after` | `style.css:15` | Traces to the global reset in the source CSS. |

### Observed Mapping Limitations
1. **CSS Variable Resolution**    
Computed values show fully resolved colors (e.g. `rgb(...)`), while the authored source uses `var(...)`.
There is no single source location representing the final value, as it is composed from variable definition and usage.

2. **Conditional Rules (@supports)**    
Rules inside `@supports` blocks appear in the computed styles only if the condition evaluates to true.
Source maps can identify the authored rule, but the conditional nature of the application introduces an indirect mapping.

3. **Browser Default Styles**    
Some computed properties (such as `display`) originate from the user-agent stylesheet.
These values have no corresponding authored source and cannot be mapped through source maps.

### Conclusion
This investigation demonstrates the importance of source maps in modern frontend development, enabling generated styles to be traced back to their original authored and architectural context.
