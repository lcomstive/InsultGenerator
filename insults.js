/*
MIT License

Copyright (c) 2017 lcomstive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
let insultElement = undefined

// All insults from https://imgur.com/dXCGBE0
let insultsFirst = [
	"Lazy",
	"Stupid",
	"Insecure",
	"Idiotic",
	"Slimy",
	"Slutty",
	"Smelly",
	"Pompous",
	"Communist",
	"Dicknose",
	"Pie-eating",
	"Racist",
	"Elitist",
	"White trash",
	"Drug-loving",
	"Butterfaced",
	"Tone deaf",
	"Ugly",
	"Creepy"
]
let insultsSecond = [
	"Douche",
	"Ass",
	"Turd",
	"Rectum",
	"Butt",
	"Cock",
	"Shit",
	"Crotch",
	"Bitch",
	"Prick",
	"Slut",
	"Taint",
	"Fuck",
	"Dick",
	"Boner",
	"Shart",
	"Nut",
	"Sphincter"
]
let insultsThird = [
	"Pilot",
	"Canoe",
	"Captain",
	"Pirate",
	"Hammer",
	"Knob",
	"Box",
	"Jockey",
	"Nazi",
	"Waffle",
	"Goblin",
	"Blossum",
	"Biscuit",
	"Clown",
	"Socket",
	"Monster",
	"Hound",
	"Dragon",
	"Balloon"
]

refresh = () =>
{
	if(!insultElement)
	{
		alert('No insult element!')
		return
	}
	else
		insultElement.innerHTML = "Test"
	let index = Math.round(Math.random() * (insultsFirst.length - 1))
	insultElement.innerHTML = insultsFirst[index]
	index = Math.round(Math.random() * (insultsSecond.length - 1))
	insultElement.innerHTML += " " + insultsSecond[index].toLowerCase()
	index = Math.round(Math.random() * (insultsThird.length - 1))
	insultElement.innerHTML += " " + insultsThird[index].toLowerCase()
}

onLoad = () =>
{
	insultElement = document.getElementById('insult')
	refresh()
}
