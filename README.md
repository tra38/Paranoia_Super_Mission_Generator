## Paranoia_Super_Mission_Generator

## Table of Contents

  - [Instructions](#instructions)
  - [Itty.Bitty.Site](#ittybittysite)
  - [Credits](#credits)
  - [Dev Notes](#dev-notes)
    - [Background](#background)
    - [Complications](#complications)
  - [License and Other Legal Information](#license-and-other-legal-information)

## Instructions
1. ```git clone``` the repo.

2. ```bundle install```

3. ```ruby main.rb```

You will receive a prompt to "name" your mission. That name will serve as a seed that will be used to generate the mission in question (which will be formatted using Markdown). You can copy this generated mission over to a text file for you to view, edit and share to your heart's content.

The generated mission also includes a URL to a website hosted on [https://itty.bitty.site/](https://itty.bitty.site/edit). You can view, edit, and share the generated mission using that URL as well.

Look at EXAMPLE.md to see how an example generated mission might look like. I recommend generating multiple missions and picking and choosing what elements you want (customizing it to match your own purposes). Secret society missions are pretty generic and will probably require some major customizations (or even to be re-written from scratch) to match the mood and style of your mission.

## Itty.Bitty.Site
The generated URL is very long. This is because the URL actually contains the *generated mission text*, just mostly compressed (think of it like a zip file). itty.bitty.site decompresses the URL, allowing us to see the content.

This feature is actually very cool. It allows us to easily transmit files (just copy and paste the URL). But, it also means that this site only functions properly with browers that can handle long URLs.

According to [this SO answer](https://stackoverflow.com/a/417184), our generated link will function properly for Google Chrome, Firefox, Safari, and Opera (but will not work with Edge or IE11).

## ```railroad.rb```

```main.rb``` is useful if you want to generate a mission based on a specific title, but you don't care what text is being generated. However, sometimes, you may prefer the opposite: you don't care about the title, but you *do* care what text is being generated. That's where ```railroad.rb``` comes in.

When you run ```ruby railroad.rb```, instead of being prompted for a word prompt, you are prompted for a search term. We will then continually generate missions until we finally find the mission with that search term, and then present that mission to you. Essentially, you are 'railroading' the generator to produce the output you want.

Here's an example tutorial for using ```railroad.rb```.

1. ```ruby railroad.rb```
2. When it prompts for a search term, search for "A Troubleshooter team has gone rogue and is currently conducting an unauthorized Troubleshooting mission"
3. See the generated mission with that search term included!

If you want to know what you can search for, look in ```lib/mission_generator.rb``` for a list of possible stuff that we can generate.

If we cannot generate a mission with your search term within 10 seconds, we simply give up. There's two possible explainations for why we failed:

 - The term is so rare that it's almost impossible to encounter through our "brute force" approach. Note the phrase *almost impossible*, not impossible.  Rerun the program again with your search term, and you might get lucky! (Example: Search for "alex". Most of the time, the search will fail...but very rarely we might succeed in, say, generating a mission with the title "C**alex**pre".)
 - We can't actually generate that search term, no matter how hard you try. (Example: We do not use the character "¿" anywhere in our program, so if you try searching for it, you are 100% likely to encounter failure.)

## Credits
In addition to writing out my own material, I used the following supplements from the PARANOIA XP line:

 - The Paranoia XP GM's Screen, specifically the Mission Blender (almost all of it)
 - The Traitor's Manual, specifically the "Illuminati Motivation Table of Doom" (provides additional motivation to the NPCs as well as complications to the mission)
 - Criminal Histories (the different "job types" in Alpha Complex)
 - Internal Security (additional missions, complications, and locations)
 - The Thin Green Line (additional missions and complications)

The name generator uses names from an example [email generator built using Calyx](https://github.com/maetl/calyx/blob/master/examples/faker.rb), and the generator itself was inspired by the [Faker](https://github.com/stympy/faker) Ruby gem.

The personality generator came from the [Cyberpunk City Generator](http://orteil.dashnet.org/randomgen/?gen=jDryXCLa), which uses traits from [Hearts of Iron 2](http://www.paradoxian.org/hoi2wiki/index.php/Minister_Traits) and ["Blood, Words, and Money: Organizations and Factions"](http://lotbieth.blogspot.com/2014/02/blood-words-and-money-organizations-and.html).

The fake word generator (which I used to come up with random names to objects, including R&D devices) came from anticoders' [fake-words](https://github.com/anticoders/fake-words/blob/master/index.js).

## Dev Notes

This program is my take on the famous "Mission Blender". There is already [an online version of the Mission Blender](http://www.highprogrammer.com/cgi-bin/mission_blender) when I started work on this project, but that project required me to "think" how to merge all the randomly-generated items together. What I wanted is a system that automates as much of the mission-generation process possible. Some human effort is still needed at the end of the day (because the goal of a tabletop RPG session is to entertain humans, not bots), but will be used more efficently - curating and refining the generated output.

The format of the generated mission is usually self-explanatory, but I like to explain two things.

### Background
The "background" at the start of the mission is based off the format in most professionally published PARANOIA missions, where the GM is given some details about the covert dealings that is responsible for the current mission. The PCs may (or may not) be able to discover what's going on (and it's possible the PCs may not even care). But there is usually a reason behind the madness (which tends to help the GM improvise even more madness on-the-fly).

The "Mission Blender" attempted to approximate this "background" material by starting off with the slogan "PARANOIA is the \[**IRRATIONAL**\] \[**FEAR**\] that \[**SOMEONE**\] is \[**OUT TO GET YOU**\]", and having you roll on charts to find out certain mission elements that can be associated with the highlighted words. While nice in theory, it felt flat in practice since there was not really much connection between those elements and the rest of the mission.

So instead, for my generator, I created my own "background" template, based off a sterotypical power struggle between a low-clearance "underdog" fighting against a high-clearance citizen (the "overdog"). The rest of the generated mission would refer to this power struggle, providing an overall sort of "unity" to the final output.

The content in the Mission Blender's approximation tables would wind up being reused in other places (for example, as possible generated missions for the player to be on...or as "complications" for the players to encounter).

### Complications

The "complications" section is my attempt to implement Step 2 of ["The Adventure Funnel"](http://xbowvsbuddha.blogspot.com/2006/10/adventure-funnel.html) (a manual approach to generating tabletop RPG adventures). Step 2 requires the GM to generate obstacles that stands in the way of the PCs' goals (after all, without any obstacles, the PCs' job would be easy and we wouldn't have much of a game). I chose the name "complications" rather than "obstacles" (since the supplements **Internal Security** and **High Programmer** uses the term when describing how to generate missions), but they mean pretty much the same thing.

Many PARANOIA missions tend to have certain weird scenes, events, and even whole missions that are almost loosely connected to the main plotline, serving as complications for the PCs to overcome (or at least run away from). So it's almost paramount that I include "complications" into my mission generation (regardless of the name I assigned to it).

The vanilla mission blender does not really reflect "complications" except in its approximation of generating "background" material above. What I did is to create a huge table containing possible complications the PCs may face while doing their mission, and then randomly pick possible complications.

The Mission Blender does a good job with Step 1 (as it already generates a goal for PCs to fight for), and with enough generated details, it's usually very easy for GM to manually perform Step 3 (adding details to the generated goal and complications) on their own.

## License and Other Legal Information

*Software* - MIT License.

*Content* - PARANOIA is a trademark jointly held by Eric Goldberg and Greg Costikyan and used under exclusive license by Mongoose Publishing. All trademarks are © their respective owners.

If you wish to have your material removed, receive credit for an idea, or to contribute your own ideas to this generator, please open up a GitHub Issue/Pull Request.