//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


//Ans=>

//In this example, we have four disks, and the `towerOfHanoi` function is called with the arguments `'A'` (source rod), `'B'` (auxiliary rod), and `'C'` (destination rod). This will solve the Tower of Hanoi puzzle for four disks, and the program will print each step of the solution. You can adjust the `numDisks` variable or the rod names to solve the puzzle for different configurations.

function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${sourceRod} to ${destinationRod}`);
        return;
    }

    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
}

// Example usage for 4 disks
const numDisks = 4;
towerOfHanoi(numDisks, 'A', 'B', 'C');

