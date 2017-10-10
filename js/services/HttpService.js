class HttpService {
    get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        const links = JSON
                            .parse(xhr.responseText)
                            .map(objeto => new Link(objeto.url, objeto.versao));
                        resolve(links);
                    }else {
                        console.log(xhr.responseText);
                        reject("");
                    }
                }
            };
            xhr.send();
            }
        );
    }
}