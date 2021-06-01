# discord-auto-status-change-script
Auto discord status change using reverse engineered API.

# How to use
1. Clone te repo
2. Type `npm install`
3. `Create .env file like in .env-copy in the project's folder`
4. Get the authorization token from web, open dev console ctrl+shift+i in discord or in the browser, then change your status and see "PATCH" requests which contains "Authorization value".
Set it in the env variable `AUTHORIZATION=your_token`
5. Run script `npm start`

6. Done!

Credits: D o u g l a s#1353 for the idea.
