/* 
 Distributed VCS mei the people working on the Project have the whole project while also all the history of project.

 commiting is like saving before uploading.

 git is the camera and github is public upload section the photo taken.

 Clone : bring a repository hosted somewhere like github into a folder or your local machine.
 Add: Track your files and changes in git
 Commit: Save your files in git
 Push: Upload your commits to a git repo, like github
 Pull: Downloaded changes from a remote repository to your local repository.
*/

/* 
 Now navigating github through GitBash:

 cd ../../   can be written to go two times back in gitbash for folders. Like do peeche le jaayegi ye. Shyd  cd ../  will take one back.
 ls          shows the list of the files in the current open folder.
 *****
 If we write "git init" now it will make a folder named "git" or smth in the folder we have opened.
 and now if u write "ls" toh uss list mei ek "git" folder bhi hoga.
 It will have alll commits, history of changes evrything made to the repository.
 Ab "master" likkh ke aara hoga ofcourse.

 "git status" says that no commits yet but all those files ARE READY TO BE COMMITTED.

 "git add ." will add the files of that section.
 Now "git status" kr toh saari files ki list aajayegi.
 It will still say tho ki no commits yet. Cuz now jus files are ready to be cmmited but theyre not committed yet.
 Isse pehle there were no files available hee.

 We add multiple git messages so that people can know ki everything about the commit we're making.
 ex:
 git commit -m "Adding project files" -m "along with readme"  //we can add multiple messages ofc.
*/
// What we did above was. Take a code wala folder. Create a new repo. Stage those files. And commit those files.  // STAGING FILES MTLB FILES BEING READY TO BE COMMITTED.
// So its a whole fucking process. 
// Files add krne ke liye pehle "git add ." krenge then after that we'll do git commit.
// BAS. 

/* 
 Ohk so all this BUT STILL WE DONT HAVE THESE CODE FILES IN OUR GITHUB REPO.
 THEY ARE COMMITTED TO THE OUR LOCAL REPOSITORY (JO SHYD HUME GIT BANAKE DETA H.)
 WE ACTUALLY NEED TO TELL THAT WE NEED TO PUSH TO A REMOTE REPOSITORY(GITHUB)

 "git remote -v" agr koi result ni dera mtlb our local repository is not connected to a remote one yet.
 now we write:

 "git remote add origin THEREPOLINKWECANCOPY.git"   / .git at end is important

 Now checking git remote -v says for fetching and pulling we can use the same URL

 git status says now "nothing to commi, working tre clean." which means Since you already staged files, committed them, and then added a remote, 
 this clean state is expected and normal. Your local commits are ready to push to the remote repository next.

 Now writing "git push" will say smth too like set upwtream which means ki bta push kahan kru. 

 Toh now we'll write "git push origin master"  //master is the name of our main branch. we can name it anything "main" "aksh" "godTree " anything bas change krna aana chahiye ofc
 cuz "master" is the default name.
 Now all the files will be in that repo.
*/

//Now cloning:
/* 
 its like copying the entire code, its hostory and all the commits ever made to pour local repo from remote repo.
 
 "git clone  URLofthatrepo.git" will clone it
 now name ofc ki open that repo like "cd demo-repo"







