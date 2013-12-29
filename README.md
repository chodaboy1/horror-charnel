horror-charnel
==============

This is a bit of client-side javascript used for custom filtering when browsing torrents in HorrorCharnel. It requires Chrome browser and injects a client-side script to do the filtering. It can filter by year, size and # of seeds.

Once set up per the instruction below, it will automatically filter whenever you browse torrents.

# Setup Instructions
1. Install Script Injector for Chrome from [here](https://chrome.google.com/webstore/detail/script-injector/gidddlfmjhjiibffpalikbecknoflfab)
1. In Chrome, open Script Injector and click on Manage Scripts
1. Under Manage Scripts, click "Create New Script".
  1. Give the script a name
  1. Paste the code from horrorcharnel.js into it
  1. Modify the config in the script to customize the filtering as needed
  1. Click "Add".
1. Under Manage Rules, click "Create a new rule".
  1. Give the rule a name
  1. Put the following as the URL: `http\:\/\/horrorcharnel\.kicks\-ass\.org\/browse\.php.*`
  1. Click "Add script at the end", pick jQuery.
  1. Click "Add script at the end", pick the script from step above.
