# Upload database of students onto firestore project

Edit data and prepare project environment to upload a json file into firebase to use as actual data.


### Setup the environment

Install required dependencies:

```bash
npm install
npm update or npm install --save firebase-admin #if needed
```

### Preparing database to upload

Within this directory, create a serviceAccountKey.json file and paste the secret key downloaded from firestore into this file.

Replace the content in groups.json with the actual data you want to upload onto firebase. 
Should you change the name of the json file, remember to do the same for line 3 of the code in upload.js

Replace line 4 in upload.js with a collection name that you like. 

### Upload file into your firestore project

```bash
cd SpaceAllocationProject\src\api\import-export-data
node upload.js
```

You should see the various documents being uploaded.


