
const longestCommonPrefix = strs => {

    //if strings.length is zero or not exist
    if(!strs.length) {
        return ''; //then, return nothing
    }
    for(let i = 0; i < strs[0].length; i++) {
        console.log(strs[0])
        console.log(strs[0].length)
        for(let s of strs) {
            if(s[i] !== strs[0][i]) { // if string index i is not matched to first string
                console.log(strs[0][i])
                return s.slice(0, i); //nothing slice from start but slice end i
                
            }
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "floight", "floick"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

