function get_gitgraph(id) {
    var graphContainer = document.getElementById(id);
    var gitTemplate = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
                                              commit: {message: {displayAuthor: false, displayHash: false}},
                                              branch: {lineWidth: 7}});
    var gitgraph = GitgraphJS.createGitgraph(graphContainer, {template: gitTemplate, branchLabelOnEveryCommit: true});
    return gitgraph;
}

