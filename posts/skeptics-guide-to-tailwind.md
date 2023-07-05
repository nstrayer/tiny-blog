---
title: 'Growing to appreciate Tailwind as a skeptic'
date: '2023-07-04'
---


Recently I began using tailwind for the first time. Tailwind is not new, but I had put off trying it due to an initial visceral reaction to its syntax. It is ugly.

> Now I know what you’re thinking, “this is an atrocity, what a horrible mess!” and you’re right, it’s kind of ugly. In fact it’s just about impossible to think this is a good idea the first time you see it — you have to actually try it.

_A quote from the [tailwind docs](https://tailwindcss.com/docs/utility-first)_

The impetus for me to try Tailwind came from hearing [Kent C Dodds](https://kentcdodds.com/) on a podcast say that he now uses Tailwind _instead of_ CSS-in-JS frameworks. This was confusing, to me tailwind and css-in-js didn't seem like they were solving the same "problem," one was a series of overly-verbose utility classes and the other was a way to write css in a place it otherwise wouldn't be written. 


To rectify this seeming contradition I decided to try a project with it: the blog you're reading this on (at least as I write it in July of 2023). Through the experience of setting up this blog and reading through all the [tailwind docs,](https://tailwindcss.com/docs) I have found myself slowly but _very_ surely coming around to the "Tailwind way." I will attempt to list the revelations I have had throughout that process in a series of articles. In this first one I will focus on perhaps the biggest benefit I've found with Tailwind...

### Minimizing the mental (and physical) distance you need to travel to understand your code

As I get deeper into my software engineering career one theme that has continued to become more and more imporant to me is how tightly you can focus in on a given section of code while updating it. 

Perhaps my brain isn't as spry as it once was, but every intermediate step I need to make to understand the full extent of the code I'm looking at drastically increases the chances I will make a mistake when I go to update it. 

There are lots of ways this can go _wrong._ For instance, having a million helper functions abstracted away may feel "clean" and modularized but if you constantly need to jump around in your editor to look at a helper function maybe to add a new argument or understand what it's doing you are forcing your brain to hold more in ram at once, giving you less room to come up with elegant and quick solutions to what you're trying to solve. 


![ship ugly code](/assets/ship-ugly.png)
_[Tweet](https://twitter.com/ryanflorence/status/1673883374459686915)_



Modern CSS is a powerful tool with things like psuedo-classes and media/container queries, and as a result there's a non-trivial amount important details about your component or site's behavior and appearance in that `.css` file. Tailwind's inline styling-logic may look ugly, but it lets you stay focused the markup without needing to switch to a new window, verify you're looking at the correct class (and the only instance of that class), make sure that the specificity of the selector you're looking at means it will actually be the one that styles your component in the situation you're working on... the list goes on. 

### An example


Let's look at a rough version of the navigation bar at the top of the page. We have a series of links (in the component `<NavLinks />`) and we want to show them next to eachother on big screens and with a collapsible hamburger-menu on mobile (in the component `<CollapsingMenu />`.) 

#### Tailwind's version

<p class="file-title">navbar.tsx</p>

```html
<nav>
    <div className="sm:hidden pt-1.5">
        <CollapsingMenu />
    </div>
    <ul className="hidden sm:flex align-baseline gap-x-4 text-xl">
        <NavLinks />
    </ul>
</nav>
```

We have some fairly complex logic going on here. Starting with the top div, the class `sm:hidden` means that, after the viewport gets beyond the "small" size (default of `640px`) the div becomes hidden, aka hide the collapsing version of the menu when we don't need it. We also add a bit of top padding to balance the vertical alignment a bit with `pt-1.5`. 

Beneath that we have a `<ul>` tag that has the class of `hidden` on it. Meaning that it starts at hidden. Then `sm:flex` un-hides the div when we cross that small size threshold by setting `display: flex`. We also add a few classes to manipulate that flex container, aligning the content with align-baseline (`align-baseline`), adding a gap between the links (`gap-x-4`), and making the text larger (`text-xl`). 

#### The "traditional way"

We can recreate this logic in the traditional way, too. 

<p class="file-title">navbar.tsx</p>

```html title="my_file"
<nav>
    <div className="mobile-menu">
        <CollapsingMenu />
    </div>
    <ul className="main-menu">
        <NavLinks />
    </ul>
</nav>
```

<p class="file-title">navbar_styles.css</p>

```css
.mobile-menu {
    padding-top: var(--spacing-1_5);
}

.main-menu {
    display: none;
    vertical-align: baseline;
    column-gap: var(--spacing-4);
    font-size: var(--font-size-xl);
    line-height: var(--xl-font-line-height);
}

/* Adjust styles for when screen gets larger */
@media (min-width: 640px) { 
    .mobile-menu {
        display: none;
    }

    .main-menu {
        display: flex;
    }
}
```

The html looks cleaner, and the CSS doesn't look bad. 

However, imagine you are coming into this code base new (or having been away for a while) and you want to know why the heck there are two separate menus with links in the same nav, you will need to...
- navigate to the css
- remember and find the appropriate classes/ possible selectors
- trace those classes/selectors through their default states and then their media-query states
- rectify that with the markup. 

In theory you could (and should) make this easier with comments, but that's more verbosity and chances for things to get out-of-sync when updates happen etc.

In the tailwind version the styles for elements are right together and even the complex inter-linking of showing one menu and hiding another at a break point doesn't require moving your eyes more than a few lines. 


## Does it scale?

One thing I was worried about with this approach is that at a certain point you'd just have so many classes that you would spend as much time parsing the class list as you would tracing the external css. While my experience is still new and the project not crusty with layers of added features, this has proved to not be the case at all. 

**There really arent _that_ many ways to style an element. So in reality, you seem to hit an upper ceiling of complexity that is well within reason.**


## Next topics

I hope to continue this thread with some more surprising lessons I've learned from Tailwind. The next topics are roughly:

- Restrain choices while keeping enough flexibility enable creativity
- Gives a strong signal for where abstractions should occur (e.g. when to make break out some logic into a component)
- Great developer tools are _important_

