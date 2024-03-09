// functions to intract with the user: alert, prompt and confirm.
// 1. alert() - shows a message.
// 2. prompt() - shows a message. input Text. it returns the text on ok or, if cancel button or esc is clicked/esc.
// 3. confirm() - shows a message. confirm with "ok" or "cancel". it returns true for ok and false for cancel/esc.

// Note: All these pause script execution and dont allow the visitor to interact with the rest of the page until the window has been dismissed
let response = confirm('Are you sure you want to delete')

if(response){
    document.write('Deleted');

}
else{
    document.write('Not delete');
}