// This code will run in the background and do the search
onmessage = function(e) {
    const { jsonData, searchTerm } = e.data;  // Get data sent from main thread
    const results = [];

    // Function to search through the nodes
    function searchNode(node, term) {
        const isMatch = node.text.toLowerCase().includes(term.toLowerCase());
        let childMatch = false;

        if (node.nodes) {
            node.nodes.forEach(childNode => {
                if (searchNode(childNode, term)) childMatch = true;
            });
        }

        if (isMatch || childMatch) {
            results.push(node);  // If there's a match, add it to results
            return true;
        }
        return false;
    }

    // Loop through the JSON data and search for matches
    jsonData.forEach(node => searchNode(node, searchTerm));
    
    // Send the results back to the main thread
    postMessage(results);
};
