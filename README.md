# Baby Namer


## To use this as a template

1. Clone this project onto your machine (`git clone https://github.com/jleigh-100/template.git`)
2. Create a fresh repo on Github ([Click Here](https://github.com/new))
3. Clone that repo onto your machine (`git clone https://github.com/jleigh-100/[new project name].git`)
4. Copy and paste the entire file structure of this repo onto the new repo you've just cloned.
5. Inside your new repo, make sure to update:
    1. This README
    2. package.json name
    3. Title in client/public/index.ejs
    4. Others are listed [below](#things-that-youll-probably-want-to-change)
6. Commit and push all changes to your new repo (AFTER you've removed the old stuff - otherwise they will still show up in the commit history!)
7. Forget about this one and start working on your new repo!

### Things that you'll probably want to change:
[This README!](./README.md)
[the name of the project in the package.json](package.json#L2)
[The title of the index.ejs page](client/index.ejs#L4)
[Theme colours](client/src/theme/theme.json)
[Favicon](client/public/favicon.ico)
[App.jsx][client/src/components/App.jsx] - This uses the login page by default
[Login page](client/src/components/Login.jsx) - You might not want a login page..?
[Login API Router](server/routes/apiRouter.js) - Again, no login page means no need for login api
