--- 
layout: post
title: "Studio vs Rojo vs TypeScript"
data: 2022-04-25
categories: "Coding"
---
Throughout my timing coding for ROBLOX games I've identified 3 main paradigms: development in Studio, development using Rojo, and development using TypeScript. Here I hope to expound on the differences and advantages of each paradigm.

<h2>Studio</h2>
<h3>Advantages</h3>
While it may seem like a simple way to develop, Studio actually has numerous benefits. Firstly, most ROBLOX code is written directly in Studio, usually out of ignorance for other options, and such if you want your project to be expandable, and have many possible developers of different skill level working on it, then you needn't look any further. The fact is using any other options grealty increases the barrier to entry of your codebase, which you may not want, especially if you're going to be cycling through developers. It also means that, should ROBLOX add new features, your development environment will always remain up-to-date, while other services may need to update. The built-in team create is also a very good and useful alternative to Git for allowing multiple people to work on the project.
<h3>Disadvantages</h3>
All that being said though, Studio has it's issues. With no built-in linter, and limited warnings and errors surround impromper type use, it becomes very easy to write buggy, nonsense code. Enforcing type usage helps with this, but there still remains no option to automatically enforce it in the Studio. The closest you can get is 'strict', which is a silly name, because it doesn't even require you to use types, you can completely ignore it if you want. Also the standard ROBLOX require is a mess, having to keep track of the directory of the file you're including can be tedious, and require renaming in multiple files, there is no automatic changing.

<h2>Rojo</h2>
<h3>Advantages</h3>
Rojo development in VSC or other text editor manages to vastly out perform Studio in many ways. Free linters like Selene are extremely powerful, and force you to write good code. Allowing you to change default type checking to 'strict' is also nice, though it does have the same issues Studio does, with slightly more informative error messages. While representing a barrier to entry, you are still coding in Luau, which means that you can still use the wider talent pool of developers, without having to catch them up on too much. Proper versioning implemented with Git also allows for a much more uniform and stream-lined development process.
<h3>Disadvantages</h3>
While Rojo in VSC tries its best to bring Luau up to modern programming standards, it still comes short. Not only are Luau types still vastly underpowered compared to their TypeScript counterparts, but also rather clunky. Also remains the issue of Luau thinking 'strict' means types are still optional. Path names also become frusturating, in Studio at least the paths was right there for you to record, in Rojo though the location of each file specifically is determined when the place is made into a ROBLOX game, there is no way to require a module using the file system path, only the ROBLOX data tree path.

<h2>TypeScript</h2>
<h3>Advantages</h3>
ROBLOX-TS brings all the power of modern TypeScript to ROBLOX, and it manages to make a huge impact. Fully fledged TS type checking is a wonder to work with in comparison with Luau's, not to mention the numerous program struct improvments that come from working in the JavaScript paradigm. Not only this but Git integration becomes even more powerful, now that all of your code is in TypeScript you can make use of testing frameworks like CI/CD to make sure you never again ship a bug to production.
<h3>Disadvantages</h3>
Really the only downside to using TypeScript is the learning curve. Not only is it generally more difficult to learn than Lua, but it also shares almost nothing in common, meaning for an developer with no previous experience, it represents a large learning curve. Furthermore it severly reduces your potential talent pool, there are NOT a lot of TypeScript devs on ROBLOX.

<h2>Conclusion</h2>
Personally I would say the decision between Rojo and TypeScript largely comes down to the project. For solo projects where it's unimportant if you can find other devs to help, TypeScript represents a significanlty more powerful language than Luau. If instead your project needs to be able to draw from other devs, I think biting the bullet and setting up Git for your project in order to use Rojo is worth it. While not as simple as Studio development, it represents the largest bang for your buck in terms of add complexity to improved coding. I would never recommend using Studio unless working on a legacy program entirely in it, and even then, migration should be on the to-do list.