# An implementation of the *Ford–Fulkerson* method for computing the maximum flow in a flow network

The program takes graph matrix as an imput
For example:
```shell
0,16,13,0,0,0
0,0,10,12,0,0
0,4,0,0,14,0
0,0,9,0,0,20
0,0,0,7,0,4
0,0,0,0,0,0
```
Then it executes Edmonds Karp algorythm, which uses [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) for finding paths between vertices and calculates the maximum network flow.