import {ApiRoutes, getServerUrl} from "../../routes/Routes";

export function deleteEntity(entity, navigate) {
    let isConfirmed = window.confirm("Are you sure you want to delete this entity?");
    if (isConfirmed) {
        let deleteUrl = getServerUrl(ApiRoutes.delete);
        const requestOptions = {
            headers: this.props.getHeaders(),
            method: 'POST',
            body: JSON.stringify({title: entity.title})
        };
        fetch(deleteUrl, requestOptions).then(results => {
            return results.json();
        }, error => {
            alert("error connecting to server");
        }).then(data => {
            if (data) {
                if (data.status === 200) {
                    navigate('/');
                }
                else {
                    alert("login error! " + data.status);
                }
            }
        });
    }
}
