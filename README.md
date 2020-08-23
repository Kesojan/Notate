# hack-the-6ix
## Inspiration
As a group of university students from across North America, COVID-19 has put into perspective the uncertainty and instability that comes with online education. To ease this transition, we were inspired to create Notate — an unparalleled speech-to-text transcription platform backed by the power of Google Cloud’s Machine Learning algorithms. Although our team has come from different walks of life, we easily related to each others’ values for accessibility, equality, and education.

## What it does
Notate is a multi-user web conferencing app which allows for students to create and access various study rooms to virtually interact with others worldwide and revolutionize the way notes are taken. It has the capacity to host up to 50 unique channels each with 100+ attendees so students can get help and advice from a multitude of sources. With the use of ML techniques, it allows for real time text-to-speech transcribing so lectures and conversations are stored and categorized in different ways. Our smart hub system makes studying more effective and efficient as we are able to sort and decipher conversations and extract relevant data which other students can use to learn all in real time.

## Running/installing dependencies
To build our app: `gatsby develop`

To run temporarily: http://213e9fd78c37.ngrok.io
Note: video calling does not work through ngrok - if you'd like to test it out, build our app!

## to use speech-to-text, a google cloud api key is needed
## from your service account, get the json with the api keys and place it in a file called speech-to-text.json

## to run the speech-to-text api on express: from this directory, run `node src/api/index.js`


## How we built it
For the front end, we found an open source gatsby dashboard template to embed our content and features into quickly and efficiently. We used the daily.co video APIs to embed real-time video conferencing into our application, allowing users to actually create and join rooms. For the real time speech-to-text note taker, we made use of Google’s Cloud Speech-to-Text Api, and decided to use Express and Node.js to be able to access the API from our gatsby and react front end. To improve the UI and UX, we used bootstrap throughout our app.

## Challenges we ran into
In the span of 36 hours, perfecting the functionality of a multi-faceted application was a challenge in and of itself. Our obstacles ranged from API complexities to unexpected bugs from various features. Integrating a video streaming API which suited our needs and leveraging Machine Learning techniques to transcribe speech was a new feature which challenged us all. Having thought extensively regarding our goal and purpose, it was clear we had to immerse ourselves with new technologies in order to be successful. Creating a video streaming platform was new to all of us and it taught us a lot about API’s 

## Accomplishments that we're proud of
As a team we had successfully integrated all the features we planned out with good functionality while allowing room to scale for the future. Having thought extensively regarding our goal and purpose, it was clear we had to immerse ourselves with new technologies in order to be successful. Creating a video streaming platform was new to all of us and it taught us a lot about API’s and integrating them into modern frontend technologies. At the end we were able to deliver an application which we believe would be an essential tool for all students experiencing remote learning due to COVID-19.

## What we learned
Having access to mentors who were just a click away opened up many doors for us. We were effectively able to learn to integrate a variety of APIs (Google Cloud Speech-to-Text and Daily Co.) into Notate. Furthermore, we were exposed to a myriad of new programming languages, such as Bootstrap, Express, and Gatsby. As university students, we shared the frustration of a lack of web development tools provided in computer science courses. Hack the 6ix helped further our knowledge in front-end programming. We also learned a lot from one another because we all brought different skill sets to the team. Resources like quick, informative workshops, other hackers, and online tutorials truly gave us long-lasting and impactful skills beyond this hackathon. 


## What's next for Notate
As society enters the digital era, it is evident Notate has the potential to grow and expand worldwide for various demographics. The market for education-based video conferencing applications has grown immensely over the past few months, and will likely continue to do so. It is crucial that students can adapt to this sudden change in routine and Notate will be able to mitigate this change and help students continue to prosper.

We’d like to add more functionality and integration into Notate. In particular, we’d like to embed the Google Vision API to detect and extract text from user’s physical notes and add them to the user’s database of notes. This would improve one of our primary goals of being the hub for student notes.

We also see Notate expanding across platforms, and becoming a mobile app.  As well, as the need for Notate grows we plan to create a Notate browser extension - if the Notate extension is turned on, a user can have their Zoom call transcribed in real time and added to their hub of notes on Notate.




