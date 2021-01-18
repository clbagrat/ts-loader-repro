### Expected Behaviour
imported json file has to be copied to a build folder, along with d.ts files.

### Actual Behaviour
imported json file doesn't get copied to a build folder.

### Steps to Reproduce the Problem
clone https://github.com/clbagrat/ts-loader-repro
run `npm run build`
check that `/builld/config/config.json` doesn't exist.

### Steps to Reproduce expected behavoiur
clone https://github.com/clbagrat/ts-loader-repro
run `tsc`
check that `/builld/config/config.json` exists.

### Location of a Minimal Repository that Demonstrates the Issue.
https://github.com/clbagrat/ts-loader-repro
