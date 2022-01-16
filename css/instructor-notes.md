# CSS Instructor Notes

CSS stands for Cascading Style Sheets. CSS is the language for modifying the presentation of a web page. CSS is a markup language that changes the user interface. CSS will alter colors, layout, and fonts.

CSS doesn't exist without HTML. If we make an analogy using a building we can think of HTML as the structure, the steel beams, the wooden studs and drywall that make up the layout of the rooms. Then JavaScript is the wiring for electricity and plumbing. JavaScript is the action. But it can only exist after the structure of the building is established. Then we have CSS. CSS is the carpeting, the paint, the crown moulding. All the extras that make the building look appealing. But just like JavaScript, CSS only exists to modify the HTML.

So let's jump in and see how this all works together.

The first step is that we need to make another file. CSS is its own language and it has its own syntax so we will store it in a file with the extension `.css`.

And we need to connect the CSS file to the HTML file. In this situation we are making a dependency file. Meaning that we want our CSS file to be processed every time the HTML file runs. So we are going to make a link to the CSS file in the head tag.

<link rel="stylesheet" href="testing.css">

So CSS modifies the look of HTML tags. There are three ways we can target HTML tags. The first way is that we can just use the name of the tag. The other two ways involve adding attributes to the HTML tags.

Let's start with just targeting the body tag. I like to make sure everything is working correctly by just doing something super obvious that will tell us the files is connected.

In the CSS file we need to write the name of the body tag then open a set of curly braces. Inside the curly braces we can pass collections of properties predefined by CSS and values for the property.

For example, let's make the background of our game red. It is a quick way of figuring out if our file is connected correctly.

body {
  background-color: red
}

Well that is definitely working. CSS will recognize quite a few color names.

purple
aquamarine

Or if you care for a more nuanced color we can go pick out a color using a six-digit number also known as a hex color code.

Google: css color codes
CSS Colors - W3Schools - will give all the names and the corresponding hex code that begins with a hash mark.

Google: css color picker


Let's do some styling on the header tag of our game. We can center the text and change the color of the text.

h1 {
  text-align: center;
  color: #536169
}

I will tell you right now that positioning content in CSS is incredibly difficult. It will be harder than you feel like it should be. But the reason is that center is an arbitrary term. To center something you have to have defined edges and web browsers don't really work that way. Especially when you start to consider all the different devices that we use. Once upon a time you only needed to make a website look good on a computer monitor. Now we have wide screens, mobile devices that can be used in landscape and portrait mode, tablets, TVs, watches, etc. And the practice of making a website look good on lots of different devices is called responsive design. And it doesn't just happen. Like everything in development someone has to apply it to the app.

So let's try and center the table that is our gameboard. Let's apply the same code from the header.

table {
  text-align: center;
}

But nothing. The problem is that table is a tag that doesn't contain text. It contains other tags. So we need a way to center a group of tags.

To do this we need to cover two concepts. First is called the box model. The box model outlines the space each HTML tag, or element, takes up on the screen. And the space an element takes up is more than just the text or image we see. It also includes the space around the element. And luckily we have some tools provided by Google Chrome that will help us visualize the HTML elements and the styling on the page.

Box model

We can see the table has the blue portion which is the element and the margin takes up the rest of the width of the browser. So since we can't just "align" the text, we can use the margin to center than content. if we put equal margin on both sides it will, by default, center than content. So that means we need to so some research.

Google: CSS margin, select W3School

Shorthand - can pass multiple values to a single tag.

(Sets the element's left and right margins to auto, and the top and bottom margins to 0.)

table {
  margin: 0, auto;
}

I also want to add a border to my gameboard.
Google: CSS border
Select border shorthand - which allows us to pass three properites - border width, border style, border color


Note that the styling is only applying to the table element.
(Look at the table in the browser.)

I want to put borders on my individual squares as well. And I need to increase the sizes of my individual squares.

As well as the font-size of my question marks.

td {
  border: 2px dashed black;
  font-size: 75px;
  width: 100px;
  height: 100px;
  text-align: center;
}

Now here I can use the text-align center because there are no nested tags.


Adding a div to wrap the rules section.
Add a red border to see how much space an element takes up.

Add an id or a class.


Center the image
img {
  text-align: center;
}
This doesn't work. Put a red border on it.
img {
  border: 2px solid red;
}
So when you are trying to center the img you are actually doing it because this the the space the img is taking up. So we need to define space for the img.

<div id="treasure-pic">
  <img id="treasure-pic" src="./treasure.png" height="200px" alt="treasure box">
</div>
#treasure-pic{
  text-align: center;
}


Google:
desert island
then, desert island cartoon
pick: desert island joke

Google CSS background
Go to background-position - center

body {
  /* background-color: #e8f5fc */
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Noto_Emoji_Pie_1f3dd.svg/1200px-Noto_Emoji_Pie_1f3dd.svg.png);
  background-position: center;
  background-size: cover;
}

background color of the gameboard - white


Flexbox froggy

- flex box
- animation/keyframes


### Centering
- margin: 0 auto; As long at the element has a defined width, this will center it - wrap the image in a div and apply margin: 0 auto
- width: max-content; fits the width of your element based on the exact width of the content inside of it, good for responsive design or text content that will change
- transitions: ease-in-out .2s; good for hover animations, use on the original element not the :hover element for a mouse hover effect
