function importGoogleFont(family: any) {
        var link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=' + family;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
}



export {importGoogleFont}