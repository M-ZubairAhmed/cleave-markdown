<p align="center">
  <img src="https://i.imgur.com/GhH5qXWt.png"/>
</p>
<h1 align="center">Cleave-Markdown </h1>

[![NPM](https://nodei.co/npm/cleave-markdown.png?mini=true)](https://nodei.co/npm/cleave-markdown/) [![npm version](https://badge.fury.io/js/cleave-markdown.svg)](https://badge.fury.io/js/cleave-markdown) [![Build Status](https://travis-ci.org/M-ZubairAhmed/cleave-markdown.svg?branch=master)](https://travis-ci.org/M-ZubairAhmed/cleave-markdown)

_A markdown splitter tool for slicing coderplex learn guides to small markdown files based on custom identifier_

### Installation

`npm install --save-dev cleave-markdown`

### Usage

`./node_modules/.bin/cleave-markdown`

### Running

#### Directory path

This is a required option. Include the path to markdown guide file.

`./node_modules/.bin/cleave-markdown --file ~/sampleGuide.md`

#### Verbose output

Optional argument that displays the folder structure `cleave-markdown` has created from the guide file.

`./node_modules/.bin/cleave-markdown --file ~/sampleGuide.md --verbose`
