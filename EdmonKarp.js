function BreadthFirstSearch(G, s, t, parent) {
    let visited = [];
    let queue = [];
    let V = G.length;
    // Mark untouched vertices as false
    for (let i = 0; i < V; i++) {
        visited[i] = false;
    }
    // Create a queue, enqueue source vertex and mark source vertex as visited
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;

    while (queue.length != 0) {
        let u = queue.shift();
        for (let v = 0; v < V; v++) {
            if (visited[v] == false && G[u][v] > 0) {
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
    //If we reached sink in BFS starting from source, then return true, else false
    return (visited[t] == true);
}

function max_flow(graph, s, t) {

    let G = [];
    for (let u = 0; u < graph.length; u++) {
        let temp = [];

        for (v = 0; v < graph.length; v++) {
            temp.push(graph[u][v]);
        }
        G.push(temp);
    }
    let parent = [];
    let maxFlow = 0;

    while (BreadthFirstSearch(G, s, t, parent)) {
        let pathFlow = Number.MAX_VALUE;
        for (let v = t; v != s; v = parent[v]) {
            u = parent[v];
            pathFlow = Math.min(pathFlow, G[u][v]);
        }
        for (v = t; v != s; v = parent[v]) {
            u = parent[v];
            G[u][v] -= pathFlow;
            G[v][u] += pathFlow;
        }
        maxFlow += pathFlow;
    }
    // Return the overall flow
    return maxFlow;
}

let graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
];

let flow = max_flow(graph, 0, 5);
console.log("Max Flow", flow)