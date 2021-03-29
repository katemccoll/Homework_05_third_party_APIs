# Homework_05_third_party_APIs
Creating a work day scheduler

Creating a calendar app that allows user to save events for each hour of the day.This will run in the browser and powered by jQuery.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


This link for the time https://momentjs.com/

# Start of the project

## What we have
 
This week's homework we are given our html and CSS done or mostly done? 

<img src="Assets\Starting Point\HTML.JPG">
In our html, the header is there with the text underneath. I just need to add the date format underneath the text then the header is done.

Then we need to add in our hour blocks (timeblock). They are colour coded as well:
Grey - Events that already happened
Red - Current hour
Green - New Event or Change event. 
So in the Green you can still change the event where as the red and the grey you should not be able to change.

We have three columns. First (thin) is each hour, middle (most of the width) is the events and last (thin) is a save button. When this is pressed, it saves the change you have made in the events column. Saves it to local storage.
Last note: The hours are only including the standard business hours - 9am to 5pm.

### Index html

We are given serval links and scripts:
Bootstrap - this is a CSS so most likely used for our save symbol icon.
Two Fonts - Font Awesome and Google APIs
jQuery
Moment - Time page

They have an id in their second p tag that says currentDay. So the code is there, but it is not working. Lets check that out.

### CSS

First - no id for current day, so will need to add that.

We have a few classes that are currently not being used.

### Break Down
1. get the date in the p tag working. 
2. create the columns
3. create timeblock - rows
4. hour
5. save button
6. description - start with empty string
7. local storage
8. Colour coded blocks



## Header

For our header, all we needed to add was the date which is donne by using moment.js

<img src="Assets\Added_Date.JPG">

## Layout
Using bootstrap, we can work out the layout that is needed. We needed two small columns and a large one in the middle. At this point I looked at my style sheet that was given to me to add in the classes in the HTML.

<img src="Assets\Layout.JPG">

After this I realised that there was one of two ways of moving a head. One I could write out blocks in my HTML for the different hours. Or I could put it into a loop and repeat it 7 times. Second option seems like the nicer way to go as the code will be cleaner by the end of it.

## Save Button
Now that the layout out is sorted, time to fill them in. The save button has an icon, which I found with bootstrap. I went to my javascript and started writing the code that I needed. The save button when it is clicked needs to be able to save the new description within the time block that it is written in. So when the page is reloaded, it will still be there. I do need to do my description and time first before I finish this part of the code off.

<img src="Assets\Time-blocks-added.JPG">

## Hours
On the left column, I need to add in the hours. I can do this by adding onto my loop that I created for my layout. So with each new row, an hour will be added.

<img src="Assets\Hours_added.JPG">


## Save Button Again
Now that I have my hours completed. Time to move on to my description and get that save button working.
For this I need to create my local storage and save any changes to this. Writing in the save button function body, I add the local storage set item. Then for it to know which hour to save too, I add the description into the loop and create my row index. This row index is in charge of the hour, description and save button of each row.
I have put the get item from local storage in my global scope, so when the page is reloaded, it will be there straight away.

<img src="Assets\Saving_Button.JPG">

## Colour Coded
Colour coded blocks are to tell us which hour is currently in the present, past or future. For this, I used moments.js to keep my up to date with what hour it is. I did this by comparing real time with the hours that I have on the scheduler. 
Once I linked this up, I realised that this would only work if I reloaded the page, that it wouldn't change by itself. So I added setInterval for every second. This way if the user leaves the page up all day, it will continue to change as the hours past without the user having to reload.

<img src="Assets\Colour_coded.JPG">


# Results
Here we have a functioning Work Day Scheduler that you can add appointments in and save them. The colour coded blocks will keep you up to date without having to check the time.

<img src="Assets\Finished.JPG">
