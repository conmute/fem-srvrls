# Intro To serverless

Course listening from <https://coursehunter.net/course/vvedenie-v-serverless-functions>

## Log

**2020-10-19 06:55:32 (Mon)**

Note `killall node` <- makes sure u have no running node deamons…

Or `lsof -i :888` show everything running under the mentioned port

**2020-10-19 04:40:12 (Mon)**

`ntl init`

created new site &… chosed prefered options and then auther with github account

use `ntl open` to open site dasthboard

**2020-10-18 19:54:41 (Sun)**

Used old `heroku` signup & sign up to `hasura` with `win.maklin@gmail.com` account and got

```
postgres://twfpnryesjottz:fde6cb52ada7f9f85b4353b442f2c53a4843da73642c3a9407fe6d4d0093fea5@ec2-52-200-82-50.compute-1.amazonaws.com:5432/d96iipr02dke0a
```

and

```json
{
    "api": "https://awake-jay-90.hasura.app/v1/graphql",
    "id": "9bcae1e4-cb88-448c-9d1b-dcca02dc7e6a",
    "name": "awake-jay-90"
}
```

ALSO:

`OMDB_API_KEY` — get this from https://omdbapi.com/
`HASURA_API_URL` — get this from https://hasura.io/
`HASURA_ADMIN_SECRET` — get this from https://hasura.io/

**2020-10-17 17:26:20 (Sat)**

Registered for OMDB Api:

```
Here is your key: b05ab861

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b05ab861

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=9e111226-07a5-403d-8a62-65c69b3a6b20
If you did not make this request, please disregard this email.
```

with <https://temp-mail.org/en/view/a9c7e604527a1791b1a3bea7537546c8> for <jediti3638@ofdyn.com> email

**2020-10-17 15:21:58 (Sat)**

*Step 1*: Runned `npm install -g netlify-cli@latest`

*Step 2*: Cloned the project:

`git clone --branch start https://github.com/jlengstorf/frontendmasters-serverless.git`

*Step 3*: `npm i`

*Step 4*: `ntl dev`
