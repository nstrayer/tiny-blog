---
title: 'Growing to appreciate Tailwind as a skeptic'
date: '2023-07-04'
---

Recently I began using tailwind for the first time. Tailwind is not new, but I had put off trying it due to an initial visceral reaction to its syntax. It is ugly.

I finally tried it, however, due to hearing an odd way of refering to it on a podcast by Kent C Dodds. He said that instead of using a css-in-js framework for styles, he was now using tailwind. Hearing this was initially confusing - they didn't seem like they were solving different issues - one was a series of overly-verbose utility classes and the other was a way to write css in a place it otherwise wouldn't be written. 

To rectify this seeming contradition I decided to try a project with it. You happen to be reading this (at least as I write it in July of 2023) on that project. A blog written using Next.js (another technology I felt the need to get hands-on experience with to understand.) Through the experience of setting up this blog and reading through all the Tailwind docs I have found myself slowly but very surely coming around to the "Tailwind way." I will attempt to list the revelations I have had throughout that process. 

### Minimize mental (and physical) distance you need to travel to understand your code

As I get deeper into my software engineering career one theme that has continued to become more and more imporant to me is how tightly you can focus in on a given section of code while updating it. There are lots of ways this can go _wrong._ For instance, having a million helper functions abstracted away may feel "clean" and modularized but if you constantly need to jump around in your editor to look at a helper function maybe to add a new argument or understand what it's doing you are forcing your brain to hold more in ram at once, giving you less room to come up with elegant and quick solutions to what you're trying to solve. 

External css is a perfect example of this. Now that CSS is a powerful tool with things like psuedo-classes and media/container queries there's a non-trivial amount important details about your component or site's behavior and appearance in that `.css` file. By keeping everything right inline with tailwind you can keep your mind focused on the markup without needing to switch to a new window, verify you're looking at the correct class (and the only instance of that class), make sure that the specificity of the selector you're looking at means it will actually be the one that styles your component in the situation you're working on... the list goes on. 

<p class="file-title">navbar.html</p>

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

Here we have some fairly complex logic going on. Starting with the top div, it has the class `sm:hidden` which means that, after the viewport gets beyond the "small" size (default of `640px`) then hide the div, aka hide the collapsing version of the menu when we don't need it. We also add a bit of top padding to balance the vertical alignment a bit. 

Beneath that we have a `<ul>` tag that has the class of `hidden` on it. Meaning that it starts at hidden. Then `sm:flex` un-hides the div when we cross that small size threshold and activates `display: flex`.  We also add a few classes to manipulate that flex container, aligning the content with align-baseline (`align-baseline`), adding a gap between the links (`gap-x-4`), and making the text larger (`text-xl`). 

We can recreate this logic in the traditional way too. 

<p class="file-title">navbar.html</p>

```html title="my_file"
<nav>
    <div className="mobile-menu">
        <CollapsingMenu />
    </div>
    <ul className="main-menu big-text">
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
}

.big-text {
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

Now we've separated the logic for styles and markup. The html looks cleaner, and the CSS doesn't look bad. However, if you are coming into this code base new (or having been away for a while) and you want to know what the heck two separate menus with links are doing in the same nav, you will need to navigate to the css, find the right classes, trace those classes through their default states and then their media-query states, then rectify that with the markup. In the tailwind you still have to do those steps, but you don't have to move your eyes more than a few lines. 



I read this point in the docs but I kept feeling like there must still be places where you're limited because you couldn't possible express complex logic this way. Turns out for whatever reason, it is _easier_ to understand that logic in Tailwind. It's all right there and beautifully declarative. 



### Restrain choices while keeping enough flexibility enable creativity

### Have great developer tools

