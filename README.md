# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program. 

The worst-cast $\Theta$ is from the n^2 loop for my merge methods, and the normal logn of the mergesort depth, so the span of this program should be $\Theta(n^2 * log(n))$

## Heads Up
The code doesn't work right now, I couldn't find test code that worked and I don't have any time left to write my own, so the code is purely theoretical. This may not work.

## Sources and Plagarism Statement
Borrowed test code from Maxie M's repo, doesn't work but I figured I'd leave it here anyway.
Used my code from a previous assignment and referenced the slides on mergesort

Sources from the last problem, which was helpful here.
I used [w3schools](https://www.w3schools.com/dsa/dsa_algo_mergesort.php) to help me with the merge function. Michael Stoll helped me figure out the general logic and helped walk me through the runtime analysis. I took the general loop structure of two nested for loops from Lily Brongo, who also helped me with some of the syntax and flow of the program. Lily also told me to go to the slides for help with the code and the Runtime Analysis. I used [hyperskill](https://hyperskill.org/blog/post/javascript-array-slicing-techniques#:~:text=In%20JavaScript%2C%20you%20can%20do,and%20the%20end%20is%20exclusive.) to help with splitting the arrays

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
