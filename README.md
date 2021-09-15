# git-rebase-workshop
Small repo to train the team on git rebase


## Workshop

1 - Clone the repo: [https://github.com/phliem/git-rebase-workshop](https://github.com/phliem/git-rebase-workshop)


2 - Non interactive rebase: update dev-1 with the latest trunk

- Checkout `dev-1` branch : `git checkout dev-1`
- Rebase `dev-1` on top of trunk. Syntax is `git rebase MY_DESTINATION` (`git rebase trunk`) This will cut & paste the `dev-1` branch on top of `trunk`


3 - Interactive rebase: Renaming a commit

- On the same `dev-1` branch, we will modify a commit message
- Syntax is `git rebase -i MY_DESTINATION` (`git rebase -i trunk`)
- Welcome to VIM!
    - Move with the arrow keys
    - You can switch mode : Press `i` to be able to insert text `esc` to get out of insert mode
    - To save `esc` + `:` + `x`
    - To cancel the last action: `esc` +  `u` (works like ctrl z)
- To rename a commit message, you want to change the beginning of a commit with `reword`
- Save: Press `esc` + `:` + `x`
- You are now stopping in the selected commit
- Rename by typing `i` then what ever text change you want
- Save: Press `esc` + `:` + `x`


4 - Interactive rebase: Move a commit

- On the same `dev-1` branch,  we want to move the commit called "REBASE ME..." in second position (just after "updating text")
- Do an interactive rebase: `git rebase -i trunk`
- In VIM you need now to reorder the commit:
    - Go to the the relevant line with your arrows
    - Cut a line: `esc` + `d` + `d`
    - Move where you want to paste with the arrow
    - Paste with `p`
- Save: Press `esc` + `:` + `x`


5 - Interactive rebase: Fixup commit (regroup two commit together and delete the commit message)

- Do an interactive rebase : `git rebase -i trunk`
- Exactly as you did for renaming with `reword` but this time use `fixup` on the "REBASE ME..." commit
- Save: Press `esc` + `:` + `x`


6 - Interactive rebase: Rebase on top of another branch

Sometime a dev need someone else code.

- `git checkout dev-2`
- Rebase `dev-2` on top of `dev-1` : `git rebase -i origin/dev-1`
- Save: Press `esc` + `:` + `x`
- Panic! There is a conflict
- Remember: If you are lost in a conflict: `git rebase --abort`
- Fix the conflict as usual (replace the Hello word text)
- Stage all of your conflict resolution: `git add .`
- Continue the rebase (this will commit you changes) `git rebase --continue`
- In vim you can edit you commit message and/or save directly
- Save: Press `esc` + `:` + `x`


7 - `dev-2` branch is a mess! Time to cleanup before the review

Cleaning up a branch will highlight works and help reviewer to read a PR. If you do it regularly, it take only few second and helps a lot to follow the development logic.

- When playing with rebase especially at the beginning DO A COPY of your branch `git checkout -b dev-2-save` then go back `git checkout dev-2`
- Task 1: move `REBASE ME: fix wrong number` inside `add more button` commit
- Task 2: regroup all relevant "click me button" related commits into one
    - "Add a click me button"
    - "End of the day WIP save"
    - "Forgot to commit this change"
    - "Bug fix reorder"
    - "No ops: formatting"
- Task 3: rename commits to end up with 3 commits
    - Add confetti library
    - Feat - Add a click me button
    - Feat - Add more button
