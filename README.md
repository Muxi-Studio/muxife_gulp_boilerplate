# muxife_gulp_boilerplate

> A gulp boilerplate for creating web projects 

## Dependencies

- [x] gulp
- [x] Google ES5
- [x] AirBnb ES6 
- [x] ESLint
- [x] sass-Lint
- [x] csscomb
- [x] postcss
- [x] http-server

## How to use

### Install
	$ git clone https://github.com/Muxi-Studio/muxife_gulp_boilerplate.git <yourAppName>
    $ cd <yourAppName>
    $ npm install
    
### Plugins needed

**Sublime Text**

- [x] CSScomb
- [x] SublimeLinter
- [x] SublimeLinter-contrib-eslint
- [x] SublimeLinter-contrib-sass-lint

**browser**

- [x] LiveReload

### When Develop

_A new dir(build) will be created to store compiled files_

- `$ gulp dev`

	- Compile Sass into CSS 
	- Compress html  css   js  files and  images

- Can also run `$ gulp watch` instead of `$ gulp dev`

	- The project will be `gulp dev` first
	- spy on files  

- Run `$ http-server` and turn on the LiveReload plugin in your browser 

- Enjoy Coding!

### When Build

_Files are in dist/_

- Comb the scss codes

- `$ gulp lint`

	-  To make sure all codes follow the rules

- `$ gulp build`
	
	- Compile Sass into CSS 
	- Compress html  css   js  files and images
	- Suffix with 'min'
	- Add sourcemap

- Good Luck!
	
## Licence

MIT

    