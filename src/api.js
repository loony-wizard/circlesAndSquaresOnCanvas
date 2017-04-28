function makeAjaxRequest(url, method = "GET", body = "") {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            if (this.status === 200 || this.status === 201) {
                resolve(this.response);
            } else {
                const error = new Error(this.statusText);
                error.code = this.code;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Errors with Network"))
        };

        xhr.send(JSON.stringify(body));

    });

}

function get(url) {
    return makeAjaxRequest(url, 'GET', {});
}

function post(url, data) {
    return makeAjaxRequest(url, 'POST', data);
}

// delete is not reserved
function deleteRequest(url) {
    return makeAjaxRequest(url, 'DELETE', {});
}

export default {
    get,
    post,
    deleteRequest
};