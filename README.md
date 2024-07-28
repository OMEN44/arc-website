List of placeholder content to be replaced:

-   Join us link
-   Social media links
-   Date set for count down
-   Logo
-   Mission statement/landing page quote. (150 words or less) This is the first bit of text the user will see so it should be breif and explain the purpose of the team/website
-   List of successes/milestones. (No more than 20 words plus the year)

Place holder content to be double checked

-   The text content for the slide show on the landing page.
-   Find good pictures to use for slide show up the top and for side cards down the bottom.

**NOTES FOR DEPLOYMENT**
For whatever reason cpanel doesnt like newer versions of node so the node app that is run is a common js file that loads the actual app:

```js
async function loadApp() {
    await import("/home/roardvxe/app/dist/index.js");
}

loadApp();
```

The index that is loaded is the index.ts file in the project folder. Just relpace everything in the `dist` EXCEPT for the node_modules and package.json file with the output of `npm run build`.
