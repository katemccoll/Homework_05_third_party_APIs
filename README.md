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