// Your code here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity2= "go to the office") {
    return `This Monday, I will ${activity2}.`;
}
function wrapAdjective(str = "*") {

    return function inner(word = 'special') 
    {
        word = str + word + str + '!'
        return `You are ${word}` 
    }

}
