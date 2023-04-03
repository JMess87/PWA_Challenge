const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// ToDo (Done) Added the event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();

//     // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = true;

    butInstall.classList.toggle('hidden', true);
});

// Handler Added for the appinstall event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

});
