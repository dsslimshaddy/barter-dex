import green from 'material-ui/colors/red';

export const ROOT_DEX = '/home/slim/gitRepos/sprnt/SuperNET/iguana/dexscripts/';
export const HOME = require('os').homedir()+"/.barterdex/";
export const userpassscript = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/userpassscript.sh';
export const SCRIPT_NAME = 'userpassscript.sh';
export const __URL__ = 'http://127.0.0.1:7783';
export const clientscript = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/client';
export const getcoinsscript = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/getcoins';
export const enable_myscript = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/enable_my';
export const marketmakerExe = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/marketmaker';
export const coinsJSON = 'https://github.com/dsslimshaddy/barter-dex/releases/download/0.0.1/coins.json';
export const stylesY = theme => ({
	  bar: {},
	  checked: {
	    color: green[500],
	    '& + $bar': {
	      backgroundColor: green[500],
	    },
	  },	
	AppBg: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    height: "100%",
	    width: "100%",
	    zIndex: -1,
	    background: theme.AppBg,
	},
	AppSection: {
		background: theme.AppSectionBg,
	},
	AppSectionHeader: {
		background: theme.AppSectionHeaderBg,
	},
	root: {
		color: theme.RootColor,
	},
});


export const maxPinLength = 10;
export const algorithm = 'aes-256-ctr';