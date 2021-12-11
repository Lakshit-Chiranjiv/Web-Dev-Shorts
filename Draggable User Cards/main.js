const drop_box = document.getElementById('dropbox');

new Sortable(drop_box, {
    animation: 350,
    ghostClass: 'blue-background-class',
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});