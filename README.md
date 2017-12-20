<p align="center">
  <img src="https://i.imgur.com/GhH5qXWt.png"/> 
</p>
<h1 align="center">Markdown Cleave</h1>
<h2 align="center">A markdown splitter tool for slicing coderplex learn guides to small markdown files based on custom identifier
</h2>

[![NPM](https://nodei.co/npm/cleave-markdown.png?mini=true)](https://nodei.co/npm/cleave-markdown/) [![npm version](https://badge.fury.io/js/cleave-markdown.svg)](https://badge.fury.io/js/cleave-markdown)

### Installation

`npm install --save-dev cleave-markdown`

### Usage

`node ./node_modules/cleave-markdown`

### Running

#### Directory path

This is a required option. Include the path to markdown guide file.

`node ./node_modules/cleave-markdown --dir ~/sampleGuide.md`

#### Verbose output

Optional argument that displays the folder structure `cleave-markdown` has created from the guide file.

`node ./node_modules/cleave-markdown --dir ~/sampleGuide.md --verbose`
