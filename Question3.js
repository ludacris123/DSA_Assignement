//Q3.Write a program to check if two strings are a rotation of each other?


//Ans=>

function areRotations(str1, str2) {
    // Check if the lengths of the two strings are the same.
    if (str1.length !== str2.length) {
        return false;
    }

    // Concatenate str1 with itself to create a larger string.
    const concatenatedStr = str1 + str1;

    // Check if str2 is a substring of the concatenated string.
    if (concatenatedStr.includes(str2)) {
        return true;
    }

    return false;
}

// Example usage:
const string1 = "hello";
const string2 = "lohel";

if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
}
