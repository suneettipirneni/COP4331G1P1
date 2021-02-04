// Populate local user data, and welcome them
window.onload = function () {
    $.ajaxSetup({
        async: false
    });
    populateUserCache();
    welcomeUser();
    populateModals();
};

/**
 * Populates the modal html in on load so it doesn't clutter the base html.
 */
function populateModals() {
    $("#edit-modal-prop").load("../modal/editModal.html", () => {
        $("#delete-modal-prop").load("../modal/deleteModal.html", () => {
            $("#new-modal-prop").load("../modal/createModal.html", () => {
                populateContacts(true);
            })
        })
    })
}