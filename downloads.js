(() => {
    const allowedDownload = value => {
        try { const url = new URL(value); return url.protocol === 'https:' && url.hostname === 'github.com' && url.pathname.startsWith('/Siitospastori/Aava-iptv-downloads/releases/download/'); }
        catch { return false; }
    };
    fetch('releases.json').then(response => { if (!response.ok) throw Error('No manifest'); return response.json(); }).then(releases => {
        const windows = releases.windows;
        if (windows && allowedDownload(windows.url)) {
            document.getElementById('windows-download').href = windows.url;
            document.getElementById('windows-version').textContent = windows.version;
        }
        const mac = releases.mac;
        if (mac?.status !== 'published' || !allowedDownload(mac.url)) return;
        const english = document.documentElement.lang === 'en';
        const link = document.createElement('a');
        link.id = 'mac-download'; link.className = 'button primary full'; link.href = mac.url;
        link.textContent = english ? 'Download for Mac ↓' : 'Lataa Macille ↓';
        document.getElementById('mac-download').replaceWith(link);
        document.getElementById('mac-badge').textContent = english ? 'Available' : 'Ladattavissa';
        document.getElementById('mac-badge').classList.remove('pending');
        document.getElementById('mac-version').textContent = `${mac.version} · DMG`;
        document.getElementById('mac-requirements').textContent = mac.minimumSystem || 'macOS';
        document.getElementById('mac-status').textContent = english ? 'Open the DMG and drag Aava IPTV into Applications.' : 'Avaa DMG ja vedä Aava IPTV Applications-kansioon.';
    }).catch(() => { /* The Windows link is also present in HTML; an unavailable manifest never exposes an unfinished Mac package. */ });
})();
