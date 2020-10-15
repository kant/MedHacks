![logo](https://medhacks.org/assets/img/logo_dark.png)

Hackathon organized by Johns Hopkins University

## Application
Link to app: https://eyeonic.netlify.app

## Installation

Clone this repo to your machine and cd into the app directory:<br>
`cd medhacks/ionic-react-app`

If you don't have ionic CLI installed:<br>
`npm install -g @ionic/cli`

Install dependencies:<br>
`npm install`

And serve!<br>
`ionic serve`

# MedHacks2020, Track 2: Personalized medicine using data driven healthcare 
## The Problem
1-in-4 ER visits for eye-related problems are not actually emergencies, but for milder issues like conjunctivitis (pinkeye), blepharitis (swollen eyelids) and chalazion (eyelid bumps). Notably, certain populations, like younger people, men, those with lower incomes or dementia, and people of color, were more likely to seek emergency care for these non-emergency conditions. U of M's Brian Stagg suggests the lack of eye specialists in low-income areas, and the inability of younger and lower-income people to take time off from work for an eye appointment, could lead them to seek care in an ER at night or on weekends[1]. We seek to remedy this disparity in eye care across demographics.

[1]: https://www.sciencedaily.com/releases/2017/02/170214163629.htm

## The Solution
Our tripartite approach seeks to resolve this problem by leveraging education, accessibility, and technology. 
eye-onic is comprised of an AI-powered camera that detects superficial abnormalities in the eye and a chatroom with our conversational eye-expert bot, Electron. Electron provides eye-onic users an informal, initial diagnosis after prompting for further information. Importantly, Electron offers a safe, confidential space to users to have their qualms addressed and to ask eye care-related questions—all in the convenience of a mobile app. 

Using this approach we want to curate a dataset of edge cases that will have information about images/conditions where doctors disagree and complicated medical cases.

## How we built it
eye-onic's frontend is written in TypeScript and utilizes the Ionic React framework. This allows one codebase to be used for Web, iOS, and Android development! eye-onic's backend consists of machine learning with FastAI, PyTorch, Python and Google Cloud GPUs.
Try it out [here](https://github.com/MedHacks2020/MedHacks/blob/master/ionic-react-app/app-debug.apk).

## Challenges we ran into
For some of us, MedHacks2020 was our first hackathon. For others, it was our first remote hackathon. Learning new technology on the fly is also challenging, albeit rewarding.

## Accomplishments that we're proud of
Jiamin: I learned JavaScript a month ago and I'm pretty satisfied with the progress I made, considering this is the first time I've worked with React. 
Logan, Krishna, Jahnic: ML with FastAI, PyTorch, Python. We set up GPU instances on GCP. We played around with pre-trained models and hyperparameter tuning. We also hand-curated/labeled the dataset from the internet for machine learning classification. 

## What we learned
- False Positives: How to reduce them. (E.g a person had an eye problem and we did not refer him /her to a doctor).
- Legal Issue: Using suggestive language rather than imperative. Disclaimer to cover ourselves.
- The ML model is as good as your data. We noticed that images were incorrectly labeled. Model confusion can be used to curate and scrub input data.
- User experience

## What's next for eye-onic
- Continuous data collection over time
- Establish a pseudonymized data-sharing pipeline to provide insights to medical professionals
- Increasing the dataset size, thus improving the accuracy of classifiable disease types
- We also want to implement a patient follow-up feature after a certain amount of time after an action is suggested

[Presentation here](https://github.com/MedHacks2020/MedHacks/blob/master/MedHacks.pptx).

## Devpost

Link to devpost: https://devpost.com/software/eye-onic
