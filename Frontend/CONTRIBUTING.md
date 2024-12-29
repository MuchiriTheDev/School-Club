How to Contribute to DSAIC Website

Contributing Procedure

Find an Issue to Work On

You can contribute by either creating an issue or choosing one from the available open issues.

1. Submit an Issue

Create a new issue.

Comment on the issue to be assigned to it.


2. Open Issues

Go to the open issues.

Select an issue labeled as open, need help, or up-for-grabs that isn’t assigned yet.

Comment to be assigned to it.


Fork the Repository

If you're not familiar, here’s a guide on how to fork the repo.

Set Up Your Local Environment

Follow these steps to set up your development environment:

1. Install your development tools

Install your preferred text editor/IDE.

Install Node.js.



2. Clone your fork



git clone https://github.com/YOUR-USERNAME/Frontend.git
cd Frontend

3. Create and switch to a new branch



git checkout -b develop

4. Configure your fork and sync it with the main repo



git remote add upstream https://github.com/DSAIC-Site/Frontend.git
git fetch upstream
git merge upstream/develop

5. Install dependencies



npm install

Make Changes

1. Create a new branch for your changes



git checkout -b new_feature_branch

2. Run the development server



npm run dev

3. Make changes to the code



Use your text editor/IDE to work on your assigned issue.

Test your changes by visiting localhost:3000 in your browser.


4. Format your code



Use Prettier to format your code by running:


npm run prettier:check
npm run prettier:format

5. Add and commit your changes



git add [file_name]
git commit -m "Describe the changes you made [Fixes #1234]"

6. Push your changes to your fork



git push -u origin new_feature_branch

Submit Your Pull Request (PR) 🚀

1. Go to your forked repo on GitHub and submit a PR to the develop branch of the DSAIC-Site/Frontend repo.


2. In the PR description, reference the issue it resolves using GitHub's keyword system.

Example: Fixes #1234.




Review and Merge Process

Your PR will be reviewed as soon as possible.

There might be suggestions for improvements or changes before it is merged.



---

Important: Branching Workflow

1. Each member must work on their own branch. This is mandatory to ensure smooth website development.


2. Compare your branch to the production branch after making your changes.


3. The team lead will compare changes from production to the sub-main branch.


4. The project lead will finally merge changes from sub-main to the main branch.



This flow ensures that the website remains stable and runs smoothly.


---

Contribution.md File

Each development area (frontend and backend) will have a contribution.md file. It is mandatory for everyone contributing to add their name and GitHub profile link to this file. Start by adding your information following this format:


CONTRIBUTORS

----------------  
1.Name: Muchiri Mwangi
  Github Link : https://github.com/MuchiriTheDev
  Worked as : Project Lead

Make sure to add your name and GitHub link to the file after pushing your changes if you haven't.