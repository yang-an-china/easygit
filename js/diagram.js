function get_gitgraph(id, hash) {
    hash = arguments[1] ? arguments[1] : false;
    var graphContainer = document.getElementById(id);
    var gitTemplate = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
                                              commit: {message: {displayAuthor: false, displayHash: hash}},
                                              branch: {lineWidth: 7}});
    var gitgraph = GitgraphJS.createGitgraph(graphContainer, {template: gitTemplate, branchLabelOnEveryCommit: true});
    return gitgraph;
}

function get_gitgraph_H(id) {
    var graphContainer = document.getElementById(id);
    var gitTemplate = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
                                              commit: {message: {displayAuthor: false, displayHash: false}},
                                              branch: {lineWidth: 7, spacing:90}});
    var gitgraph = GitgraphJS.createGitgraph(graphContainer, {template: gitTemplate, orientation:"horizontal", mode:"compact"});
    return gitgraph;
}
