(function() {
    const url = new URL(window.location.href);
    const clickID = url.searchParams.get("click_id");
    const sourceID = url.searchParams.get("source_id");

    const s = document.createElement("script");
    s.dataset.cfasync = "false";
    s.src = "https://push-sdk.com/f/sdk.js?z=1250585";
    s.onload = (opts) => {
        opts.zoneID = 1250585;
        opts.extClickID = clickID;
        opts.subID1 = sourceID;
        opts.actions.onPermissionGranted = () => {};
        opts.actions.onPermissionDenied = () => {};
        opts.actions.onAlreadySubscribed = () => {};
        opts.actions.onError = () => {};
    };
    document.head.appendChild(s);
})()