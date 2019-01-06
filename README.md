## Paranoia_Super_Mission_Generator

## Table of Contents
  - [Instructions](#instructions)
    - [Online](#online)
    - [Locally](#locally)
  - [main.rb](#mainrb)
  - [Itty.Bitty.Site](#ittybittysite)
  - [railroad.rb](#railroadrb)
  - [```custom_names.rb```](#custom_namesrb)
  - [Credits](#credits)
  - [Dev Notes](#dev-notes)
    - [Background](#background)
    - [Complications](#complications)
    - [Floaters](#floaters)
  - [License and Other Legal Information](#license-and-other-legal-information)

## Instructions

### Online

1. Go to [https://repl.it/@tra38/PARANOIASuperMissionGenerator](https://repl.it/@tra38/PARANOIASuperMissionGenerator).
2. Click on "run" to start up the program.
3. When it's fully loaded, you can choose between ```main.rb``` or ```railroad.rb```.

### Local Machine

1. ```git clone``` the repo.

2. ```bundle install```

3. If you want to run ```main.rb```, type ```ruby main.rb```. If you want to run ```railroad.rb```, type ```ruby railroad.rb```.

## ```main.rb```

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

1. Select railroad.rb if running the software online or type ```ruby railroad.rb``` if running locally
2. When it prompts you for a search term, search for "A Troubleshooter team has gone rogue and is currently conducting an unauthorized Troubleshooting mission"
3. See the generated mission with that search term included!

We also include an itty.bitty.site URL as well, for you to view, edit, and share to your heart's content.

If you want to know what you can search for, look in ```lib/mission_generator.rb``` for a list of possible stuff that we can generate.

If we cannot generate a mission with your search term within ~30 seconds, we simply give up. There's two possible explainations for why we failed:

 - The term is so rare that it's almost impossible to encounter through our "brute force" approach. Note that it is *almost impossible*, not impossible.  Rerun the program again with your search term, and you might get lucky! (Example: Search for "alex". Most of the time, the search will fail...but very rarely we might succeed in, say, generating a mission with the title "[C**alex**pre](https://itty.bitty.site/#/?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)".)
 - We can't actually generate that search term, no matter how hard we try. (Example: We do not use the character "¿" anywhere in our program, so if you try searching for it, you are 100% likely to encounter failure.)

## ```custom_names.rb```

In addition to generating the mission, ```main.rb``` generates the names of the two main characters of that mission - the overdog (a high-clearance authority figure) and the underdog (a low-clearance citizen rebelling against the authority figure).

However, you may prefer to come up with your *own* names for these citizens, rather than use our pregenerated names. This may be useful if you wanted to reuse characters from a previous adventure.

When you run ```custom_names.rb``` (either by selecting ```custom_names.rb``` if you are running the program online or typing ```ruby custom_names.rb```), you are first prompted to give a name prompt. Then you can see our generated names, and then modify them as you wish.

Once you are satisfied with the names, you can then continue onward with the mission generation process.

You can use ```custom_names.rb``` in conjunction with ```railroad.rb```. First, run railroad.rb to find a mission with your ideal search term. Save the generated title. Then use that title as the word prompt for ```custom_names.rb```, and then change the names of the two main characters in that mission.

## Credits
In addition to writing out my own material, I used the following supplements from the PARANOIA XP line:

 - The Paranoia XP GM's Screen, specifically the Mission Blender (almost all of it)
 - The Traitor's Manual - the "Illuminati Motivation Table of Doom" (provides additional motivation to the NPCs as well as complications to the mission) and the "Screwing with secret societies table" (complications)
 - Criminal Histories (the different "job types" in Alpha Complex)
 - Internal Security (missions, complications, locations, floaters)
 - High Programmer (mission backgrounds)
 - The Thin Green Line (missions, complications)
 - Mandatory Mission Pack (missions, locations, rumors)
 - Troubleshooters/XP Rulebook (misisons, complications, floaters)

The name generator uses names from an example [email generator built using Calyx](https://github.com/maetl/calyx/blob/master/examples/faker.rb), and the generator itself was inspired by the [Faker](https://github.com/stympy/faker) Ruby gem.

The personality generator came from the [Cyberpunk City Generator](http://orteil.dashnet.org/randomgen/?gen=jDryXCLa), which uses traits from [Hearts of Iron 2](http://www.paradoxian.org/hoi2wiki/index.php/Minister_Traits) and ["Blood, Words, and Money: Organizations and Factions"](http://lotbieth.blogspot.com/2014/02/blood-words-and-money-organizations-and.html).

The fake word generator (which I used to come up with random names to objects, including R&D devices) came from anticoders' [fake-words](https://github.com/anticoders/fake-words/blob/master/index.js).

## Dev Notes

This program is my take on the famous "Mission Blender". There is already [an online version of the Mission Blender](http://www.highprogrammer.com/cgi-bin/mission_blender) when I started work on this project, but that project required me to "think" how to merge all the randomly-generated items together. What I wanted is a system that automates as much of the mission-generation process possible. Some human effort is still needed at the end of the day (because the goal of a tabletop RPG session is to entertain humans, not bots), but will be used more efficently - curating and refining the generated output.

The format of the generated mission is usually self-explanatory, but I like to explain three things.

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

### Floaters

The *Internal Security* rulebook talks about "floating clues" (clues that players may encounter during the course of gameplay, no matter what they do), and extended that motif to "floating evidence" that players may also encounter during the course of gameplay.

"Floaters" is my generalization of this very concept - players may encounter this type of content during the course of gameplay. No matter what they'll do, they'll stumble upon it. Player freedom is protected (as the context by which they encounter the content will affect how the content 'fits' into the rest of the mission), while reducing the need for the GM to improvise on the fly.

I was inspired by the [The Computer's Paranoia XP RPG Tool](https://rpgsheets.retrofix.net/paranoia_gear/), which included a Mission Blender that displayed some 'random content' (like Random Bureacracies, Random 'PLC Equipment Denials', and Random Bystanders) that GMs can use when dealing with players' schemes and plans.

## License and Other Legal Information

*Software* - MIT License.

*Content* - PARANOIA is a trademark jointly held by Eric Goldberg and Greg Costikyan and used under exclusive license by Mongoose Publishing. All trademarks are © their respective owners.

If you wish to have your material removed, receive credit for an idea, or to contribute your own ideas to this generator, please open up a GitHub Issue/Pull Request.