// ## Challenge #7

// You look over at LARRY, expecting him to quack out his next prompt, but it seems LARRY is now the one malfunctioning! You open up the manual, and find the section on LARRY. Apparently, loading modules can sometimes cause LARRY to get stuck in an infinite loop.

// You can fix him, you'll just need to write some code! Write and call a function called resetLARRY() which will prompt LARRY to quack ten times so he breaks out of his loop.

// There is a function called LARRY.quack() that you can use in your code.

const resetLARRY = () => {
  for (let i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

