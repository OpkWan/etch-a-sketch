# etch-a-sketch

Create a webpage with a 16x16 grid of square divs.

Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!

It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.

Use Flexbox to make the divs appear as a grid 

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

Set the limit for the user input to a maximum of 100.

Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.

Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.